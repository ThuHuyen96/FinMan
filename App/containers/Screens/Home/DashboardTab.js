import React, { Component } from "react";
import {
  View,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  TouchableOpacity,
  I18nManager,
  BackHandler
} from "react-native";
import { Container, Text, Button, Header, Content, Body, Title, Right, Icon, Left, Thumbnail, Card, Spinner } from 'native-base';
import { Colors, Fonts } from '../../../Themes';
import styles from '../../Styles/HeaderStyles';

export default class DashboardTab extends Component{
    /**
   * Constructor
   * @param {*} props 
   */
  constructor(props) {
    super(props);
    this.timer = undefined
    this.state = {
      filterIcon: 'filter',
      enableFilter: false,
      isLoading: true,
    };
  }
  onFilterClicked() {
    if (!this.state.enableFilter) {
      this.setState({
        enableFilter: true,
        filterIcon: 'close'
      });
    } else {
      this.setState({
        enableFilter: false,
        filterIcon: 'filter'
      });
    }
  }
    render(){
        return(
            <Container>
                <Header androidStatusBarColor={Colors.mainColor} style={[styles.header, { backgroundColor: Colors.headerStartColor, borderBottomWidth: 0 }]}>
                    <Left style={styles.headerLeft}>
                        <Button transparent vertical
                        onPress={() => this.props.onMenuPressed()}>
                        <Icon name="menu" style={styles.headerIcon} />
                        </Button>
                    </Left>
                    <Body style={styles.headerBody}>
                        <Title style={{ color: Colors.mainColor, fontSize: Fonts.moderateScale(16) }}>Báo Cáo</Title>
                    </Body>
                    <Right style={styles.headerLeft}>
                        {/* <Button transparent onPress={() => {
                        this.onFilterClicked()
                        }}>
                        <Icon type='FontAwesome' name={this.state.filterIcon} style={{ color: Colors.dashboardHeaderColor, padding: 0 }} />
                        </Button> */}
                    </Right>
                </Header>
            </Container>
        );
    }
}