import React, { Component } from "react"
import { Container, Content, Form, Label, Input, Button, Item, Text } from "native-base"

import TitleHeader from "../../components/TitleHeader"

import { MockDecks, saveDeck } from "./../../data/MockData"

export default class NewDeckScreen extends Component {
    static displayName = "New Deck"

    constructor(props) {
        super(props)
        this.state = { title : "", subtitle : ""}
    }

    _handleTitle = text => {
        this.setState({ title: text })
    }

    _handleSubtitle = text => {
        this.setState({ subtitle: text })
    }

    _createDeck = () => {
        //saveDeck(this.state.title, this.state.subtitle)
        console.warn("Not Truly Implemented, using mock data.")
    }

    render() {
        return (
            <Container>
                <TitleHeader title={NewDeckScreen.displayName} goBack={this.props.navigation.goBack}/>
                <Content>
                    <Form>
                        <Item stackedLabel>
                        <Label>Deck Title</Label>
                        <Input 
                            clearOnSubmit={false}
                            onEntry={this._handleTitle}
                            onChange={this._handleTitle}
                        />
                        </Item>
                        <Item stackedLabel last>
                        <Label>Deck Subtitle</Label>
                        <Input 
                            clearOnSubmit={false}
                            onEntry={this._handleSubtitle}
                            onChange={this._handleSubtitle}
                        />
                        </Item>
                    </Form>

                    <Button block onPress={this._createDeck}>
                        <Text>Save Deck</Text>
                    </Button>
                </Content>
            </Container>
        )
    }
}