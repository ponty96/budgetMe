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
    Image
} from 'react-native';

import _ from 'lodash'

const array_of_icons = [
    {key:'cash-tab', url:require('./../assets/images/cash2.png')},
    {key:'account-tab', url:require('./../assets/images/dollar-purse-icon-90076.png')},
    {key:'expenses-tab', url:require('./../assets/images/credit_card_icon-01.png')},
    {key:'budget-tab', url:require('./../assets/images/check18-512.png')}
];

const { width, height } = Dimensions.get('window');
const iconWidth = (width * 0.25)

const styles = StyleSheet.create({
    iconContainer:{
        flex:1,
        flexDirection:"column",
        paddingTop:10,
        width:iconWidth,
        alignItems:"center"
    },
    active_iconContainer:{
        flex:1,
        flexDirection:"column",
        backgroundColor:"#ecf0f1",
        width:iconWidth,
        paddingTop:10,
        alignItems:"center"

    },
    tabIcon:{
        height:30,
        width:30
    }
})


export default class TabIcon extends Component {
    render(){

        const object = _.find(array_of_icons,{key:this.props.sceneKey});

        return (
            <View style={this.props.selected ? styles.active_iconContainer : styles.iconContainer}>
                <Image source={object.url} style={styles.tabIcon}/>
            </View>

        );
    }
}

