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
    scrollView: {
        flex: 1,
        flexDirection: 'column',
        height: 500,
        backgroundColor: "#ecf0f1",
        marginBottom: 30
    },
    container: {
        padding: 10,
        paddingTop: 5
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

})


const dummy_expenses = [
    {
        expense_type: "Mandate rice",
        value: 2000,
        isRed: true,
        isGreen: false,
        budget: {isBudget: false, budgets: ["Food","Relaxation"]},
    },
    {
        expense_type: "New Iphone 5s",
        value: 71000,
        isRed: false,
        isGreen: false,
        budget: {isBudget: false, budgets: ["Accessories"]}
    },
    {
        expense_type: "Mouse",
        value: 1000,
        isRed: true,
        isGreen: false,
        budget: {isBudget: false, budgets: ["Accessories"]}
    },
    {
        expense_type: "Data Subscription",
        value: 9000,
        isRed: true,
        isGreen: false,
        budget: {isBudget: false, budgets: ["Work", "Accessories"]}
    },
    {
        expense_type: "House rent",
        value: 500000,
        isRed: false,
        isGreen: true,
        budget: {isBudget: false, budgets: ["Accommodation"]}
    },
    {expense_type: "3 domains", value: 9000, isRed: true, isGreen: false, budget: {isBudget: false, budgets: ["Work"]}},
    {
        expense_type: "Chill",
        value: 4000,
        isRed: true,
        isGreen: false,
        budget: {isBudget: false,budgets: ["Food","Relaxation"]}
    },
    {expense_type: "Transport", value: 1300, isRed: false, isGreen: true, budget: {isBudget: false, budgets: ["Work"]}}
]


export default class ExpensesTab extends Component {

    renderSub = (account) => {
        if (account.isRed) {
            return (
                <View style={styles.subList}>
                    <Text style={styles.amountIsRed}>{`# ${account.value}`}</Text>
                    <View style={styles.cList}>{ this.renderBudgets(account.budget.budgets) }</View>
                </View>)
        } else if (account.isGreen) {
            return (
                <View style={styles.subList}>
                    <Text style={styles.amountIsGreen}>{`# ${account.value}`}</Text>
                    <View style={styles.cList}>{ this.renderBudgets(account.budget.budgets) }</View>
                </View>)
        }
        return (
            <View style={styles.subList}>
                <Text style={styles.small}>{`# ${account.value}`}</Text>
                <View style={styles.cList}>{ this.renderBudgets(account.budget.budgets) }</View>
            </View>)
    }

    renderBudgets(budgets) {
        return budgets.map((content, index) => {
            return <Text key={index} style={styles.small}>{index > 1 ? `& ${content}` : content}</Text>
        })
    }

    render() {
        return (
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.headerText}>Expenses</Text>
                    </View>
                    {
                        dummy_expenses.map((content, index) => {
                            return (
                                <View style={styles.listContainer} key={index}>
                                    <Image source={require('./../assets/images/cash2.png')} style={styles.acct_Icon}/>
                                    <View style={styles.gridContainer}>
                                        <Text style={styles.acct_type}>{content.expense_type}</Text>
                                        {this.renderSub(content)}
                                    </View>
                                </View>
                            )
                        })
                    }

                </View>
            </ScrollView>
        )
    }
}