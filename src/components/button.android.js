/**
 * Created by ponty on 11/04/2016.
 */

import React,{
    Component,
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableHighlight,
    Image,
    ScrollView,
    TouchableNativeFeedback
} from 'react-native';
import { MKButton } from 'react-native-material-kit'

const { width, height } = Dimensions.get('window');

const topMargin = height - (height * 0.22);
const leftMargin = width - (width * 0.185);

const styles = StyleSheet.create({
    button:{
        height:40,
        width:40,
        borderRadius:20,
        position:"absolute",
        top:topMargin,
        left:leftMargin,
        backgroundColor:"#95a5a6",
        justifyContent:"center"
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }
})
export default class MyButton extends Component {

    render(){
        const style = typeof this.props.style !== 'undefined' ? this.props.style : styles.button

        return (
            <TouchableNativeFeedback
                onPress={this.props.onPress}
                background={TouchableNativeFeedback.Ripple("#fff",true)}>
                <View style={styles.button}>
                    {this.props.children}
                </View>
            </TouchableNativeFeedback>
        )
    }
}
