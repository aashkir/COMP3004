import React, { Component } from "react"
import { Container, Content } from "native-base"

import TitleHeader from "./../../components/TitleHeader"
import MainFooter from "../../components/MainFooter"

import { View, Text, ScrollView, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import colors from './../../styles/colors'

import { connect } from 'react-redux'
import { nextCardAction } from "./../../../actions/creators"
class StudyScreen extends Component {
    static displayName = "Study"

    // we can use state here because it only is for the user to see answers (doesn't affect cards)
    static initialState = { showAnswer: false }

    constructor(props) {
        super(props)
        this.state = StudyScreen.initialState
    }

    toggleAnswer = () => {
        this.setState({ showAnswer: !this.state.showAnswer })
    }

    question = () => {
        return (
            <TouchableOpacity style={styles.quesContainer} onPress={this.toggleAnswer}>
                <View style={styles.quesAnsContainer}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 10 }}>
                        Question
                    </Text>

                    <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.quesText}>
                            {this.props.currentCard.front}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

        )

    }

    answer = () => {
        return (
            <TouchableOpacity style={styles.quesContainer} onPress={this.toggleAnswer}>
                <View style={styles.quesAnsContainer}>
                    <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 10 }}>
                        Answer
                    </Text>

                    <View style={{ flex: 1, width: '100%', alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={styles.quesText}>
                            {this.props.currentCard.back}
                        </Text>
                    </View>
                </View>
            </TouchableOpacity>

        )

    }

    controllButton = (params) => {
        return (
            <TouchableOpacity onPress={params.action}>
                <View style={[styles.buttonStyle, { backgroundColor: params.color }]}>
                    <Text style={styles.buttonTextStyle}>
                        {params.title}
                    </Text>
                </View>
            </TouchableOpacity>
        )
    }

    //--------------- Again , Good, Easy buttons ----------- //

    easyPressed = () => {
        this.props.nextCard(1)
        /*
        var updateIndex = cardIndex + 1
        console.log(updateIndex)
        if (updateIndex < cards.length) {
            setCardIndex(updateIndex)
            setShowAnswer(false)
        }*/
    }

    goodPressed = () => {
        this.props.nextCard(0)
        /*
        var updateIndex = cardIndex + 1

        if (updateIndex < cards.length) {
            setCardIndex(updateIndex)
            setShowAnswer(false)

        }*/
    }

    againPressed = () => {
        console.log('pressed... again')
        this.props.nextCard(-1)
        /*
        var updateIndex = cardIndex - 1

        if (updateIndex >= 0) {
            setCardIndex(updateIndex)
            setShowAnswer(false)

        }*/
    }


    render() {
        //------------------ UI design, with quesiton andn buttons -------//
        return (
            <Container>
                <TitleHeader title={StudyScreen.displayName} goBack={this.props.navigation.goBack} />
                <Content style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ flex: 1 }}>
                        {this.state.showAnswer ? this.answer() : this.question()}

                        <View style={{ flexDirection: 'row', justifyContent: 'flex-end', height: 80 }}>
                            <View style={[styles.buttonStyle, { backgroundColor: '#ff9d66' }]}>
                                <TouchableOpacity onPress={() => this.againPressed()}>
                                    <Text style={styles.buttonTextStyle}>
                                        Again
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={[styles.buttonStyle, { backgroundColor: '#69ff66' }]}>
                                <TouchableOpacity onPress={() => this.goodPressed()}>
                                    <Text style={styles.buttonTextStyle}>
                                        Good
                                    </Text>
                                </TouchableOpacity>
                            </View>

                            <View style={[styles.buttonStyle, { backgroundColor: '#669aff' }]}>
                                <TouchableOpacity onPress={() => this.easyPressed()}>
                                    <Text style={styles.buttonTextStyle}>
                                        Easy
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Content>
                <MainFooter navigation={this.props.navigation} />
            </Container>
        )
    }
}

const styles = StyleSheet.create(
    {
        quesAnsContainer: {
            flex: 1,
            borderWidth: 2,
            borderRadius: 20,
            elevation: 2,
            alignItems: 'center',
            justifyContent: 'center',
        },
        quesContainer: {
            flex: 1,
            padding: 5,
        },
        quesText: {
            fontSize: 25,
            margin: 10,
            textAlign: 'center'
        },

        buttonStyle: {
            margin: 10,
            flex: 1,
            justifyContent: 'center',
            //height: '80%',
            alignItems: 'center',
            borderRadius: 10,
            elevation: 5,

        },
        buttonTextStyle: {
            fontSize: 17,
            fontWeight: 'bold'
        }
    })

    const mapStateToProps = (state) => {
        return {
            //currentDeck : state.decks.find(deck => deck.id === ownProps.route.params.deckID)
            currentCard : state.currentStudy.studyQueue.peek()
        }
    }
    
    const mapDispatchToProps = dispatch => {
        return {
            nextCard: (response) => {
                dispatch(nextCardAction(response))
            }

            
        }
    }
    
    export default connect(mapStateToProps, mapDispatchToProps)(StudyScreen)
