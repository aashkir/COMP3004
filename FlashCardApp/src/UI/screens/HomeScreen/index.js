import React, { Component } from "react";
import { StyleSheet } from "react-native"
import { Container, Content, H1, Root, } from "native-base"

import SearchHeader from './../../components/SearchHeader'
import AddButton from './../../components/AddButton'
import Deck from './Deck'
import RecentDeck from './RecentDeck'
import MainFooter from "../../components/MainFooter"

import { connect } from "react-redux"
import { searchAction } from "./../../../actions/creators"
import { Col, Row, Grid } from 'react-native-easy-grid';
import colors from "../../styles/colors";

class HomeScreen extends Component {
    static displayName = "Home"

    _createRecentDeckView() {
        // create recent decks
        if (this.props.decks.length > 3) {
            // not implemented, just return null for now
            
            // sorting will be delegated at a higher level
            let mostRecentDecks = this.props.decks.slice(0, 4);
            return (
                <Grid>
                    <Row>
                        <H1>Recent Decks</H1>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <RecentDeck deck={mostRecentDecks[0]} onPress={() => {this._viewDeck(mostRecentDecks[0].id)}} />
                            </Row>
                            <Row>
                                <RecentDeck deck={mostRecentDecks[2]} onPress={() => {this._viewDeck(mostRecentDecks[2].id)}}/>
                            </Row>
                        </Col>
                        <Col>
                            <Row>
                                <RecentDeck deck={mostRecentDecks[1]} onPress={() => {this._viewDeck(mostRecentDecks[1].id)}}/>
                            </Row>
                            <Row>
                                <RecentDeck deck={mostRecentDecks[3]} onPress={() => {this._viewDeck(mostRecentDecks[3].id)}}/>
                            </Row>
                        </Col>
                    </Row>
                </Grid>
            )
        }
        return null
    }

    _createDeckViews() {
        if (!this.props.decks) {
            return null
        }

        return this.props.decks.map(deck => {
            console.log(deck.getDueCards(), deck.getUnmemorizedCards(), deck.getMemorizedCards())
            return <Deck deck={deck} count={deck.cards.length} key={deck.id} onPress={() => {this._viewDeck(deck.id)}} />
        })
    }

    _addDeck = () => {
        //console.log(this.props.decks[0].cards.length)
        this.props.navigation.navigate("New Deck")
    }

    _onSearch = (title) => {
        this.props.searchDeck(title)
    }

    _viewDeck = (id) => {
        //console.log(id)
        this.props.navigation.navigate("View Deck", {deckID : id})
    }

    render() {
        return (
            <Container>
                <SearchHeader onSearch = {this._onSearch}/>
                <Root>
                    <Content>
                        {this._createRecentDeckView()}
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

const getRecentDecks = (decks) => {
    console.log("recent decks")
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
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen)