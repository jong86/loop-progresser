import React, { Component } from 'react';
import { Dimensions, ScrollView, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import MultiTrackContainer from '../../containers/World/MultiTrack/MultiTrackContainer';
import styles from './_styles_World';

const multiplierMain = 1.2
const multiplierMap = 8

export default class World extends Component {
  constructor() {
    super()
    this.centerXY = {
      x: Dimensions.get('screen').width / 2,
      y: Dimensions.get('screen').height / 2,
    }

    this.scrollToPosition = this.scrollToPosition.bind(this)
  }

  componentDidMount() {
    this.scrollToPosition(null, true)
  }

  handleEndDrag(event) {
    this.props.setZoomScale(event.nativeEvent.zoomScale)
  }

  scrollToPosition(givenPosition, moveToCenter) {
    const position = moveToCenter ? this.centerXY : givenPosition;
    this.refs.scrollView.scrollTo({
      x: position.x,
      y: position.y,
      animated: true,
    })
  }

  render() {

    return (
      <ScrollView
        contentContainerStyle={styles.main}
        maximumZoomScale={1.0}
        minimumZoomScale={0.1}
        horizontal
        ref='scrollView'
        zoomScale={this.props.zoomScale}
        centerContent
        scrollEventThrottle={1}
        onScrollEndDrag={(event) => this.handleEndDrag(event)}
      >
        <View
          style={styles.map}
        >

          <MultiTrackContainer
            scrollToPosition={this.scrollToPosition}
          />

        </View>
      </ScrollView>
    )
  }
}
