import React, { Component } from 'react';
import { connect } from 'react-redux';

import Menu from '../../../../components/World/MultiTrack/Menu/Menu';

import { guiChangeView } from '../../../../redux/actions';

function mapDispatchToProps(dispatch) {
  return({
    guiChangeView: () => {dispatch(guiChangeView({view: 'world'}))}
  })
}

export default MenuContainer = connect(null, mapDispatchToProps)(Menu)
