import { ADD_DECK, ADD_CARD, LOAD_DATA, UPDATE_DECK, REPLACE_CARD } from '../actions/types'

import Deck from '../utilities/data/Deck'
import { writeDecks } from './../utilities/storage/decks'
import { updateDeckWithDeckAction } from "../actions/creators"

const axios = require('axios').default;
var baseAPIUrlSyncedDeck = 'https://flashcard-comp3004.firebaseio.com/SyncedDeck/'
var apiEnd = ".json";
import md5 from "md5"

// used for modifying cards (note: ID's have to be identical)
function deckArrayWithReplacedCard(decks, replacerCard) {
    return decks.map(deck => {
        if (deck.id === replacerCard.deckID) {
            deck.cards = deck.cards.map(card => {
                if (card.cardID === replacerCard.cardID) {
                    return replacerCard
                }
                return card
            })
        }
        return deck
    })
}



function saveDecks(state) {
    writeDecks(state)
    return state
}


const reducer = (state = [], action) => {
    let updatedState = state
    switch (action.type) {
        case LOAD_DATA:
            updatedState = action.payload // decks loaded from disk
            return updatedState
        case ADD_DECK:
            updatedState = state.concat(action.payload)
            saveDecks(updatedState)
            return updatedState
        case ADD_CARD:
            updatedState = deckArrayWithNewCard(state, action.payload)
            saveDecks(updatedState)
            return updatedState
        case REPLACE_CARD:
            updatedState = deckArrayWithReplacedCard(state, action.payload)
            saveDecks(updatedState)
            return updatedState
        case UPDATE_DECK:
            updatedState = updatedDeckWithDeck(state, action.payload)
            saveDecks(updatedState)
            return updatedState
    }
    return updatedState
}

function deckArrayWithNewCard(decks, card) {
    return decks.map(deck => {
        if (deck.id === card.deckID) {
            deck.addCard(card)
            deck.updateModification()
        }
        return deck
    })
}

function saveDecks(state) {
    writeDecks(state)
    return state
}

function updatedDeckWithDeck(decks, deckToAdd){
    let found = false
    for (let i = 0; i < decks.length; i++){
        //if local contains deck, replaced with new deck
        if (decks[i].id = deckToAdd.id){
            decks[i] = deckToAdd
            found = true
        }
    }

    if (found){
        decks.concat(deckToAdd)
    }

    return decks
}

async function getDeck(deckId) {
    try {
        const res = await axios.get(baseAPIUrlSyncedDeck + deckId + apiEnd)
        return res.data;
    } catch (error) {
        console.error(error)
    }
}

async function putDeck(deck){
    let deckId = deck.id
    try {
        const res = await axios.put(baseAPIUrlSyncedDeck + deckId + apiEnd, deck);
    } catch (err){
        console.error(err)
    }
}

async function checkDeckExists(deckId){
    let response = await getDeck(deckId)
    if (response === null){
        return false
    } else {
        return true
    }
}

function cleanUpDeckForUpload(deck){
    deck.lastReviewed = 0
    for (let i = 0; i < deck.length; i++){
        deck[i].EF = 2.5     //GOBACK TO SET DEFAULT VALUE
    }

    return deck
}

async function deleteDeck(deckID){
    try {
        await axios.delete(baseAPIUrlSyncedDeck + deckId + apiEnd)
    } catch (error) {
        console.error(error)
    }
}

export function uploadFireBase(deck){
    return async function uploadToFireBase(dispatch, getState){
        let uploadingDeck = cleanUpDeckForUpload(deck)

        //testing value
        uploadingDeck.id = '1'
        //testing values end

        //check if deck exists on server
        if (await checkDeckExists(uploadingDeck.id)){
            deleteDeck(uploadingDeck.id)
            putDeck(uploadingDeck)
        } 
        //deck doesn't exists on server, so add the new deck to server
        else {
            putDeck(uploadingDeck)
        }
        uploadingDeck.synced = false
        dispatch(updateDeckWithDeckAction(uploadingDeck))
    }
    
}

export function downloadFireBase(deckIdString){
    return async function downloadToFireBase(dispatch, getState){

        let responseData = await getDeck(deckIdString)
        if (responseData !== null){
            responseData.id = md5(response.title + Date.now())
            dispatch(updateDeckWithDeckAction(responseData))
        } else {
            console.warn("deckId not found on Firebase")
        }

    }
}

export default reducer