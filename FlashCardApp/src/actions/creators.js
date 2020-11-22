import {
    ADD_DECK,
    ADD_CARD,
    SEARCH,
    LOAD_DATA,
    CREATE_STUDY,
    NEXT_CARD,
    END_STUDY,
    UPDATE_DECK
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

export const loadDataAction = (data) => {
    return { type : LOAD_DATA, payload: data }
}

export const createStudyAction = (deckID) => {
    return { type : CREATE_STUDY, payload: deckID }
}

export const nextReviewAction = () => {
    return { type: NEXT_CARD, payload: {} };
}

export const endStudyAction = () => {
    return { type: END_STUDY, payload: {} };
}

export const updateDeckWithDeckAction = (deck) => {
    return { type: UPDATE_DECK, payload: deck };
}