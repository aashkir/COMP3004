import md5 from "md5"

class Deck {
    constructor(title, subtitle) {
        this.title = title
        this.subtitle = subtitle
        this.cards = []
        this.lastReviewed = Date.now()
        this.lastModified = Date.now() // transaction-id
        this.id = md5(title + this.lastReviewed)
    }
    // For loading a deck from storage
    setFromObject(ob) {
        this.name = ob.name
        this.cards = ob.cards
        this.id = ob.id
        this.lastReviewed = ob.lastReviewed
        this.lastModified = ob.lastModified
    }

    static fromObject(ob) {
        let d = new Deck(ob.title, ob.subtitle);
        d.setFromObject(ob);
        return d;
    }

    addCard(card) {
        //console.log('adding card')
        this.cards = this.cards.concat(card)
    }

    updateReview() {
        this.lastReviewed = Date.now()
    }

    updateModification() {
        this.lastModified = Date.now()
    }
}

export default Deck