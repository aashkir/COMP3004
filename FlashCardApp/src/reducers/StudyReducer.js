/* This reducer generates a quiz/study based on a deck given, it achieves this through https://www.supermemo.com/en/archives1990-2015/english/ol/sm2 */
// currently implemented as using the whole deck.

import { CREATE_STUDY, NEXT_CARD, END_STUDY } from "./../actions/types"
import { writeDecks } from './../utilities/storage/decks'
import Queue from "./../utilities/ds/Queue"
import { endStudyAction } from "../actions/creators"

export const setStudyState = (
        deckID = null, 
        studyQueue = null
    ) => {
    return { deckID, studyQueue }
}

function saveDecks(decks) {
    writeDecks(decks)
    return decks
}

/*
function deckArrayWithReplacedCard(decks, card, index) {
    return decks.map(deck => {
        if (deck.id === card.deckID) {
            deck.cards[index] = card
        }
        return deck
    })
}*/

function generateStudy(deck) {
    console.log("generaternio")
    let studyQueue = new Queue()
    console.log("gen2")
    // filter deck where easiness fector is below a certain number
    let studyCards = deck.cards.filter(card => { 
        return card.EF <= 2.5
      })
    
    // put the study cards into the queue for easier operations
    studyCards.map((studyCard) => {
        return studyQueue.enqueue(studyCard)
    })
    return setStudyState(deck.id, studyQueue)
}

function getDeck(decks, deckID) {
    return decks.find(deck => {
        return (deck.id === deckID)
    })
}

function modifyEF(card, response) {
    // modify the easy factor according to the response given (difficult, good, easy)
    console.log(response)
    return card
}

function endStudy(state) {
    console.log("study ended")
}

// user gave a response to the flashcard.
function nextCard(state, response) {
    if (state.studyQueue.isEmpty()) endStudy(state)
    console.log("Modifying card, response is: ", response)
    let card = modifyEF(state.studyQueue.dequeue(), response)

    return setStudyState(
        state.deckID,
        state.studyQueue,
    )
}

const reducer = (state = setStudyState(), action, decks) => {
    let updatedState = state // made explicit to show state management
    switch (action.type) {
        case CREATE_STUDY:
            updatedState = generateStudy(getDeck(decks, action.payload))
            return updatedState
        case NEXT_CARD:
            updatedState = nextCard(state, action.payload) 
            //saveDecks(decks)
            return updatedState
    }
    return updatedState
}

export default reducer