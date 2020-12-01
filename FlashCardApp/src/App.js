import React from 'react'
import { AppLoading } from 'expo'
import * as Font from 'expo-font'
import { Ionicons } from '@expo/vector-icons'
import Navigator from './utilities/Navigator'

import { createStore, applyMiddleware } from 'redux'
import { reducer } from './reducers/index'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

import { readDecks } from "./utilities/storage/decks"
import { loadDataAction } from "./actions/creators"

const store = createStore(reducer, applyMiddleware(thunk))

// On application start, read saved decks from disk.
readDecks().then(decks => {
  console.log("loading data")
  store.dispatch(loadDataAction(decks))
})

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isReady: false,
    }
  }

  async componentDidMount() {
    await Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
      ...Ionicons.font,
    })
    this.setState({ isReady: true })
  }

  render() {
    if (!this.state.isReady) {
      return <AppLoading />
    }

    return (
      <Provider store={store}>
        <Navigator/>
      </Provider>
    )
  }
}
