import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  StatusBar,
  Platform,
  ImageBackground,
  TouchableOpacity,
  I18nManager,
  BackHandler,
} from "react-native";
import { Container, Button, Footer, FooterTab } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { Metrics, Colors } from '../../../Themes';
import styles from '../../Styles/HeaderStyles';

import DashboardTab from './DashboardTab';
import MenuTab from './MenuTab'

const DEFAULT_TAB = "Dashboard";

export default class home extends Component{
    constructor(props) {
        super(props);
        const { params } = this.props.navigation.state;
        let selectedTab = {
          name: DEFAULT_TAB,
          filter: 'All',
        }
        this._onMenuPressed = this._onMenuPressed.bind(this);
        this._handleBack = this._handleBack.bind(this);
        this._onCallback = this._onCallback.bind(this);
        let noSpinner = false;
        if (params) {
          if (params.selectedTab) {
            selectedTab.name = params.selectedTab;
          }
          if (params.filter) {
            selectedTab.filter = params.filter;
          }
          if (params.noSpinner) {
            noSpinner = params.noSpinner;
          }
        }
    
        //CallbackService.addCallback("HomeScreen", this._onCallback);
        this.state = {
          userInfo: {},
          selectedTab,
          noSpinner,
          notificationCount: 0,
        };
      }
      componentWillMount() {
        this.backHandler = BackHandler.addEventListener('hardwareBackPress', this._handleBack);
        // const userInfo = serviceManager.getUserService().getLoggedUserInfo();
        // this.setState({
        //   userInfo,
        // });
      }
    
      componentDidMount() {
        // serviceManager.getNotificationService().getUnreadNotificationCount(count => {
        //   this.updateUnreadNotificationCount(count);
        // });
      }
    
      componentWillUnmount() {
        this.backHandler.remove();
        //CallbackService.removeCallback("HomeScreen");
      }
    
      _handleBack = () => {
        if (this.state.selectedTab.name !== DEFAULT_TAB) {
          this.setState({ selectedTab: { name: DEFAULT_TAB, filter: '' } })
        }
        return true;
      }
    
      updateUnreadNotificationCount = (count) => {
        // this.setState({
        //   notificationCount: count,
        // })
      }
    
      _onCallback = (props) => {
        this.setState({ selectedTab: { name: props.selectedTab, filter: props.filter, subTab: props.subTab }, noSpinner: false });
      }
      _renderSelectedTab() {
        switch (this.state.selectedTab.name) {
          case 'Dashboard':
            return (<DashboardTab
              {...this.props}
              filter={this.state.selectedTab.filter}
              onMenuPressed={this._onMenuPressed}
              onCallback={this._onCallback}
              noSpinner={this.state.noSpinner} />)
            break;
          case 'Menu':
            return (<MenuTab
              {...this.props}
              filter={this.state.selectedTab.filter}
              tab={this.state.selectedTab.subTab}
              onMenuPressed={this._onMenuPressed}
              onCallback={this._onCallback} />);
            break;
          default:
        }
      }
      _onMenuPressed = () => {
        this.props.navigation.navigate('DrawerOpen')
      }
    
      _switchTab = (name, props) => {
        this.setState({
          selectedTab: { name, filter: "All" },
          noSpinner: false,
          ...props
        });
      }
    render(){
        const selectedTab = this.state.selectedTab.name;
        return(
            <Container>
                {this._renderSelectedTab()}
                <Footer style={{ height: Metrics.footerHeight, borderTopWidth: 0.5, borderTopColor: Colors.border, backgroundColor: Colors.mainColorTrans}}>
                    <FooterTab style={styles.footerTabBg}>
                        <Button vertical
                            onPress={() => this._switchTab('Dashboard')}>
                            <FontAwesome name="dashboard" style={(selectedTab == 'Dashboard') ? styles.activeTabIconV1 : styles.normalTabIconV1} />
                            <Text style={(selectedTab == 'Dashboard') ? styles.activeTabText : styles.normalTabText}>Báo cáo</Text>
                        </Button>
                        <Button vertical
                            onPress={() => this._switchTab('Menu')}>
                            <FontAwesome name="briefcase" style={(selectedTab == 'Menu') ? styles.activeTabIconV1 : styles.normalTabIconV1} />
                            <Text style={(selectedTab == 'Task') ? styles.activeTabText : styles.normalTabText}>Công việc</Text>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        );
    }
}