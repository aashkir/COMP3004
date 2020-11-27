import React, { Component } from 'react';
import { Container, Header, Item, Input, Icon, Button, Text, Left, Body, Right, Segment, Content } from 'native-base';

export default class SearchHeader extends Component {

    _canGoBack() {
        let back = <Left>
                        <Button transparent onPress={this.props.goBack}>
                            <Icon name="arrow-back" />
                        </Button>
                    </Left>
        return(this.props.canGoBack ? back : null )
    }

    render() {
        return (
            <Container>
                <Header searchBar rounded>
                    {this._canGoBack()}
                    <Item>
                        <Icon name="ios-search" />
                        <Input placeholder="What are you looking for?" />
                    </Item>
                    <Button transparent>
                        <Text>What are you looking for?</Text>
                    </Button>
                    
                </Header>
            </Container>
        );
    }
}