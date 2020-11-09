import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import { Container, Header, Content, List, ListItem, Text, Left, Body, Right, Icon, Button, Card, CardItem } from 'native-base'

import colors from "./../../styles/colors"

class CardView extends Component {
    static displayName = "Card Views"

  
    render() {
        return (
            <Card >
                <CardItem header style={[styles.cardHeader, styles.color]} button onPress={this._goToCardView}>
                    <Left>
                        <Strong>{this.props.deck.title}</Strong>
                    </Left>
                    <Body>
                        <Strong>{this.props.count} Cards</Strong>
                    </Body>
                    <Right>
                        <Icon name="arrow-forward"  style={styles.icon}/>
                    </Right>
                </CardItem>

                <CardItem style={styles.cardBody}>
                    <Left>
                        <Text>
                            {this.props.deck.subtitle}
                        </Text>
                    </Left>
                </CardItem>
          </Card>
        )
    }
}

const styles = StyleSheet.create({
    color: { backgroundColor: colors.pink },
    cardHeader : { paddingBottom : 5, paddingTop : 5 },
    cardBody : { paddingBottom : 5, paddingTop : 0 },
    icon: { color: colors.white }
})
  
export default CardView;