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
    TouchableHighlight
} from 'react-native';


import NavBar from '../components/navBar/navbar'
const styles = StyleSheet.create({
    body:{
        flex: 1,
        flexDirection: 'column',
        paddingLeft:10,
        paddingRight:10

    }
})
export default class CashflowScreen extends Component {
    render(){
        return (
            <View>
                <NavBar title="Cashflow"/>
                <View style={styles.body}>
                    <Text> cash flow screen</Text>
                </View>
            </View>
        )
    }
}