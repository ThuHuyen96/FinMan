/** @format */

import {AppRegistry} from 'react-native';
//import App from './App';
import {name as appName} from './app.json';
import singin from './App/containers/singin/index';
import drawernav from './App/navigation/drawerNavigation';
import mainnav from './App/navigation/appnavigation';
import app from './App/containers/app';

AppRegistry.registerComponent(appName, () => app);
