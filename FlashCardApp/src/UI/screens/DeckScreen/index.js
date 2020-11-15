import React, { Component } from "react"
import { Container, Header, Content , Text, Divider, View, H1} from "native-base"

import SearchHeader from './../../components/SearchHeader'
import AddButton from "./../../components/AddButton"
//import StudyButton from "./../../components/StudyButton"

import CardComponent from './CardComponent'

import { connect } from "react-redux"
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

    _createCardViews() {
        if (!this.props.currentDeck) {
            return null
        }
        //console.log(this.props.currentDeck)
        return this.props.currentDeck.cards.map(card => {
            return <CardComponent card={card} key={card.cardID} onPress={this._viewCard} />
        })
    }


    render() {
        return (
            <Container>
                <SearchHeader title="Temp" canGoBack={this.props.navigation.canGoBack} goBack={this.props.navigation.goBack}/>
                <Content>
                    <H1>{this.props.currentDeck.title}</H1>
                    {this._createCardViews()}
                </Content>
                <AddButton onPress={this._addCard} />
                <MainFooter navigation={this.props.navigation}/>
            </Container>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return {
        decks : state.decks,
        currentDeck : state.decks.find(deck => deck.id === ownProps.route.params.deckID)
    }
}

const mapDispatchToProps = dispatch => {
    return {
        createCard: (front, back, deckID) => {
            dispatch(addCardAction(front, back, deckID))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(DeckScreen);