import React, { Component } from "react"
import { Container, Content } from "native-base"

import SearchHeader from '../../components/SearchHeader'
import TitleHeader from "../../components/TitleHeader"


export default class NewDeckScreen extends Component {
    static displayName = "New Deck"

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <TitleHeader title={NewDeckScreen.displayName} goBack={this.props.navigation.goBack}/>
                <Content></Content>
            </Container>
        )
    }
}