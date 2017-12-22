import React, { Component } from 'react';
import { connect } from 'react-redux'

import World from '../../components/World/World';
import { setZoomScale } from '../../redux/actions';

function mapStateToProps(state) {
  return {
    ...state
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    setZoomScale: (zoomScale) => {dispatch(setZoomScale({zoomScale: zoomScale}))}
  })
}

export default WorldContainer = connect(mapStateToProps, mapDispatchToProps)(World)
