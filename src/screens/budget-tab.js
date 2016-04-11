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
import MyButton from '../components/button'

const styles = StyleSheet.create({
    scrollView: {
        flex: 1,
        flexDirection: 'column',
        height: 500,
        backgroundColor: "#ecf0f1",
        marginBottom: 30,
        position:"relative"
    },
    container: {
        padding: 10,
        paddingTop: 5,
        position:"relative"
    },
    headerText: {
        fontSize: 18,
        textAlign: "center",
        fontWeight: "bold",
        color: "#2980b9"
    },
    listContainer: {
        padding: 10,
        flex: 1,
        flexDirection: "row"
    },
    acct_Icon: {
        height: 30,
        width: 30,
    },
    gridContainer: {
        flex: 1,
        flexDirection: "column",
        marginLeft: 10,
        borderBottomColor: "#000",
        borderBottomWidth: 1
    },
    acct_type: {
        fontSize: 13,
        marginBottom: 8,
        color: "#2980b9"
    },
    small: {
        fontSize: 11,
        marginBottom: 5,
        marginRight:2,
        fontWeight:"bold"
    },
    amountIsRed: {
        fontSize: 11,
        marginBottom: 5,
        color: "#c0392b"
    },
    amountIsGreen: {
        fontSize: 11,
        marginBottom: 5,
        color: "#27ae60"
    },
    subList: {
        flex: 1,
        flexDirection: "row",
        justifyContent:"space-between"
    },
    cList: {
        flex: 1,
        flexDirection: "row",
        justifyContent:"flex-end"
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'white'
    }

})


const dummy_expenses = [
    {
        budget_type: "Accommodation",
        value: 2000,
        isRed: false,
        isGreen: true,
        spent:2000
    },
    {
        budget_type: "Accessories",
        value: 50000,
        isRed: true,
        isGreen: false,
        spent:72000
    },
    {
        budget_type: "Work",
        value: 1000,
        isRed: false,
        isGreen: false,
        spent:500

    },
    {
        budget_type: "Food & Relaxation",
        value: 9000,
        isRed: false,
        isGreen: true,
        spent:10000
    },
    {
        budget_type: "Transport",
        value: 500000,
        isRed: false,
        isGreen: false,
        spent:500
    },
    {budget_type: "Freelance", value: 9000, isRed: true, isGreen: false,spent:10000},
    {
        budget_type: "Accommodation",
        value: 2000,
        isRed: false,
        isGreen: true,
        spent:2000
    },
    {
        budget_type: "Accessories",
        value: 50000,
        isRed: true,
        isGreen: false,
        spent:72000
    },
    {
        budget_type: "Work",
        value: 1000,
        isRed: false,
        isGreen: false,
        spent:500

    },
    {
        budget_type: "Food & Relaxation",
        value: 9000,
        isRed: false,
        isGreen: true,
        spent:10000
    },
    {
        budget_type: "Transport",
        value: 500000,
        isRed: false,
        isGreen: false,
        spent:500
    },
    {budget_type: "Freelance", value: 9000, isRed: true, isGreen: false,spent:10000}
]


export default class BudgetTab extends Component {

    renderSub = (account) => {
        if (account.isRed) {
            return (
                <View style={styles.subList}>
                    <Text style={styles.amountIsRed}>{`# ${account.value}`}</Text>
                    <Text style={styles.small}>{`Spent: # ${account.spent}`}</Text>
                </View>)
        } else if (account.isGreen) {
            return (
                <View style={styles.subList}>
                    <Text style={styles.amountIsGreen}>{`# ${account.value}`}</Text>
                    <Text style={styles.small}>{`Spent: # ${account.spent}`}</Text>
                </View>)
        }
        return (
            <View style={styles.subList}>
                <Text style={styles.small}>{`# ${account.value}`}</Text>
                <Text style={styles.small}>{`Spent: # ${account.spent}`}</Text>
            </View>)
    }

    press = () =>{
        console.log('I\'m suppose to create a new budget with this')
    }

    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <MyButton onPress={this.press}>
                        <Text style={styles.buttonText}>+</Text>
                    </MyButton>
                    <View>
                        <Text style={styles.headerText}>Budgets</Text>
                    </View>
                    <View>
                    {
                        dummy_expenses.map((content, index) => {
                            return (
                                <View style={styles.listContainer} key={index}>
                                    <Image source={require('./../assets/images/cash2.png')} style={styles.acct_Icon}/>
                                    <View style={styles.gridContainer}>
                                        <Text style={styles.acct_type}>{content.budget_type}</Text>
                                        {this.renderSub(content)}
                                    </View>
                                </View>
                            )
                        })
                    }
                    </View>

                </View>
            </ScrollView>
        )
    }
}