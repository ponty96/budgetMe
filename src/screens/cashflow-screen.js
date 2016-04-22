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
    ListView
} from 'react-native';

const dummy_cash_flow = [
    {
        title:"Sheddy Leaves",
        amount:30000,
        date:"28|April|2016",
        time:"23:45",
        type:"credit"
    },
    {
        title:"Sheddy Leaves",
        amount:30000,
        date:"28|April|2016",
        time:"23:45",
        type:"debit"
    },
    {
        title:"Data",
        amount:30000,
        date:"27|April|2016",
        time:"23:45",
        type:"debit"
    },
    {
        title:"Blazibaze ",
        amount:30000,
        date:"27|April|2016",
        time:"21:45",
        type:"credit"
    },
    {
        title:"Movie",
        amount:30000,
        date:"27|April|2016",
        time:"19:45",
        type:"credit"
    }
]

import NavBar from '../components/navBar/navbar'
import DateList from '../components/cash-flow/date-list'
import FlowItem from '../components/cash-flow/flow-item'

const styles = StyleSheet.create({
    body:{
        flex: 1,
        flexDirection: 'column',
        paddingLeft:10,
        paddingRight:10

    }
})


export default class CashflowScreen extends Component {
    constructor(props){
        super(props)
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            cashflow_ds:ds,
            cashflow_raw:[]
        }
    }
    componentWillMount(){
        this.setState({cashflow_ds:this.state.cashflow_ds.cloneWithRows(dummy_cash_flow)})
    }

    renderRow = (rowData, sectionID, rowID, highlightRow) => {
        return (
           <FlowItem title={rowData.title}
                     amount={rowData.amount}
                     time={rowData.time}
                     type={rowData.type}/>
        )
    }
    render(){
        return (
            <View>
                <NavBar title="Cashflow"/>
                <View style={styles.body}>
                    <ListView
                        renderRow={this.renderRow}
                        dataSource={this.state.cashflow_ds}
                    />
                </View>
            </View>
        )
    }
}