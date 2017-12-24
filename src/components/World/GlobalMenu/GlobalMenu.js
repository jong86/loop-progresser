import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import Button from './Button';
import styles from './_styles_GlobalMenu';

export default class GlobalMenu extends Component {
  render() {
    return (
      <View style={styles.main}>
        <Button
          icon={<Ionicons name="ios-menu" size={32} color='#333' />}
          />
        <Button
          icon={<Ionicons name="md-add-circle" size={32} color='#333' />}
          style={{position: 'absolute', right: 0}}
        />
      </View>
    )
  }
}
