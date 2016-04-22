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

import moment from 'moment'

const styles = StyleSheet.create({
    row: {
        flexDirection: "row",
        backgroundColor: "#00BAFF",
        padding: 7,
        paddingLeft:10,
        paddingRight:10,
        justifyContent: "space-between"

    },
    image: {
        width: 18,
        height: 18,
        marginRight: 10,
        marginTop: 2.5
    },
    relativeTime: {
        fontFamily: "Raleway_SemiBold",
        fontSize: 16,
        color: "#fff",
        marginTop:9,
        marginLeft:10
    },
    records:{
        fontFamily: "Raleway_SemiBold",
        fontSize: 13,
        color: "#fff",
        marginTop:9
    },
    round: {
        height: 42,
        width: 42,
        borderRadius: 21,
        backgroundColor: "#fff",
        alignItems: "center",
        paddingTop: 2
    },
    date: {
        color: "#00BAFF",
        fontFamily: "Raleway_SemiBold",
        fontSize: 16,
        textAlign: "center",
        marginTop:7
    },
    innerRow: {
        flexDirection: "row"
    }
})
export default class DateListItem extends Component {
    render() {
        return (
            <View style={styles.row}>
                <View style={styles.innerRow}>
                    <View style={styles.round}>
                        <Text style={styles.date}>{this.props.records}</Text>
                    </View>
                    <Text style={styles.relativeTime}>Today</Text>
                </View>


                <Text style={styles.records}>{moment(this.props.date).fromNow()}</Text>

            </View>
        )
    }
}
