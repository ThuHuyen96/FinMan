import React from 'react'
import * as ReactNavigation from 'react-navigation'
import { connect } from 'react-redux'
import { createReduxBoundAddListener } from "react-navigation-redux-helpers";
import AppNavigation from './Appnavigation';
import { serviceManager } from '../Services/ServiceManager';

// here is our redux-aware smart component
function ReduxNavigation (props) {
  const addListener = createReduxBoundAddListener("root");
  const { dispatch, nav } = props
  const navigation = ReactNavigation.addNavigationHelpers({
    dispatch,
    state: nav,
    addListener,
  })

  serviceManager.setNavigation(navigation);

  return <AppNavigation navigation={navigation} />
  // const { navigate } = this.props.navigation;
  // return <AppNavigation navigate=('SingInScreen') />
}

const mapStateToProps = state => ({ nav: state.nav })
export default ReduxNavigation;
