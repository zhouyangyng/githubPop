import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    ListView,
    TouchableOpacity,
    RefreshControl
} from 'react-native';

import Girl from './girl';
import NavigationBar from './js/common/NavigationBar';
import Toast,{DURATION} from 'react-native-easy-toast';

var Dimensions=require('Dimensions');
var screenWidth=Dimensions.get('window').width;

var data = {
    "result": [
        {
          "email": "12345@qq.com",
          "name": "jack"
        },
        {
            "email": "12345abcc@qq.com",
            "name": "mike"
        },
        {
            "email": "abcddd@qq.com",
            "name": "lisa"
        },
        {
            "email": "zhoufyasdf@qq.com",
            "name": "jack"
        },
        {
            "email": "weioomv@qq.com",
            "name": "rose"
        },
        {
            "email": "12345@qq.com",
            "name": "mobike"
        },
        {
            "email": "12345@qq.com",
            "name": "doctor"
        },
    ]
};

export  default class Boy extends Component{
    constructor(props){
        super(props);

        const ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1!==r2});
        this.state={
            dataSource:ds.cloneWithRows(data.result),
            isLoading:true
        }
        //进来就会刷新，要调用 onLoad函数，刷新结束后停止
        this.onLoad();
    }
    //返回 row
    renderRow(item){
        return <View style={styles.rowStyle}>
            {/*//可以单击length_long 持续时间*/}
            <TouchableOpacity
                onPress={()=>{
                    this.toast.show('你单击了' + item.name, DURATION.LENGTH_LONG)
                }}
            >
                <Text style={styles.tips}>{item.name}</Text>
                <Text style={styles.tips}>{item.email}</Text>
            </TouchableOpacity>
        </View>
    }
    //返回 分割线
    renderSeparator(sectionID, rowID, adjacentRowHighlited){
        return <View key={rowID} style={styles.lineStyle}></View>
    }
    //返回 footer
    renderFooter(){
        return <View>
            <Image style={styles.imageStyle} source={{uri:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516125628915&di=0ed336bd861cf7b3becaba5c82fc5fa2&imgtype=0&src=http%3A%2F%2Fimgfs.oppo.cn%2Fdata%2Fattachment%2Fforum%2F201509%2F15%2F102814jza5d5hkwz7eq7kh.jpg'}}/>
        </View>
    }
    //刷新时调用
    onLoad(){
        //延时执行
        setTimeout(()=>{
            this.setState({
                isLoading:false
            })
        }, 2000);
    }
    render(){
        return(
            <View style={styles.container}>

                <NavigationBar
                    title={'ListViewTest'}
                    backgroundColor={'blue'}
                />
                <ListView
                    dataSource={this.state.dataSource}
                    renderRow={(item)=>this.renderRow(item)}
                    renderSeparator={(sectionID, rowID, adjacentRowHighlited)=>this.renderSeparator(sectionID, rowID, adjacentRowHighlited)}
                    renderFooter={()=>this.renderFooter()}

                    refreshControl={<RefreshControl
                        refreshing={this.state.isLoading}
                        onRefresh={()=>this.onLoad()}
                    />}
                />
                <Toast ref={toast=>{this.toast=toast}}/>

            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        // justifyContent: 'center'
    },
    tips: {
        fontSize: 20
    },
    rowStyle: {
        height: 66
    },
    lineStyle: {
        height: 1,
        backgroundColor: 'gray'
    },
    imageStyle: {
        height: screenWidth*0.6,
        width: screenWidth
    }
})