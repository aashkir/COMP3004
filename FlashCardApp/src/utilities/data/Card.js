import md5 from "md5"

class Card {
    constructor(front, back, deckID) {
        this.front = front
        this.back = back
        this.deckID = deckID
        this.cardID = md5(front + back + deckID)
        this.EF = 2.5 // E-Factor
        this.lastModified = Date.now()
    }
    // setting attributes of the object from storage
    setFromObject(ob) {
        this.front = ob.front
        this.back = ob.back
        this.deckID = ob.deckID
        this.cardID = ob.id
        this.EF = ob.EF
        this.lastModified = ob.lastModified
    }
    
    // creating the object from storage
    static fromObject(ob) {
        let c = new Card(ob.front, ob.back, ob.deckID)
        c.setFromObject(ob)
        return c
    }

    updateModification() {
        this.lastModified = Date.now()
    }
}

export default Card