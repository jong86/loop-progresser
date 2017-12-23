import React, { Component } from 'react';
import { connect } from 'react-redux'

import World from '../../components/World/World';

import { action } from '../../redux/actions';

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    setZoomScale: (zoomScale) => {
      dispatch(action('SET_ZOOM_SCALE', { zoomScale }))
    },
  })
}

export default WorldContainer = connect(mapStateToProps, mapDispatchToProps)(World)
