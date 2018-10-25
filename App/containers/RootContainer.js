import React, { Component } from 'react'
import { View, StatusBar } from 'react-native'
import ReduxNavigation from '../navigation/ReduxNavigation'
import { connect } from 'react-redux'
import AppNavigation from '../navigation/Appnavigation'
import { StackNavigator, DrawerNavigator } from "react-navigation";


// Styles
import styles from './Styles/RootContainerStyles'

// class RootContainer extends Component {
//   componentDidMount() {
//     // if redux persist is not active fire startup action
    
//   }

//   render() {
//     return (
//       <View style={styles.applicationView}>
//         <StatusBar
//           barStyle={'light-content'}
//           backgroundColor={'transparent'}
//           translucent
//         />
//           <ReduxNavigation />
//       </View>
//     )
//   }
// }

// // wraps dispatch to create nicer functions to call within our component

// export default RootContainer;
const RootContainer = StackNavigator(
  {
    screen :{ screen: AppNavigation, }
  },{
    headerMode: 'none'
  }
);
export default RootContainer;