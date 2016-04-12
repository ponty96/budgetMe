/**
 * Created by ponty on 10/04/2016.
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

import _ from 'lodash'

const styles = StyleSheet.create({
    scrollView:{
        flex: 1,
        flexDirection: 'column',
        height:600,
        backgroundColor: "#ecf0f1",
        marginBottom:30
    },
    container: {
        padding: 10,
        paddingTop: 5,
        position:"relative",
        backgroundColor: "#ecf0f1",
    },
    headerText:{
        fontSize:18,
        textAlign:"center",
        fontWeight:"bold",
        color:"#2980b9"
    },
    listContainer: {
        padding:10,
        flex:1,
        flexDirection:"row"
    },
    acct_Icon:{
        height:30,
        width:30,
    },
    gridContainer:{
        flex:1,
        flexDirection:"column",
        marginLeft:10,
        borderBottomColor:"#000",
        borderBottomWidth:1
    },
    acct_type:{
        fontSize:13,
        marginBottom:8,
        color:"#2980b9"
    },
    amount:{
        fontSize:11,
        marginBottom:5,
        fontWeight:"bold"
    },
    amountIsRed:{
        fontSize:11,
        marginBottom:5,
        color:"#c0392b"
    },
    amountIsGreen:{
        fontSize:11,
        marginBottom:5,
        color:"#27ae60"
    }

})


const dummy_account = [
    {account_type:"Cash", value:40, isRed:true, isGreen:false},
    {account_type:"PayStack", value:0, isRed:false, isGreen:false},
    {account_type:"Allowance", value:30, isRed:false, isGreen:true},
    {account_type:"Distru", value:250, isRed:true, isGreen:false},
    {account_type:"Pontysoft", value:1000, isRed:false, isGreen:false},
    {account_type:"Freelance", value:500, isRed:false, isGreen:true}
]


export default class AccountTab extends Component {

    renderAmount = (account) => {
        if(account.isRed){
            return <Text style={styles.amountIsRed}>{`$ ${account.value}`}</Text>
        } else if(account.isGreen){
            return <Text style={styles.amountIsGreen}>{`$ ${account.value}`}</Text>
        }
        return <Text style={styles.amount}>{`$ ${account.value}`}</Text>
    }

    render(){
        return(
            <View>
                <View style={styles.container}>
                        <Text style={styles.headerText}>Accounts</Text>
                    </View>
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    {
                        dummy_account.map((content,index) => {
                            return (
                                <View style={styles.listContainer} key={index}>
                                    <Image source={require('./../assets/images/cash2.png')} style={styles.acct_Icon}/>
                                    <View style={styles.gridContainer}>
                                        <Text style={styles.acct_type}>{content.account_type}</Text>
                                        {this.renderAmount(content)}
                                    </View>
                                </View>
                            )
                        })
                    }

                </View>
            </ScrollView>
                </View>
        )
    }
}