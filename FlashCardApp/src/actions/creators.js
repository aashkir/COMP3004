import {
    ADD_DECK,
    ADD_CARD,
    SEARCH,
} from './types'

import Card from './../utilities/data/Card'
import Deck from './../utilities/data/Deck'

export const addDeckAction = (title, subtitle) => {
    return { type : ADD_DECK, payload: new Deck(title, subtitle) }
}

export const addCardAction = (front, back, deckID) => {
    return { type : ADD_CARD, payload: new Card(front, back, deckID) }
}

export const searchAction = (term) => {
    return { type : SEARCH, payload: term }
}