/**
 * Created by ponty on 22/04/2016.
 */
/**
 * Created by ponty on 22/04/2016.
 */
import React,{
    Component,
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableHighlight,
    Image
} from 'react-native';


import {Actions } from 'react-native-router-flux'
const { width, height } = Dimensions.get('window');

const styles =  StyleSheet.create({
    row:{
        flex:1,
        flexDirection:"row",
        backgroundColor: "#00BAFF",
        padding:10

    },
    image:{
        width:18,
        height:18,
        marginRight:10,
        marginTop:2.5
    },
    text:{
        fontFamily:"Raleway_SemiBold",
        fontSize:16,
        color:"#fff"
    }
})
export default class DateList extends Component{
    render(){
        return (
            <View>
                <Text>fdggggfgfgffg</Text>
            </View>
        )
    }
}
