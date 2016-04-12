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
    TouchableHighLight,
    Image,
    ScrollView
} from 'react-native';

const styles = StyleSheet.create({
    button:{
        height:40,
        width:40,
        borderRadius:10
    }
})
export default class MyButton extends Component {
    press = () => {
        console.log('pressed button')
    }
    render(){
        return (
            <TouchableHighLight
                onPress={this.press}
            >
                {this.props.children}
            </TouchableHighLight>
        )
    }
}
