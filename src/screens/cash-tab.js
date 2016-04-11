import React,{
    Component,
    View,
    Text,
    StyleSheet,
    TextInput,
    Dimensions,
    TouchableHighlight,
    Switch,
    Picker,
    Image,
    ScrollView
} from 'react-native';

const { width, height } = Dimensions.get('window');
const bottomPos = height - (height * 0.90);

const styles = StyleSheet.create({
    scrollView:{
        flex: 1,
        flexDirection: 'column',
        height:500,
        borderColor:"#000",
        backgroundColor: "#ecf0f1"
    },
    container: {
        padding:10
    },
    headerText:{
        fontSize:18,
        textAlign:"center",
        fontWeight:"bold",
        color:"#2980b9"
    },
    headerImg:{
        alignSelf:"center",
        height:200,
        width:200
    },
    viewContainer:{
        paddingLeft:5,
        marginTop:10
    },
    rowContainer:{
        paddingLeft:5,
        marginTop:10,
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between"
    },
    labelText:{
        fontSize:14,
        marginLeft:3,
        color:"#2980b9"
    },
    textInput:{
        height:40,
        padding:5,
        color:"#ccc",
        fontSize:14,
        borderWidth:1,
        borderColor:"#fff",
        marginBottom:5,
        borderRadius:3
    },
    budgetPicker:{
        marginTop:20
    }
})

const categories = [
    {name:"Food Stuff",id:23233},
    {name:"Clothes",id:23233223},
    {name:"Games",id:23230}
]

const budgets = [
    {name:"Food ff",id:233, value:200},
    {name:"Cloths",id:232223, value:400},
    {name:"Gam",id:2230, value:7000}
]


export default class CashTab extends Component {
    constructor(){
        super();
        this.state = {
            title:"",
            category:0,
            description:"",
            payee:{
                name:""
            },
            budget:{
                isBudget:false,
                id:0
            }
        }
    }
    setTitle(text){
        this.setState({title:text})
    }
    setDescription(text){
        this.setState({description:text})
    }

    setPayee(text){
        this.setState({payee:{name:text}})
    }

    setCategory(id){
        this.setState({category:id})
    }

    isBudget(val){
        console.log('switch val:', val);
        this.setState({budget:{isBudget:val}})
    }

    setBudget(id){
        this.setState({budget:{id:id}})
    }

    renderBudgetPicker = () => {
        const isBudget =  this.state.budget.isBudget;
        if(!isBudget){
            return <View></View>
        }
        return (
            <Picker
                selectedValue={this.state.budget.id}
                onValueChange={(id) => this.setBudget(id)}>
                {
                    budgets.map(content => {
                        return <Picker.Item key={content.id} label={content.name} value={content.id} />
                    })
                }
            </Picker>
        )
    }

    render(){
        return(
            <ScrollView style={styles.scrollView}>
                <View style={styles.container}>
                    <View>
                        <Text style={styles.headerText}>Spend Cash?</Text>
                        <Image source={require('./../assets/images/Spending_Money-256.png')} style={styles.headerImg}/>
                    </View>
                    <View style={styles.viewContainer}>
                        <Text style={styles.labelText}>Title</Text>
                        <TextInput
                            placeholder="Expense Title"
                            text={this.state.title}
                            onChangeText={(text) => this.setTitle(text)}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.viewContainer}>
                        <Text style={styles.labelText}>Category</Text>
                        <Picker
                            selectedValue={this.state.category}
                            onValueChange={(id) => this.setCategory(id)}>
                            {
                                categories.map(content => {
                                    return <Picker.Item key={content.id} label={content.name} value={content.id} />
                                })
                            }
                        </Picker>
                    </View>
                    <View style={styles.viewContainer}>
                        <Text style={styles.labelText}>Description</Text>
                        <TextInput
                            placeholder="Expense Description"
                            text={this.state.description}
                            onChangeText={(text) => this.setDescription(text)}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.viewContainer}>
                        <Text style={styles.labelText}>Payee</Text>
                        <TextInput
                            placeholder="Payee"
                            text={this.state.payee.name}
                            onChangeText={(text) => this.setPayee(text)}
                            style={styles.textInput}
                        />
                    </View>
                    <View style={styles.rowContainer}>
                        <Text style={styles.labelText}>Is this part of a budget</Text>
                        <Switch
                            onValueChange={(value) => this.isBudget(value)}
                            value={this.state.budget.isBudget} />
                    </View>

                </View>
            </ScrollView>
        )
    }
}