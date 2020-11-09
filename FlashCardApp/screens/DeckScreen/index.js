import React, { Component } from "react"
import { Container, Header, Content , Text, Divider, View} from "native-base"

import SearchHeader from '../../components/SearchHeader'
import Card from '../../components/CardComponent'
import { MockCards } from "./../../data/MockData"



export default class DeckScreen extends Component {
    static displayName = "View Deck"

    


    render() {
        return (
            <View>
                <SearchHeader canGoBack={this.props.navigation.canGoBack} goBack={this.props.navigation.goBack}/>
                {/* <Text>{JSON.stringify(MockCards[])}</Text> */}
         
                    
                {Object.keys(MockCards).map((element) =>{

                    return (
                            <Card>
                                <View style={{flexDirection:"row"}}>
                                    <View style={{flex:1}}>
                                        <Text style={{fontWeight: "bold" }}>{MockCards[element].front}</Text>   
                                    </View>

                                    <View style={{borderStyle: 'dotted', borderLeftWidth:1, marginRight: 23, color:"black"}}/>

                                    <View style={{flex:1}}>
                                        <Text>{MockCards[element].back}</Text>
                                    </View>
                
                        </View>
                                
                               
                            </Card>
                    )

                })}
                    



                
            </View>
        )
    }
}