import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  TouchableOpacity,
  I18nManager
} from "react-native";
import {
    Container,
    Right,
    Item,
    Input,
    Header,
    Left,
    Body,
    Title,
Icon,
    Form
  } from "native-base";
import styles from "./styles";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default class singin extends Component {
    constructor(props, context) {
		super(props, context);
		this.state = {
      isLoading: true,
			username: '',
			password: '',
			error: '',
		};
		this._onFail = this._onFail.bind(this);
    }
//     componentWillMount() {
// 		BackHandler.addEventListener('hardwareBackPress', function () {
// 			return true;
//     });
//     this._retrieveLoggedUser();
//   }
  
//   _retrieveLoggedUser = () => {
//     serviceManager.getUserService().retrieveLoggedUser().then(loggedUser => {
//       if (loggedUser !== null) {
//         this.setState({
//           isLoading: false,
//           username: loggedUser.username,
//           password: loggedUser.password,
//         },() => { 
//           if(this.state.username && this.state.password)
//             this._login()
//          });
//       } else {
//         this.setState({ isLoading: false });
//       }
//     });
//   }
    _onChangeUsername = (input) => {
		this.setState({
			username: input,
			error: '',
		});
	}

	_onChangePassword = (input) => {
		this.setState({
			password: input,
			error: '',
		});
    }
    _onFail = (message) => {
		this.setState({ error: message });
    }
    _onFailBeforeRequest = (username, password) => {
		if (!username)
			this.setState({ error: ("Vui lòng nhập tên đăng nhập") });
		else
			if (!password)
				this.setState({ error: ("Vui lòng nhập mật khẩu") });
    }
    _login = () => {
		if (!this.state.username || !this.state.password) {
			this._onFailBeforeRequest(this.state.username, this.state.password);
		}
		else {
			this.props.navigation.navigate('SplashScreen',
				{
					username: this.state.username,
					password: this.state.password,
					onFail: this._onFail,
				});
		}
	}
    render(){
        let ic_logo = {
            uri:
              "https://antiqueruby.aliansoftware.net/Images/signin/ic_logo_mountify_signin_four.png"
          };
        let BG_Image = {
        uri:
            "https://antiqueruby.aliansoftware.net/Images/signin/image_bg_signin_four.jpg"
        };
        StatusBar.setBarStyle("light-content", true);

        if (Platform.OS === "android") {
        StatusBar.setBackgroundColor("transparent", true);
        StatusBar.setTranslucent(true);
        }
        //const { navigate } = this.props.navigation;
        //onPress={() => navigate("Home")}

        return(
            <Container>
                <ImageBackground style={styles.backgroundImage} source={BG_Image}>
                <Header></Header>
                <View style={styles.logosec}>
                    <Image source={ic_logo} style={styles.logostyle} />
                </View>
                <Form>
                    <Item rounded style={styles.inputStyle}>
                        <Input
                            placeholderTextColor="#ffffff"
                            textAlign={I18nManager.isRTL ? "right" : "left"}
                            placeholder="UserName"
                            style={styles.inputmain}
                            keyboardType="default"
                            value={this.state.username}
                            onChangeText={this._onChangeUsername.bind(this)}
                        />
                    </Item>
                    <Item rounded style={[styles.inputStyle, { marginTop: 10 }]}>
                        <Input
                            placeholderTextColor="#ffffff"
                            placeholder="Password"
                            secureTextEntry={true}
                            textAlign={I18nManager.isRTL ? "right" : "left"}
                            style={styles.inputmain}
                            keyboardType="default"
                            value={this.state.password}
                            onChangeText={this._onChangePassword.bind(this)}
                        />
                    </Item>
                    <TouchableOpacity
                    info
                    style={styles.signInbtn}
                    onPress={() => this._login()}
                    >
                        <Text autoCapitalize="words" style={styles.buttongetstarted}>
                            Sign In
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => alert("Forgot Password")}>
                        <Text autoCapitalize="words" style={styles.buttongettext}>
                            Forgot your password?
                        </Text>
                    </TouchableOpacity>
                </Form>
                <View style={styles.bottomView}>
                    <TouchableOpacity
                    style={styles.fbButton}
                    onPress={() => alert("Facebook button Clicked")}
                    >
                    <View iconRight style={styles.fbview}>
                        <FontAwesome name="facebook" size={30} color="white" />
                        <Text autoCapitalize="words" style={styles.fbButtonText}>
                        Sign in with facebook
                        </Text>
                    </View>
                    </TouchableOpacity>
                    <View style={styles.bottomText}>
                    <Text style={styles.bottomText01}>
                        Don&apos;t have an account?
                    </Text>
                    <TouchableOpacity onPress={() => alert("Sign Up")}>
                        <Text style={styles.bottomText02}>Sign up</Text>
                    </TouchableOpacity>
                    </View>
                </View>
                </ImageBackground>
            </Container>
        );
    }
}