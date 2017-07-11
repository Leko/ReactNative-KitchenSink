/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react'
import App from './src/routes'
import { AppRegistry } from 'react-native'

export default class ReactNativeKitchenSink extends Component {
  render() {
    return (
      <App />
    )
  }
}

AppRegistry.registerComponent('ReactNativeKitchenSink', () => ReactNativeKitchenSink)
