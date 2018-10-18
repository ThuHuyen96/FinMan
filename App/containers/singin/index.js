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
        const { navigate } = this.props.navigation;

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
                            placeholder="Email"
                            style={styles.inputmain}
                        />
                    </Item>
                    <Item rounded style={[styles.inputStyle, { marginTop: 10 }]}>
                        <Input
                            placeholderTextColor="#ffffff"
                            placeholder="Password"
                            secureTextEntry={true}
                            textAlign={I18nManager.isRTL ? "right" : "left"}
                            style={styles.inputmain}
                        />
                    </Item>
                    <TouchableOpacity
                    info
                    style={styles.signInbtn}
                    onPress={() => navigate("Home")}
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