import { ADD_DECK, ADD_CARD } from '../actions/types'

function deckArrayWithNewCard(decks, card) {
    return decks.map(deck => {
        if (deck.id === card.deckID) {
            deck.addCard([card])
        }
        return deck
    })
}

function deckArrayWithSearchTerm(decks, term) {
    if (term === "") return decks

    return decks.filter(deck => deck.title.includes(term))
}

const reducer = (state = [], action) => {
    console.warn("Changes are not persistant.")
    switch (action.type) {
        case ADD_DECK:
            return state.concat(action.payload)
        case ADD_CARD:
            return deckArrayWithNewCard(state, action.payload)
    }
    return state
}

export default reducer