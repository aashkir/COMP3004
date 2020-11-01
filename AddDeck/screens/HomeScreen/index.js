import React, { Component } from "react";

import { StatusBar } from "react-native"
import { Container, Header, Title, Left, Icon, Right, Button, Body, Content, Text, Card, CardItem, Fab, ListItem } from "native-base"

import SearchHeader from './../../components/SearchHeader'
import AddButton from './../../components/AddButton'
import Deck from './Deck'

import { MockDecks } from "./../../data/MockData"

export default class HomeScreen extends Component {
    static displayName = "Home"

    constructor(props) {
        super(props)
        this.state = { decks : MockDecks }
    }

    UNSAFE_componentWillMount(){
            this.setState({deck: MockDecks});
    }

    _createRecentDeckView() {
        // create recent decks
        if (this.state.decks.length > 5) {
            // sorting will be delegated at a higher level
            let mostRecentDecks = this.state.decks.slice(0, 4);
            return (
                <RecentDecks decks={mostRecentDecks} />
            )
        }
        return null
    }

    _createDeckViews() {
        if (!this.state.decks) {
            return null
        }

        return this.state.decks.map(deck => {
            return <Deck deck={deck} count={deck.cards.length} key={deck.id} onPress={this._viewDeck} />
        })
    }

    _addDeck = () => {
        this.props.navigation.navigate("New Deck")
    }

    _onSearch = () => {
        console.warn("Searching is not implemented.")
    }

    _viewDeck = () => {
        console.warn("Viewing deck is not implemented.")
        this.props.navigation.navigate("View Deck")
    }

    render() {
        return (
            <Container>
                <SearchHeader />
                <Content>
                    {this._createRecentDeckView()}
                    {this._createDeckViews()}
                </Content>
                <AddButton onPress={this._addDeck} />
            </Container>
        );
    }
}