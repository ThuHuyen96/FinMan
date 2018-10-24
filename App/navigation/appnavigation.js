import { StackNavigator, DrawerNavigator } from "react-navigation";
import SingInScreen from "../containers/Screens/SingIn/index";
import Splash from "../containers/Screens/SingIn/Splash";
import LaunchScreen from '../containers/LaunchScreen';



const PrimaryNavigator = StackNavigator(
    {
        SingInScreen: { screen: SingInScreen },
        SplashScreen: { screen: Splash },
        LaunchScreen: { screen: LaunchScreen },
    },
    {
        headerMode: 'none',
        initialRouteName: 'SignInScreen',
        navigationOptions: {
            gesturesEnabled: false,
        },
    }
  );

export default PrimaryNavigator;