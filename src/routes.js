import React, { Component } from 'react'
import { Router, Scene } from 'react-native-router-flux'
import { AudioRecord } from './scenes'

export default class App extends Component {
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="audioRecord" component={AudioRecord} title="AudioRecord"/>
        </Scene>
      </Router>
    )
  }
}
