import { Platform, StyleSheet, Dimensions } from "react-native";
import { Fonts } from '../../../Themes';

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