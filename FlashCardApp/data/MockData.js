import CardModel from "./Card"
import DeckModel from "./Deck"

let MockFrenchCards = [
    new CardModel("le chien", "the dog", "mockID"),
    new CardModel("l'enfant", "the child", "mockID"),
    new CardModel("la femme", "the woman", "mockID"),
    new CardModel("le chat", "the cat", "mockID")
]

let MockComp3004Cards = [
    new CardModel("Domain Models model what?", "A piece of the real world abstractly", "mockID"),
    new CardModel("What makes up the Domain Model?",
                  "Conceptual Classes, Boundary Objects, Domain Objects, and Transient Objects",
                  "mockID"),
]

let MockDecks = [new DeckModel("French", "nouns"), new DeckModel("Comp3004", "domain models"), new DeckModel("French1", "verbs"), new DeckModel("French2", "etc")]

MockDecks[0].addCard(MockFrenchCards)
MockDecks[1].addCard(MockComp3004Cards)
MockDecks[2].addCard(MockFrenchCards)
MockDecks[3].addCard(MockFrenchCards)

let MockFrenchDeck = MockDecks[0]
let MockComp3004Deck = MockDecks[1]
let MockFrench2Deck = MockDecks[2]
let MockFrench3Deck = MockDecks[3]

let MockCards = [...MockFrenchCards, ...MockComp3004Cards]

export { MockCards, MockDecks, MockFrenchDeck, MockComp3004Deck, MockFrench2Deck, MockFrench3Deck }