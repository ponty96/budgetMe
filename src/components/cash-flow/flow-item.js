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
import moment from 'moment'

const { width, height } = Dimensions.get('window');

const styles =  StyleSheet.create({
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginTop:-3,
        paddingLeft: 10,
        paddingRight: 10,

    },
    icon:{
        width:28,
        height:60,
        marginRight:20,
        marginTop:2.5
    },
    title:{
        fontFamily:"Raleway_SemiBold",
        fontSize:16,
        color:"#5C5C5C",
        marginTop:12,
        marginBottom:3
    },
    amountDb:{
        fontFamily:"Raleway_Medium",
        fontSize:16,
        color:"#CC0033"
    },
    amountCr:{
        fontFamily:"Raleway_Medium",
        fontSize:16,
        color:"#2C9888"
    },
    time:{
        fontFamily:"Raleway_Medium",
        fontSize:14,
        color:"rgb(92,92,92)",
        marginTop:12
    },
    miniRow:{
        flexDirection:"row",
    }
})
export default class FlowItem extends Component{

    getAmount(type,amount){
        if(type == "credit"){
            return <Text style={styles.amountCr}>+{amount}</Text>
        }
        return <Text style={styles.amountDb}>-{amount}</Text>
    }
    render(){
        const type = this.props.type;
        const source =  type == "credit" ? require('../../assets/images/group-22@2x.png') : require('../../assets/images/group-23@2x.png')
        return (
            <View style={styles.row}>
                <View style={styles.miniRow}>
                    <Image source={source} style={styles.icon}/>
                    <View>
                        <Text style={styles.title}>{this.props.title}</Text>
                        {this.getAmount(type, this.props.amount)}
                    </View>
                </View>
                <Text style={styles.time}>{moment(this.props.time).format('LT')}</Text>
            </View>
        )
    }
}
