/* PUT ALL YOUR INITIAL STATE VALUES HERE */

import deckReducer from "./DeckReducer"
import searchReducer from "./SearchReducer"

const INITIAL_STATE = {
    decks: [],
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