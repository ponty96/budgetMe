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

const { width, height } = Dimensions.get('window');
const bottomPos = height - (height * 0.30);

const styles = StyleSheet.create({
    container: {
    flex: 1,
    paddingTop:bottomPos,
    flexDirection:'column',
  },
  input : {
      height:40,
      padding:5,
      color:"#ccc",
      fontSize:14,
      borderWidth:1,
      borderColor:"#fff",
      margin:10,
      marginBottom:5,
      borderRadius:3,
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
       paddingLeft:30,
       paddingRight:30,
       borderColor:"#f7f7f7",
       borderWidth:1,
       borderRadius:2
   },
   search_btn_text:{
        color:"#fff"
   }
})

export default class SplashScreen extends Component {
    constructor(){
        super()
        this.state = {username:""}
    }
    
    setUsername(username){
        this.setState({username:username})
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
                            onChangeText={(text) => this.setUsername(text)} 
                            value={this.state.username} 
                            placeholder="Enter Username"
                            multiline={true}/>
                 </View>
                 <TouchableHighlight
                    style={styles.searchButton}
                    underlayColor="#ccc"
                    onPress={Actions.accountscreen}>
                         <Text style={styles.search_btn_text}>Get Started</Text>
                  </TouchableHighlight>
            </View>
        )
    }
}