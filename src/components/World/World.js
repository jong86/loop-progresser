import React, { Component } from 'react';
import { Dimensions, ScrollView, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ModalAddMultiTrack from './ModalAddMultiTrack';
import MultiTrackContainer from '../../containers/World/MultiTrack/MultiTrackContainer';
import GlobalMenu from './GlobalMenu/GlobalMenu';
import styles from './_styles_World';

export default class World extends Component {
  constructor() {
    super()
    this.centerXY = {
      x: Dimensions.get('screen').width / 2,
      y: Dimensions.get('screen').height / 2,
    }
    this.state = {
      isModalAddMultiTrackVisible : false,
    }

    this.scrollToPosition = this.scrollToPosition.bind(this)
  }

  componentDidMount() {
    console.log('this.props inside componentDidMount', this.props);
    this.scrollToPosition({x: 400, y: 800})
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

  showModalAddMultiTrack = () => {
    this.setState({ isModalAddMultiTrackVisible: true })
  }

  hideModalAddMultiTrack = () => {
    this.setState({ isModalAddMultiTrackVisible: false })
  }

  render() {
    // console.log('this.props inside World component:', this.props);
    return (
      <View>
        <ScrollView
          contentContainerStyle={styles.world}
          maximumZoomScale={1.0}
          minimumZoomScale={0.1}
          horizontal
          ref='scrollView'
          zoomScale={this.props.zoomScale}
          centerContent
          scrollEventThrottle={1}
          onScrollEndDrag={(event) => this.handleEndDrag(event)}
        >
          <MultiTrackContainer
            scrollToPosition={this.scrollToPosition}
          />

        </ScrollView>

        <GlobalMenu
          showModalAddMultiTrack={this.showModalAddMultiTrack}
        />

        <ModalAddMultiTrack
          isModalAddMultiTrackVisible={this.state.isModalAddMultiTrackVisible}
          hideModalAddMultiTrack={this.hideModalAddMultiTrack}
        />

      </View>

    )
  }
}
