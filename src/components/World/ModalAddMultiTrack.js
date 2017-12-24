import React, { Component } from 'react';
import { Text, TouchableWithoutFeedback, View } from 'react-native';
import Modal from 'react-native-modal'

import { Ionicons } from '@expo/vector-icons';

import styles from './_styles_World';

export default class Button extends Component {
  render() {
    return (
      <Modal
        isVisible={this.props.isModalAddMultiTrackVisible}
        backdropOpacity={0}
        animationInTiming={10}
        animationOutTiming={10}
        style={{
          justifyContent: 'flex-end',
        }}
        onBackdropPress={this.props.hideModalAddMultiTrack}
      >
        <View
          style={{
            height: 64,
            width: '85%',
            alignSelf: 'center',
            borderWidth: 1,
            borderColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'white',
            padding: 4,
            borderWidth: 1,
            borderRadius: 4,
            borderColor: '#999',
          }}
        >
          <Text>Place your multi-track on the map...</Text>
        </View>
      </Modal>
    )
  }
}
