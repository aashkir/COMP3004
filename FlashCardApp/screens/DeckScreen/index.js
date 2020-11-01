import React, { Component } from "react"
import { Container, Header, Content } from "native-base"

import SearchHeader from '../../components/SearchHeader'


export default class DeckScreen extends Component {
    static displayName = "View Deck"

    constructor(props) {
        super(props)
    }

    render() {
        return (
            <Container>
                <SearchHeader canGoBack={this.props.navigation.canGoBack} goBack={this.props.navigation.goBack}/>
                <Content>
                    
                </Content>
            </Container>
        )
    }
}