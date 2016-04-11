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
    ScrollView
} from 'react-native';
import { MKButton } from 'react-native-material-kit'

const { width, height } = Dimensions.get('window');

const topMargin = height - (height * 0.24);
const leftMargin = width - (width * 0.21);

const styles = StyleSheet.create({
    button:{
        height:40,
        width:40,
        borderRadius:10,
        position:"absolute",
        top:topMargin,
        left:leftMargin
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
        const ColoredRaisedButton = MKButton.coloredFab()
            .withStyle(style)
            .withOnPress(() => this.props.onPress())
            .build();
        return (
            <View style={this.props.style}>
                <ColoredRaisedButton>
                    {this.props.children}
                </ColoredRaisedButton>
            </View>
        )
    }
}
