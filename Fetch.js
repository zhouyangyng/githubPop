import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import NavigationBar from './js/common/NavigationBar';
import HttpUtils from './HttpUtils';

export  default class Fetch extends Component{
    constructor(props){
        super(props);
        this.state={
            result:''
        }
    }

    //获取数据的函数
    onLoad(url,data){
        //直接请求数据

        //封装后的 HttpUtils
        HttpUtils.get(url)
            .then(result=> {
                this.setState({
                    result: JSON.stringify(result)
                })
            })
            .catch(error=> {
                result: JSON.stringify(error)
            })
    // fetch(url)
    //     .then(response=>response.json())
    //     .then(result=>{
    //             this.setState({
    //                 result: JSON.stringify(result)
    //             })
    //         }
    //     )

        //提交数据
    //     fetch(url,{
    //         method:'POST',
    //         header:{
    //             'Accept':'application/json',
    //             'Content-Type':'application/json'
    //         },
    //         body:JSON.stringify(data)
    //     })
    //         .then(response=>response.json())
    //         .then(result=>{
    //             this.setState({
    //                 result: JSON.stringify(result)
    //             })
    //         })
    //         .catch(error=>{
    //             this.setState({
    //                 result: JSON.stringify(error)
    //             })
    //
    //             }
    //         )
    }

    onSubmit(url,data) {
        HttpUtils.post(url, data)
            .then(result=> {
                this.setState({
                    result: JSON.stringify(result)
                })
            })
            .catch(error=> {
                this.setState({
                    result: JSON.stringify(error)
                })
            })
    }

    render(){
        return(
            <View style={styles.container}>

                <NavigationBar
                    title='Fetch的使用'
                />
                <Text
                    onPress={()=>this.onSubmit('http://rap.taobao.org/mockjsdata/11793/submit', {'userName':'小明', 'password':'123456'})}
                    // onPress={()=>this.onLoad('https://facebook.github.io/react-native/movies.json')}
                >获取数据</Text>
                <Text>返回结果:{this.state.result}</Text>
            </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        // justifyContent: 'center'
    },
    text: {
        fontSize: 20
    }
})