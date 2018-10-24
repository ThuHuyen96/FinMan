
import React, { Component } from 'react';
import { AppRegistry, Dimensions } from 'react-native';
import { DrawerNavigator } from 'react-navigation';
import mainnav from './Appnavigation';
import slidemenu from '../containers/Slidebar';

const drawernav = DrawerNavigator({
    Item1: { screen: mainnav, }
  }, {
    contentComponent: slidemenu,
    drawerWidth: Dimensions.get('window').width - 120,  
});

export default drawernav;