import { StackNavigator, DrawerNavigator } from "react-navigation";
import home from '../containers/home';
import singin from "../containers/singin";

import test from '../containers/test';
import slidemenu from '../containers/slidebar';

const mainnav = DrawerNavigator(
    {
        Home: { screen: home },
        SingIn: { screen: singin },
        
        test: { screen : test},
        
    },
    {
        contentComponent: slidemenu,
        gesturesEnabled: false,
    }
  );

export default mainnav;