import React, { Component } from 'react'
import {
  Platform,
  View,
  Text,
  TouchableOpacity,
  PermissionsAndroid
} from 'react-native'
import { AudioRecorder, AudioUtils } from 'react-native-audio'
import { some } from '../functions'

export default class AudioRecord extends Component {
  constructor (props) {
    super(props)
    this.handleRecord = this.handleRecord.bind(this)
  }

  async prepare () {
  }

  async requestPermission () {
    const rationale = {
      'title': 'Microphone Permission',
      'message': 'ReactNativeKitchenSink needs access to your microphone so you can record audio.'
    }
    const isOK = some(true, PermissionsAndroid.RESULTS.GRANTED)

    return Platform.select({
      ios: () => Promise.resolve(true),
      android: () => PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.RECORD_AUDIO, rationale).then(isOK),
    })
  }

  async handleRecord () {
    try {
      if (!await this.requestPermission()) {
        alert('TODO: Handle permission denied')
      }

      alert('Ready')
    } catch (e) {
      console.error(e)
    }
  }

  render () {
    return (
      <View>
        <TouchableOpacity onPress={this.handleRecord}>
          <Text>{'録音する'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
