import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { Container, Header, Content, List, ListItem, Text, Left, Body, Right, Icon, Button } from 'native-base';

import DeckModel from "./../../data/Deck";

import colors from "./../../styles/colors";

class Deck extends Component {
    static displayName = "Deck"

    _viewDeck = () => {
        this.props.viewDeck()
    }

    render() {
        return (
            <ListItem noIndent button={true} onPress={this.props.onPress}>
                <Left>
                    <Text>{this.props.deck.title}</Text>
                </Left>
                <Body>
                    <Text>{this.props.count} Cards</Text>
                </Body>
                <Right>
                    <Icon name="arrow-forward" />
                </Right>
            </ListItem>
        )
    }
}

const styles = StyleSheet.create({
    listItem: { backgroundColor: colors.pink},
})
  
export default Deck;