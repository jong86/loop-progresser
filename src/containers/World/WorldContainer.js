import React, { Component } from 'react';
import { connect } from 'react-redux'

import World from '../../components/World/World';
import { guiUpdateZoom } from '../../redux/actions';

function mapStateToProps(state) {
  return {
    zoom: state.zoom
  }
}

function mapDispatchToProps(dispatch) {
  return ({
    guiUpdateZoom: (zoom) => {dispatch(guiUpdateZoom({zoom: zoom}))}
  })
}

export default WorldContainer = connect(mapStateToProps, mapDispatchToProps)(World)
