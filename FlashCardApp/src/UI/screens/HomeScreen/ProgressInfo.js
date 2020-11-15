import React, { Component } from "react"
import { StyleSheet, View } from "react-native"
import { Text, Icon, Toast, Button, Root } from 'native-base'

//import DeckModel from "./../../data/Deck"
import Strong from "./../../components/Strong"
import colors from "./../../styles/colors"

class ProgressInfo extends Component {
    static displayName = "Deck Progress"

    constructor(props) {
        super(props)
        this.state = {
          showToast: false
        }
    }
    
      onPressLTM = () => {
        console.log("Test")
        let ltmCards = 10
        Toast.show({
            text: `you have ${ltmCards} cards in long term memory!`,
            buttonText: "Okay",
            buttonTextStyle: { color: "#008000" },
            buttonStyle: { backgroundColor: colors.greenright }
          })
    }

    onPressSTM = () => {
        let stmCards = 5
        Toast.show({
            text: `you have ${stmCards} cards in short term memory!`,
            buttonText: "Okay",
            buttonTextStyle: { color: "#008000" },
            buttonStyle: { backgroundColor: colors.greenright }
          })
    }

    onPressUnlearned = () => {
        let unlearnedCards = 50
        Toast.show({
            text: `you have yet to see ${unlearnedCards} cards!`,
            buttonText: "Okay",
            buttonTextStyle: { color: "#008000" },
            buttonStyle: { backgroundColor: colors.greenright }
          })
    }

    render() {
        return (
            <View style={styles.row}>
                <Button style={styles.button} transparent  onPress={this.onPressLTM}>
                    <Icon active type="MaterialCommunityIcons" name="progress-check" style={[styles.icon_LTM, styles.icon]}/>
                    <Text style={styles.text}>10</Text>
                </Button>
                <Button style={styles.button} transparent onPress={this.onPressSTM}>
                    <Icon active type="MaterialCommunityIcons" name="progress-clock" style={[styles.icon_STM, styles.icon]}/>
                    <Text style={styles.text}>5</Text>
                </Button>
                <Button style={styles.button} transparent onPress={this.onPressUnlearned}>
                    <Icon active type="MaterialCommunityIcons" name="progress-alert" style={[styles.icon_unlearned, styles.icon]}/>
                    <Text style={styles.text}>50</Text>
                </Button>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    row : {
        flexDirection: "row",
    },
    button : {
        backgroundColor : colors.white,
    },

    icon : {
        //backgroundColor : colors.white,
        padding: 1,
    },

    icon_unlearned : {
        color: colors.redwrong,
    },

    icon_STM : {
        color: colors.yellowprogress,
    },

    icon_LTM : {
        color: colors.greenright,
    },

    text : {
        //backgroundColor: colors.white,
        paddingRight : 0,
        paddingLeft  : 2,
    }
})

export default ProgressInfo;