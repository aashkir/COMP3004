import { ADD_DECK, ADD_CARD, REPLACE_CARD, LOAD_DATA } from '../actions/types'
import Deck from '../utilities/data/Deck'
import { writeDecks } from './../utilities/storage/decks'

function deckArrayWithNewCard(decks, card) {
    return decks.map(deck => {
        if (deck.id === card.deckID) {
            deck.addCard(card)
        }
        return deck
    })
}

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
    }
    return updatedState
}

export default reducer