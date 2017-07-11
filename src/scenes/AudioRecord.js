import React, { Component } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { AudioRecorder, AudioUtils } from 'react-native-audio'

export default class AudioRecord extends Component {
  constructor (props) {
    super(props)
    this.handleRecord = this.handleRecord.bind(this)
  }

  handleRecord () {
    // TODO: implement
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
