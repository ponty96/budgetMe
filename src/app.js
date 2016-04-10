/**
 * Created by ponty on 10/04/2016.
 */
import React,{Component, StyleSheet, Dimensions} from 'react-native';
import {Actions, Scene, Router, TabBar} from 'react-native-router-flux';


import TabIcon from './components/tabIcon'


import SplashScreen from './screens/splash-screen'
import AccountTab from './screens/account-tab'
import CashTab from './screens/cash-tab'
import ExpensesTab from './screens/expenses-tab'
import BudgetTab from './screens/budget-tab'

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
    tabBarStyle:{
        flex:1,
        flexDirection:"row",
        backgroundColor:"#95a5a6",
        padding:0,
        height:45
    }
})

export default class App extends Component {
    render(){

        return (
        <Router style={styles.container}> 
            <Scene key="root">
                <Scene key="tabbar" tabs={true} tabBarStyle={styles.tabBarStyle}>
                    <Scene key="cash-tab" title="Cash" component={CashTab} hideNavBar={true} icon={TabIcon}/>
                    <Scene key="account-tab" title="Accounts" component={AccountTab} icon={TabIcon}/>
                    <Scene key="expenses-tab" title="Expenses" component={ExpensesTab} icon={TabIcon}/>
                    <Scene key="budget-tab" title="Budget" component={BudgetTab} icon={TabIcon}/>
                </Scene>
                <Scene key="splash" component={SplashScreen} title="Holla!" hideNavBar={true}/>

              </Scene>
        </Router>
        )
        
    }
}