import React,{
    Component,
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableHighlight
} from 'react-native';

const { width, height } = Dimensions.get('window');
const bottomPos = height - (height * 0.30);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: bottomPos,
        flexDirection: 'column',
        backgroundColor: "#1690a2"
    }
})



export default class CashTab extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Text> cash tab</Text>
            </View>
        )
    }
}