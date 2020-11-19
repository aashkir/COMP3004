import React, { Component } from "react"
import { Container, Header, Content , Text, Divider, View, H1} from "native-base"

import SearchHeader from './../../components/SearchHeader'
import AddButton from "./../../components/AddButton"
//import StudyButton from "./../../components/StudyButton"

import CardComponent from './CardComponent'

import { connect } from "react-redux"
import { searchAction } from "./../../../actions/creators"
import MainFooter from "../../components/MainFooter"

class DeckScreen extends Component {
    static displayName = "View Deck"

    _addCard = () => {
        this.props.navigation.navigate("New Card", {'deckID' : this.props.route.params.deckID})
    }

    _viewCard() {
        console.warn("View card not implemented.")
    }

    _study() {
        // generate a study
        console.warn("Study not implemented")
    }

    _onSearch = (title) => {
        this.props.searchCard(title)
    }

    _createCardViews() {
        if (!this.props.cardResults) {
            return null
        }
        return this.props.cardResults.map(card => {
            return <CardComponent card={card} key={card.cardID} onPress={this._viewCard} />
        })
    }

    _findDeck() {
        return this.props.decks.find((deck) => {return (deck.id === this.props.route.params.deckID)});
    }


    render() {
        return (
            
            <Container>
                <SearchHeader title="Temp" onSearch={this._onSearch} canGoBack={this.props.navigation.canGoBack} goBack={this.props.navigation.goBack} />
                <Content>
                    <H1>{this._findDeck().title}</H1>
                    {this._createCardViews()}
                </Content>
                <AddButton onPress={this._addCard} />
                <MainFooter navigation={this.props.navigation}/>
            </Container>
        )
    }
}

const getFilteredCards = (decks, term, deckID) => {
    let deck = decks.find((deck) => {return deck.deckID === deckID})
    if (term === "" || term === undefined) {
        return deck.cards
    }
    console.log(deck.cards.filter(card => card.front.includes(term)));
    return deck.cards.filter(card => card.front.includes(term));
}

const mapStateToProps = (state, ownProps) => {
    return {
        decks : state.decks,
        search_term : state.search_term,
        cardResults : getFilteredCards(state.decks, state.search_term, ownProps.deckID)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createCard: (front, back, deckID) => {
            dispatch(addCardAction(front, back, deckID))
        },
        searchCard: (title) => {
            dispatch(searchAction(title))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckScreen);
