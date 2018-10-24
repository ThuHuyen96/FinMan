import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../navigation/ReduxNavigation'
import { connect } from 'react-redux'


// Styles
import styles from './Styles/RootContainerStyles'

class RootContainer extends Component {
  componentDidMount() {
    // if redux persist is not active fire startup action
    
  }

  render() {
    return (
      <View style={styles.applicationView}>
        <StatusBar
          barStyle={'light-content'}
          backgroundColor={'transparent'}
          translucent
        />
          <ReduxNavigation />
      </View>
    )
  }
}

// wraps dispatch to create nicer functions to call within our component

export default RootContainer;
