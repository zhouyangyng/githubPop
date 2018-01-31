import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TextInput,
    ListView,
    RefreshControl
} from 'react-native';

import NavigationBar from '../common/NavigationBar';
import HomePage from './HomePage';
import DataRepository from '../expand/dao/DataRepository';
import ScrollableTabView,{ScrollableTabBar} from 'react-native-scrollable-tab-view';
import RepositoryCell from '../common/RepositoryCell';

//URL固定部分
const URL='https://api.github.com/search/repositories?q=';
//查询条件
const QUERY_STR='&sort=stars';

export default class WelcomePage extends Component{

    constructor(props){
        super(props);
        this.dataRepository=new DataRepository();

        this.state={
            result: ''
        }
    }

    onload(){

        let url = this.getUrl(this.text);
        this.dataRepository.fetchNetRepository(url)
            .then(result=>{
                this.setState({
                    result: JSON.stringify(result)
                })
            })
            .catch(error=>{
                this.setState({
                    result: JSON.stringify(error)
                })
            })
    }

    getUrl(key){
        return URL+key+QUERY_STR;
    }

    render(){
        return(
            <View style={styles.container}>
                <NavigationBar
                    title={'最热'}
                    // style={backgroundColor:'#6495ED'}
                />
                {/*<Text*/}
                    {/*onPress={()=>{*/}
                        {/*this.onload()*/}
                    {/*}}*/}
                {/*>获取数据</Text>*/}
                {/*<TextInput*/}
                    {/*style={{height: 30, borderColor: 'gray', borderWidth:1}}*/}
                    {/*onChangeText={text=>this.text=text}*/}
                {/*/>*/}
                {/*<Text style={{height: 500}}>{this.state.result}</Text>*/}

                <ScrollableTabView
                    renderTabBar={()=><ScrollableTabBar/>}
                    tabBarBackgroundColor='#29aeab'
                    tabBarInactiveTextColor='mintcream'
                    tabBarActiveTextColor='white'
                    tabBarUnderlineStyle={{backgroundColor: 'white', height: 2}}
                >
                    <PopularTab tabLabel='Java' />
                    <PopularTab tabLabel='iOS' />
                    <PopularTab tabLabel='Android' />
                </ScrollableTabView>


            </View>
        );
    }
}

class PopularTab extends Component{

    constructor(props){
        super(props);
        this.dataRepository=new DataRepository();

        this.state={
            result: '',
            dataSource: new ListView.DataSource({
                rowHasChanged:(r1,r2)=>r1!==r2
            }),
            isloading: false,

        }
    }

    componentDidMount(){
        this.onload();
    }

    onload(){

        this.setState({
            isloading: true
        })

        let url = this.getUrl(this.props.tabLabel);
        this.dataRepository.fetchNetRepository(url)
            .then(result=>{
                this.setState({
                    // result: JSON.stringify(result)
                    //数据关联到 dataSource
                    dataSource: this.state.dataSource.cloneWithRows(result.items),
                    isloading: false
                })
            })
            .catch(error=>{
                this.setState({
                    result: JSON.stringify(error)
                })
            })
    }

    getUrl(key){
        return URL+key+QUERY_STR;
    }

    renderRow(data){
        return <RepositoryCell data={data} />
    }

    render(){
        return <View style={{flex: 1}}>
            {/*<Text style={{height: 600}}>{this.state.result}</Text>*/}

            <ListView
                dataSource={this.state.dataSource}
                renderRow={(data)=>this.renderRow(data)}
                refreshControl={
                    <RefreshControl
                         refreshing={this.state.isloading}
                         onrRefresh={()=>this.onload()}
                         //颜色
                        colors={['#2196F3']}    //安卓
                        tintColor={'#2196F3'}   //iOS
                        //标题
                        title={'loading'}
                        titleColor={'#2196F3'}
                    />
                }
            />
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})