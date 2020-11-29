import React, { Component } from 'react';
import {View, Text, StyleSheet } from 'react-native';
import { Container, Content, Button } from "native-base"
import { TouchableOpacity } from 'react-native-gesture-handler';
import TitleHeader from "./../../components/TitleHeader"
import { connect } from 'react-redux'

class CardScreen extends Component{
    static displayName = "Card";

    state ={
        answerControl: true
    }

    setAnswerControl(newControl){
        this.setState({answerControl: newControl});
    }

    setFront = () => {
        return (
            <TouchableOpacity style={styles.quesContainer} onPress={() =>this.setAnswerControl(!this.state.answerControl)}>
                <View style={styles.quesAnsContainer}>
                    <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 10}}>
                        Question
                    </Text>

                    <View style={{flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.quesText}>
                                {this.props.currentCard.front}
                        </Text>
                    </View>
                </View>   
            </TouchableOpacity>
            
        )
    }

    setBack = () => {
        return(
            <TouchableOpacity style={styles.quesContainer} onPress={() =>this.setAnswerControl(!this.state.answerControl)}>
                <View style={styles.quesAnsContainer}>
                    <Text style={{fontSize: 22, fontWeight: 'bold', marginTop: 10}}>
                        Answer
                    </Text>

                    <View style={{flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center'}}>
                        <Text style={styles.quesText}>
                            {this.props.currentCard.back}
                        </Text>
                    </View>
                </View>   
            </TouchableOpacity>
        )
        
    }

    editPressed = () => {
        this.props.navigation.navigate("Edit Card", {card: this.props.route.params.card});
    }

    render() {
        return (
            <Container>
                <Content>
                    <TitleHeader title={CardScreen.displayName} goBack={this.props.navigation.goBack}/>
                    
                    {this.state.answerControl ? this.setFront() : this.setBack()}
                    
                    <Button full success style={styles.editBtn} onPress={this.editPressed}>
                        <Text>
                            Edit
                        </Text>
                    </Button>
                </Content>
                
            </Container>
            
        )
    }
    
}

const styles = StyleSheet.create({
    quesContainer: {
        height: '87%',
        padding: 5,
        alignItems: 'center'
    },
    quesText: {
        fontSize: 25, 
        margin: 10,
        textAlign: 'center'
    },
    quesAnsContainer: {
        flex: 1,
        height: 450,
        width: 320,
        borderWidth: 2,
        borderRadius: 20,
        elevation: 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    editBtn: {
        fontSize: 17,
        fontWeight: 'bold',
        borderWidth: 1,
        fontSize: 25
    }

})

const getCurrentCard = (decks, deckID, cardID) => {
    let deck = decks.find((deck) => {return deck.id === deckID});
    return deck.cards.find(card => card.cardID === cardID);
}

const mapStateToProps = (state, ownProps) => {
    return {
        decks : state.decks,
        currentCard: getCurrentCard(state.decks, ownProps.route.params.card.deckID, ownProps.route.params.card.cardID)
    }
}


export default connect(mapStateToProps, null)(CardScreen)