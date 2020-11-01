import md5 from "md5"

class Deck {
    constructor(title, subtitle) {
        this.title = title
        this.subtitle = subtitle
        this.id = md5(title + subtitle)
        this.cards = []
        this.lastReviewed = Date.now()
    }

    addCard(card) {
        this.cards.push(...card)
    }

    updateReview() {
        this.lastReviewed = Date.now()
    }
}

export default Deck