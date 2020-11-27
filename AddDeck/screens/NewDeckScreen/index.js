import React, { Component } from "react"
import { StyleSheet, TextInput, View } from "react-native"
import { Container, Content, Button, Text } from "native-base"

import SearchHeader from '../../components/SearchHeader'
import TitleHeader from "../../components/TitleHeader"
import { MockDecks, saveDeck } from "../../data/MockData"

export default class NewDeckScreen extends Component {
    static displayName = "New Deck"

    constructor(props) {
        super(props)
        this.state = {title: ""};
    }

    setTitle = (title) => {
        this.setState({title: title});
    }

    submitTitle = () => {
         saveDeck(this.state.title);
         this.props.navigation.navigate("Home", {deck: MockDecks});
    }

    render() {
        return (
            <Container>
                 <TitleHeader title={NewDeckScreen.displayName} goBack={this.props.navigation.goBack}/>
                 <Content>
                      <View>
                          <Text style={styles.text}>What is the deck title</Text>
                          <TextInput style={styles.textInput}
                                     value={this.state.title}
                                     underlineColorAndroid="transparent"
                                     placeholder="Title"
                                     onChangeText={this.setTitle}>
                          </TextInput>
                          <Button success onPress={() => this.submitTitle()}>
                                  <Text> Create Deck</Text>
                          </Button>
                      </View>
                 </Content>
            </Container>
        )
    }
}
const styles = StyleSheet.create({
    text: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        fontSize: 18
    },
    textInput: {
        borderColor: "#7a42f4",
        borderWidth: 1,
        margin: 10,
        height: 30,
        width: 300,
        justifyContent: "center",
        alignItems: "center",
    },
    createBtn: {
        height: 30,
        width: 50,
        paddingTop: 15,
        justifyContent: "center",
        alignItems: "center",
    }
});