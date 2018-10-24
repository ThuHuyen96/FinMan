import React, {Component} from 'react';
import {
    AsyncStorage,
    Image,
    StatusBar,
    View,
    TouchableOpacity,
    Linking,
    Alert,
    Platform,
    BackHandler
  } from "react-native";
  import {
    Header,
    Button,
    Text,
    Container,
    List,
    ListItem,
    Content,
    Icon,
    top,
    Left,
    Right,
    Title,
    Body
  } from "native-base";
import styles from './styles';
import {Images} from '../Themes';

export default class slidemenu extends Component{
    constructor(props) {
        super(props);
        this.state = {
          activeMenu: "SingIn"
        };
      }
    _handlePress(screenName) {
        var tempVar = "";
        this.setState({ activeMenu: screenName, activeMenuImage: tempVar });
        this.props.navigation.navigate(screenName);
    }
    
    render(){
        StatusBar.setBarStyle("light-content", true);

        if (Platform.OS === "android") {
            StatusBar.setBackgroundColor("transparent", true);
            StatusBar.setTranslucent(true);
        }
        return(
            <Container>
                <Content style={{ backgroundColor: "#1a191f" }}>
                    <View>
                        <Header style={styles.header}>
                            <Image source={Images.drawer_antiquruby_logo} style={styles.headerimg} />
                        </Header>
                        <View style={{backgroundColor: 'grey',marginTop: 8,height: 0.3}}></View>
                        <View style={styles.mainview}>
                        <TouchableOpacity onPress={() => this._handlePress("Home")}>
                            <View style={styles.listrow}>
                            <Image source={Images.mnavigation} style={styles.rowicon} />
                            <Text style={styles.rowtxt}>Home</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._handlePress("test")}>
                            <View style={styles.listrow}>
                            <Image source={Images.msocial} style={styles.rowicon} />
                            <Text style={styles.rowtxt}>Test</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => this._handlePress("SingIn")}>
                            <View style={styles.listrow}>
                            <Image source={Images.msocial} style={styles.rowicon} />
                            <Text style={styles.rowtxt}>login</Text>
                            </View>
                        </TouchableOpacity>
                        </View>
                    </View>
                </Content>
            </Container>
        );
    }
}
