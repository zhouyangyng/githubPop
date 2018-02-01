import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView
} from 'react-native';

import NavigationBar from '../../common/NavigationBar';
import ViewUtil from '../../util/ViewUtil';
import LanguageDao, {FLAG_LANGUAGE} from '../../expand/dao/LanguageDao';

export default class CustomKeyPage extends Component{

    constructor(props){
        super(props);
        this.languageDao=new LanguageDao(FLAG_LANGUAGE.flag_key);
        this.state={
            dataArray: []
        }
    }

    componentDidMount(){
        this.loadData();
    }

    //从本地取数据
    loadData(){
        this.languageDao.fetch()
            .then(result=>{
                this.setState({
                    dataArray: result
                })
            })
            .catch(error=>{
                console.log(error);
            })
    }

    onSave(){
        this.props.navigator.pop();
    }

    //返回 view
    renderView(){
        // return <Text style={{height: 300, width: 400}}>{JSON.stringify(this.state.dataArray )}</Text>

        // //如果不存在 返回null
        // if(!this.state.dataArray || this.state.dataArray.length==0) return null;
        //
        // let len=this.state.dataArray.length;
        let views=[];
        // for(let i=0, l=len-2; i<l; i+=2){
        //     views.push(
        //         <View key={i} style={{flex: 1}}>
        //             //每2个一行
        //             <View style={styles.item}>
        //                 <Text>{this.state.dataArray[i].name}</Text>
        //                 <Text>{this.state.dataArray[i+1].name}</Text>
        //             </View>
        //             //加 下划线
        //             <View style={styles.line}></View>
        //         </View>)
        // }
        console.log(this.state.dataArray);
        let item1=this.state.dataArray['data'];

        var arr=[{'name':'iOS'}, {'name':'Java'}];

        for(let i=0; i<arr.length; i++){
            views.push(
                <View key={i}>

                    <View style={styles.item}>
                        <Text>{arr[i].name}</Text>
                        {/*<Text>{item1}</Text>*/}
                    </View>

                    <View style={styles.line}></View>
                </View>
            )
        }




        return views;
    }

    render() {

        let rightButton = <TouchableOpacity
            onPress={() => this.onSave()}>
            <View style={{margin: 10}}>
                <Text style={styles.title}>保存</Text>
            </View>
        </TouchableOpacity>

        return (
            <View style={{backgroundColor: 'white'}}>
                <NavigationBar
                    title='自定义标签'
                    style={{backgroundColor: '#6495ED'}}
                    leftButton={ViewUtil.getLeftButton(() => this.onSave())}
                    rightButton={rightButton}
                />

                <Text style={styles.tips}>自定义标签</Text>

                <ScrollView style={{height: 300, width: 300, backgroundColor: '#A1A8ea'}}>
                    {this.renderView()}
                </ScrollView>

            </View>
        );
    }
}

const styles=StyleSheet.create({
    tips: {
        fontSize: 20
    },
    title: {
        fontSize: 18,
        color: 'white'
    },
    item: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    line: {
        height: 1,
        backgroundColor: '#111111'
    }
})