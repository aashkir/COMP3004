import md5 from "md5"

class Card {
    constructor(front, back, deckID) {
        this.front = front
        this.back = back
        this.deckID = deckID
        this.cardID = md5(front + back + deckID)
        this.EF = 2.5 // E-Factor
    }
}

export default Card