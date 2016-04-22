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

import moment from 'moment'

const dummy_cash_flow = [
    {
        title:"Sheddy Leaves",
        amount:30000,
        date:"2016-04-22T16:40:30+01:00",
        time:"23:45",
        type:"credit"
    },
    {
        title:"Sheddy Leaves",
        amount:30000,
        date:"2016-04-21T16:40:30+01:00",
        time:"23:45",
        type:"debit"
    },
    {
        title:"Data",
        amount:30000,
        date:"2016-04-21T16:35:30+01:00",
        time:"23:45",
        type:"debit"
    },
    {
        title:"Blazibaze ",
        amount:30000,
        date:"2016-04-20T16:40:30+01:00",
        time:"21:45",
        type:"credit"
    },
    {
        title:"Movie",
        amount:30000,
        date:"2016-04-19T16:40:30+01:00",
        time:"19:45",
        type:"credit"
    }
]

import NavBar from '../components/navBar/navbar'
import DateListItem from '../components/cash-flow/date-list'
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
        super(props);
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 != r2});
        this.state = {
            cashflow_ds:ds,
            cashflow_raw:[]
        }
    }
    componentWillMount(){
        this.setState({
            cashflow_ds:this.state.cashflow_ds.cloneWithRows(dummy_cash_flow),
            cashflow_raw:dummy_cash_flow
        })
    }

    renderDateItem = (rowData) => {
        const same_record = this.state.cashflow_raw.filter(con => {
            const con_date = moment(con.date).format('ll');
            const rowData_date = moment(rowData.date).format('ll');
            if(con_date == rowData_date){
                return con;
            }
        })
        return <DateListItem
                date={rowData.date}
                records={same_record.length}/>
    }

    renderRow = (rowData, sectionID, rowID, highlightRow) => {

        if(rowID > 0) {
            const prev = this.state.cashflow_raw[rowID -1];
            const prev_date = moment(prev.date).format('ll');
            const rowData_date = moment(rowData.date).format('ll');
            return (
                <View>
                    { prev_date != rowData_date ? this.renderDateItem(rowData) : <View></View> }
                    <FlowItem title={rowData.title}
                              amount={rowData.amount}
                              time={rowData.date}
                              type={rowData.type}/>
                </View>
            )
        }
        return (
            <View>
                { this.renderDateItem(rowData) }
                <FlowItem title={rowData.title}
                          amount={rowData.amount}
                          time={rowData.date}
                          type={rowData.type}/>
            </View>
        )
    }
    render(){
        return (
            <View>
                <NavBar title="Cashflow"/>
                <ListView
                    renderRow={this.renderRow}
                    dataSource={this.state.cashflow_ds}
                />
            </View>
        )
    }
}