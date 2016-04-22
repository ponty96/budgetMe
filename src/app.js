/**
 * Created by ponty on 10/04/2016.
 */
import React,{Component, StyleSheet, Dimensions} from 'react-native';
import {Actions, Scene, Router, TabBar,  Modal} from 'react-native-router-flux';


import TabIcon from './components/tabIcon'


import SplashScreen from './screens/splash-screen'
import RegScreen from './screens/reg-screen'
import MenuScreen from './screens/menu-screen'

import CashflowScreen from './screens/cashflow-screen'

import AccountTab from './screens/account-tab'
import CashTab from './screens/cash-tab'
import ExpensesTab from './screens/expenses-tab'
import BudgetTab from './screens/budget-tab'
import NewBudgetScreen from './screens/create-budget-screen'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ecf0f1",
  },
    tabBarStyle:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"#95a5a6",
        padding:0,
        height:45
    },
    sceneStyle : {
        backgroundColor:"#ffffff"
    }
})

export default class App extends Component {
    render(){

        return (
        <Router style={styles.container} sceneStyle={styles.sceneStyle}>
            <Scene key="root">

                <Scene key="menu_screen" component={MenuScreen} hideNavBar={true}/>
                <Scene key="cashflow" component={CashflowScreen} hideNavBar={true}/>
                <Scene key="splash" component={SplashScreen} title="Holla!" hideNavBar={true}/>
                <Scene key="reg_screen" component={RegScreen} title="Holla!" hideNavBar={true}/>

                <Scene key="tabbar" tabs={true} tabBarStyle={styles.tabBarStyle}>
                    <Scene key="cash-tab" title="Cash" component={CashTab} hideNavBar={true} icon={TabIcon}/>
                    <Scene key="account-tab" title="Accounts" component={AccountTab} icon={TabIcon} hideNavBar={true}/>
                    <Scene key="expenses-tab" title="Expenses" component={ExpensesTab} icon={TabIcon} hideNavBar={true}/>
                    <Scene key="budget-tab" title="Budget" component={BudgetTab} icon={TabIcon} hideNavBar={true}/>
                </Scene>
                <Scene key="create_budget" component={NewBudgetScreen} title="New Budget" duration={1}/>
              </Scene>
        </Router>
        )
        
    }
}