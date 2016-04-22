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
import KeyboardSpacer from 'react-native-keyboard-spacer'
const { width, height } = Dimensions.get('window');
const bottomPos = height - (height * 0.42);

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor:"#00BAFF",
    alignItems:"center"

  },
    subContainer:{
        flex: 1,
        flexDirection:'column',
        position:"absolute",
        bottom:20,
        alignItems:"center"
    },
  input : {
      height:40,
      padding:5,
      color:"#fff",
      fontSize:16,
      borderWidth:1,
      borderColor:"#fff",
      margin:10,
      marginBottom:5,
      borderRadius:3,
      borderBottomColor:"#fff",
      fontFamily:"Raleway_SemiBold"
   },
   text : {
        color:"#fff",
        fontSize:16,
        textAlign:'center'
    },
    searchButton : {
       flexDirection:"row",
       justifyContent:"center",
       alignItems:"center",
       margin:5,
       marginLeft:10,
       marginRight:10,
       height:35,
       paddingLeft:80,
       paddingRight:80,
       borderColor:"#f7f7f7",
       borderWidth:1,
       borderRadius:2
   },
   search_btn_text:{
        color:"#fff",
        fontSize:16,
       fontFamily:"Raleway_SemiBold"
   },
   row:{
       flex:1,
       flexDirection:"row",
       justifyContent:"space-between",
       width:(width * 0.9),
       marginLeft:5,
       marginRight:5,
       marginTop:20
   }
})

export default class SplashScreen extends Component {
    constructor(){
        super()
        this.state = { user_id:"", password:""}
    }
    
    setUsername(username){
        this.setState({user_id:username})
    }
    _route(){
        console.log(' hvhjjhvhjbhjb')
        Actions.accountscreen
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.subContainer}>
                 <TextInput style={styles.input}
                            onChangeText={(text) => this.setState({user_id:text})}
                            value={this.state.user_id}
                            placeholder="Phone number or Username"
                            placeholderTextColor="#fff"/>
                    <KeyboardSpacer />
                    <TextInput style={styles.input}
                               onChangeText={(text) => this.setState({password:text})}
                               value={this.state.password}
                               placeholder="Password"
                               placeholderTextColor="#fff"
                               secureTextEntry={true}/>
                    <KeyboardSpacer />

                    <TouchableHighlight
                        style={styles.searchButton}
                        underlayColor="#ccc"
                        onPress={Actions.accountscreen}>
                        <Text style={styles.search_btn_text}>Login</Text>
                    </TouchableHighlight>
                    <View style={styles.row}>
                        <TouchableHighlight
                            underlayColor="transparent"
                            onPress={() => console.log('forgot pass')}>
                            <Text style={styles.search_btn_text}>Forgot Password</Text>
                        </TouchableHighlight>
                        <TouchableHighlight
                            underlayColor="transparent"
                            onPress={Actions.reg_screen}>
                            <Text style={styles.search_btn_text}>Register</Text>
                        </TouchableHighlight>
                    </View>
                 </View>

            </View>
        )
    }
}