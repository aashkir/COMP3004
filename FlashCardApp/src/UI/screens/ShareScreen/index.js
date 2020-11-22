import React, { Component } from "react";
import { StyleSheet } from "react-native"
import { Container, Content, H1, Root, } from "native-base"

import SearchHeader from './../../components/SearchHeader'
import AddButton from './../../components/AddButton'
import Deck from '../HomeScreen/Deck'
import MainFooter from "../../components/MainFooter"

import { connect } from "react-redux"
import { searchAction} from "./../../../actions/creators"
import { Col, Row, Grid } from 'react-native-easy-grid';
import colors from "../../styles/colors";

import { uploadFireBase, downloadFireBase } from "./../../../reducers/DeckReducer"

class ShareScreen extends Component {
    static displayName = "Share"

    _createDeckViews() {
        if (!this.props.decks) {
            return null
        }

        return this.props.decks.filter(deck => deck.synced === true).map(deck => {
            return <Deck deck={deck} count={deck.cards.length} key={deck.id} onPress={() => {this._viewDeck(deck.id)}} />
        })
    }


    _onSearch = (title) => {
        this.props.searchDeck(title)
    }

    _shareDeck = (deck) => {
        this.props.uploadDeck(uploadFireBase(deck))
    }

    _getDeck = (deckId) => {
        this.props.downloadDeckDeck(downloadFireBase(deckId))
    }

    _viewDeck = (id) => {
        this.props.navigation.navigate("View Deck", {deckID : id})
    }

    render() {
        return (
            <Container>
                <SearchHeader onSearch = {this._onSearch}/>
                <Root>
                    <Content>
                        <Grid>
                            <Row>
                                <H1>Shared Decks</H1>
                            </Row>
                        </Grid>
                        {this._createDeckViews()}
                    </Content>
                    <AddButton onPress={this._addDeck} />
                </Root>
                <MainFooter navigation={this.props.navigation}/>
            </Container>
        );
    }
}

// get search results here
const getDeckResults = (decks, term) => {
    if (term === "" || term === undefined) {
        return decks
    }
    return decks.filter(deck => deck.title.includes(term))
}


const mapStateToProps = state => {
    return {
        search_term : state.search_term,
        decks : getDeckResults(state.decks, state.search_term),
    }
}

const mapDispatchToProps = dispatch => {
    return {
        searchDeck: (title) => {
            dispatch(searchAction(title))
        },
        uploadDeck: (uploadFireBase_Function) => {
            dispatch(uploadFireBase_Function)
        },
        downloadDeck: (downloadFireBase_Function) => {
            dispatch(downloadFireBase_Function)
        }

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShareScreen)