import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from '../../../../components/World/MultiTrack/Menu/Menu';

import { action } from '../../../../redux/actions';

function mapDispatchToProps(dispatch, ownProps) {
  console.log('ownProps in menuContainer', ownProps);
  return({
    zoomOut: () => {dispatch(action('SET_ZOOM_SCALE', { zoomScale: 0.1 }))},
    switchToWorldViewMode: () => {dispatch(action('SET_VIEW_MODE', { viewMode: 'WORLD' }))},
    scrollToPosition: ownProps.scrollToPosition,
  })
}

export default MenuContainer = connect(null, mapDispatchToProps)(Menu)
