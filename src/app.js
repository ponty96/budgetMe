/**
 * Created by ponty on 10/04/2016.
 */
import React,{Component, StyleSheet} from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

import SplashScreen from './screens/splash-screen'
const styles = StyleSheet.create({
  container: {
    flex: 1
  }
})

export default class App extends Component {
    render(){
        return <Router style={styles.container}> 
        <Scene key="root">
            <Scene key="splash-screen" component={SplashScreen} title="Holla!" />
        </Scene>
        </Router>
    }
}