import React, { Component } from 'react';
import { Dimensions, ScrollView, Text, View, TouchableWithoutFeedback } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import ModalAddMultiTrack from './ModalAddMultiTrack';
import MultiTrackContainer from '../../containers/World/MultiTrack/MultiTrackContainer';
import GlobalMenu from './GlobalMenu/GlobalMenu';
import styles from './_styles_World';
import MultiTrack from './MultiTrack/MultiTrack';

export default class World extends Component {
  constructor() {
    super()
    this.centerXY = {
      x: Dimensions.get('screen').width / 2,
      y: Dimensions.get('screen').height / 2,
    }
    this.state = {
      isModalAddMultiTrackVisible : false,
      isAddMultiTrackModeEnabled: false,
    }

    this.scrollToPosition = this.scrollToPosition.bind(this)
  }

  componentDidMount() {
    // console.log('this.props inside componentDidMount', this.props);
    this.scrollToPosition({x: 400, y: 800})
    this.props.addMultiTrack({x: 400, y: 800});
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

  toggleAddMultiTrackMode = () => {
    console.log('you invoked toggleAddMultiTrackMode');
    this.setState({
      isAddMultiTrackModeEnabled: !this.state.isAddMultiTrackModeEnabled
    })
  }

  renderMultiTracks = () => {
    return (
      Object.entries(this.props.multiTracks).map(item => {
        const multiTrackData = item[1]
        return (
          <MultiTrackContainer
            key={multiTrackData.id}
            id={multiTrackData.id}
          />
        )
      })
    )
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
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          onScrollEndDrag={(event) => {
            this.handleEndDrag(event)}
          }
        >
          <TouchableWithoutFeedback
            onPress={(event) => {
              if (this.state.isAddMultiTrackModeEnabled) {
                const position = {
                  x: event.nativeEvent.locationX,
                  y: event.nativeEvent.locationY,
                }
                console.log('you pressed the map at', position);
                this.props.addMultiTrack(position);
                this.toggleAddMultiTrackMode();
              }
            }}
          >
            <View
              // Needed this extra View to get map touches working for some reason
              style={{
                width: '100%',
                height: '100%',
              }}
            >
              {/* <MultiTrackContainer
                scrollToPosition={this.scrollToPosition}
              /> */}

              { this.renderMultiTracks() }

            </View>
          </TouchableWithoutFeedback>
        </ScrollView>

        <GlobalMenu
          isAddMultiTrackModeEnabled={this.state.isAddMultiTrackModeEnabled}
          toggleAddMultiTrackMode={this.toggleAddMultiTrackMode}
        />

        { this.state.isAddMultiTrackModeEnabled &&
          <ModalAddMultiTrack
            isAddMultiTrackModeEnabled={this.state.isAddMultiTrackModeEnabled}
            toggleAddMultiTrackMode={this.toggleAddMultiTrackMode}
          />
        }

      </View>

    )
  }
}
