import React from 'react'
import { DrawerNavigator, StackNavigator} from "react-navigation";
import { Metrics } from '../Themes/'
import SideBar from "./Slidebar";

import Home from './Screens/Home/index';
import Profile from './Screens/Profile/Profile';
import test from './Screens/test/test';


const MainStack = DrawerNavigator(
  {
    HomeScreen: { screen: Home },
    ProfileScreen: { screen: Profile },
  },
  {
    contentComponent: props => <SideBar {...props} />,
    drawerWidth: Metrics.WIDTH * 0.8,
    drawerPosition: 'left',
    drawerOpenRoute: 'DrawerOpen',
    drawerCloseRoute: 'DrawerClose',
    drawerToggleRoute: 'DrawerToggle',
  }
);

const RootStack = StackNavigator(
  {
    Main: { screen: MainStack },
    TestScreen: { screen: test }
  },
  {
    mode: 'modal',
    headerMode: 'none',
  }
);

export default RootStack;