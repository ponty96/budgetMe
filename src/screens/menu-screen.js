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

import {Actions} from 'react-native-router-flux'
const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
    body:{
        flex: 1,
        flexDirection: 'column',
        backgroundColor: "#00BAFF",
        alignItems: "center",
        paddingLeft:10,
        paddingRight:10

    },
    container: {
        flex: 1,
        flexDirection:'column',
        position:"absolute",
        bottom:(height * 0.25),
        left:(width * 0.16),
        alignItems:"center"

    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        width:(width * 0.7),
        marginTop:40
    },
    btn : {
        height:60,
        width:80,
        alignItems:"center",
        backgroundColor:"#ECF0F1",
        borderRadius:8
    },
    btnText:{
        alignSelf:"center",
        textAlign:"center",
        fontSize:14,
        fontFamily:"Raleway_SemiBold",
        marginTop:17
    }

})

export default class MenuScreen extends Component {
    render(){
        return (
            <View style={styles.body}>
                <View style={styles.container}>

                    <View style={styles.row}>

                        <TouchableHighlight
                            style={styles.btn}
                            onPress={Actions.cashflow}>
                            <Text style={styles.btnText}>Cashflow</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={styles.btn}
                            onPress={Actions.spend_screen}>
                            <Text style={styles.btnText}>Spend?</Text>
                        </TouchableHighlight>

                    </View>

                    <View style={styles.row}>

                        <TouchableHighlight
                            style={styles.btn}
                            onPress={Actions.accounts}>
                            <Text style={styles.btnText}>Accounts</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={styles.btn}
                            onPress={Actions.budget_screen}>
                            <Text style={styles.btnText }>Budgets</Text>
                        </TouchableHighlight>

                    </View>

                    <View style={styles.row}>

                        <TouchableHighlight
                            style={styles.btn}
                            onPress={Actions.expenses_screen}>
                            <Text style={styles.btnText}>Expenses</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            style={styles.btn}
                            onPress={Actions.settings_screen}>
                            <Text style={styles.btnText}>Settings</Text>
                        </TouchableHighlight>

                    </View>
                </View>
            </View>
        )
    }
}
