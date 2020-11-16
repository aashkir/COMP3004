import { ADD_DECK, ADD_CARD, LOAD_DATA } from '../actions/types'
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

    }
    return updatedState
}

export default reducer