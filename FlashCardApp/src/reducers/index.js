/* PUT ALL YOUR INITIAL STATE VALUES HERE */

import { MockDecks, MockCards } from "./../utilities/data/MockData"

import deckReducer from "./DeckReducer"
import searchReducer from "./SearchReducer"
// soon initial state will be from a DB
const INITIAL_STATE = {
    decks: MockDecks,
    search_term: "",
}

export const reducer = (state = INITIAL_STATE, action) => {
    let decks = deckReducer(state.decks, action)
    let search_term = searchReducer(state.search_term, action)

    return {
        decks: decks,
        search_term: search_term,
    }
}