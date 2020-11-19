import React, { Component } from 'react';
import { Footer, FooterTab, Button, Text } from 'native-base';

export default class MainFooter extends Component {

  _goToHome = () => {
    this.props.navigation.navigate('Home')
  }

  _goToShare = () => {
    console.warn("Not implemented")
    //this.props.navigation.navigate('Share')
  }

  _goToStats = () => {
    this.props.navigation.navigate('Stats')
  }

  render() {
    return (
        <Footer>
          <FooterTab>
            <Button onPress = {this._goToHome}>
              <Text>Home</Text>
            </Button>
            <Button onPress = {this._goToShare}>
              <Text>Share</Text>
            </Button>
            <Button onPress = {this._goToStats}>
              <Text>Stats</Text>
            </Button>
          </FooterTab>
        </Footer>
    )
  }
}