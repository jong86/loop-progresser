import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from '../../../../components/World/MultiTrack/Menu/Menu';

import { setZoomScale } from '../../../../redux/actions';

function mapDispatchToProps(dispatch, ownProps) {
  console.log('ownProps in menuContainer', ownProps);
  return({
    setZoomScale: () => {dispatch(setZoomScale({zoomScale: 0.1}))},
    scrollToPosition: ownProps.scrollToPosition,
  })
}

export default MenuContainer = connect(null, mapDispatchToProps)(Menu)
