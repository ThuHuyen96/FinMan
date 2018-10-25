import React, { Component } from 'react';
import { Image, ImageBackground, Platform, StatusBar, BackHandler, ActivityIndicator } from 'react-native';
import { Container } from 'native-base';
import styles from './styles';
import { Colors } from '../../../Themes/';
import { ServiceManager } from '../../../Services/ServiceManager';
import UserService from '../../../Services/UserService';



let ic_logo = {
    uri:
      "https://antiqueruby.aliansoftware.net/Images/signin/ic_logo_mountify_signin_four.png"
  };
let BG_Image = {
uri:
    "https://antiqueruby.aliansoftware.net/Images/signin/image_bg_signin_four.jpg"
};

export default class Splash extends Component {

	constructor(props, context) {
		super(props, context);
		const { params } = this.props.navigation.state;
		this.onFail = params.onFail;
		this.timer = undefined;
		this.state = {
			username: params.username,
			password: params.password,
		};
		this.user = new UserService();
	}

	componentWillMount() {
		BackHandler.addEventListener('hardwareBackPress', function () {
			return true;
		});
		this.timer = setTimeout(() => {
			this._login();
		}, 5);
	}

	componentDidMount() {
		//this._login();
	}

	componentWillUnmount() {
		if (this.timer) {
			clearTimeout(this.timer);
		}
	}

	_login = () => {
		// const a = new ServiceManager()
		// a.getUserService().login(this.state.username, this.state.password, (response) => {
		// 	if(response.ok === true) {
		// 		this.props.navigation.navigate({ routeName: 'HomeScreen', params: { noSpinner: true } });
		// 	} else {
		// 		this.onFail(response.message);
		// 		this.props.navigation.goBack();
		// 	}
		// });
		this.user.login(this.state.username, this.state.password, (response) => {
			if(response.ok === true) {
				this.props.navigation.navigate({ routeName: 'HomeScreen', params: { noSpinner: true } });
			} else {
				this.onFail(response.message);
				this.props.navigation.goBack();
			}
		});
		
	}

	render() {
		StatusBar.setBarStyle('light-content', true);
		if (Platform.OS === 'android') {
			StatusBar.setBackgroundColor('transparent', true);
			StatusBar.setTranslucent(true);
		}

		return (
			<Container>
				<ImageBackground style={styles.backgroundImage} source={BG_Image}>
					<Image source={ic_logo} />
					<ActivityIndicator size="small" color={Colors.loginBlue} style={styles.loadingIcon}/>
				</ImageBackground>
			</Container>
		);
	}
}

