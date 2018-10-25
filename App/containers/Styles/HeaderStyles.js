import { Platform, StyleSheet, Dimensions } from "react-native";
import { Fonts, Colors, Metrics } from '../../Themes';

const styles = StyleSheet.create({
    header: {
        backgroundColor: Colors.mainColor,
        height: Metrics.headerHeight,
        elevation: 0,
        paddingTop: Metrics.HEIGHT * 0.03,
        paddingLeft: Metrics.WIDTH * 0.025,
        paddingRight: Metrics.WIDTH * 0.025,
        justifyContent: 'space-around',
        borderBottomColor: 'transparent'
    },
    headerLeft: {
        flex: 1,
        width: Metrics.WIDTH * 0.2,
    },
    headerIcon: {
        fontSize: Fonts.moderateScale(28),
        color: 'white',
    },
    headerBody: {
        flex: 3,
        alignItems: 'center',
        width: Metrics.WIDTH * 0.6,
    },
    content: {
        
    },

    footerTabBg: {
        backgroundColor: 'white'
    },
    normalTabIconV1: {
        fontSize: Fonts.moderateScale(22),
        color: "#aaaaaa",
        justifyContent: 'center',
    },
});
export default styles;