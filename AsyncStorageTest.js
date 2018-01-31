/**

 */
import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    AsyncStorage,
    TextInput
} from 'react-native';

import NavigationBar from './js/common/NavigationBar';

import Toast,{DURATION} from 'react-native-easy-toast';

const KEY='test';

export  default class Boy extends Component{
    constructor(props){
        super(props);
        this.state={

        }
    }

    onSave(){

        AsyncStorage.setItem(KEY, this.text, (error)=>{
            if(!error){
                this.toast.show('保存成功', DURATION.LENGTH_LONG);
            }else {
                this.toast.show('保存失败', DURATION.LENGTH_LONG);
            }
        });
    }

    onRemove(){

        AsyncStorage.removeItem(KEY, (error)=>{
            if(!error){
                this.toast.show('移除成功');
            }else {
                this.toast.show('移除失败');
            }
        })
    }

    onFetch(){

        AsyncStorage.getItem(KEY, (error, result)=>{
            if(!error){
                //如果内容为空
                if(result=='' || result==null){
                    this.toast.show('取出的内容不存在');
                }else {
                    this.toast.show('取出的内容为：'+result);
                }

            }else {
                this.toast.show('取出内容失败');
            }
        })
    }

    render(){
        return(
            <View style={styles.container}>

                <NavigationBar
                    title='AsyncStorage使用'
                    style={{backgroundColor: '#6495ED'}}
                    statusBar={{
                        backgroundColor: 'red',
                    }}
                />
                <TextInput style={{borderWidth:1, height: 40, margin: 5}}
                    onChangeText={text=>this.text=text}
                />

                <View style={{flex: 1, flexDirection: 'row'}}>
                    <Text style={styles.tips}
                          onPress={()=>this.onSave()}
                    >保存</Text>
                    <Text style={styles.tips}
                          onPress={()=>this.onRemove()}
                    >移除</Text>
                    <Text style={styles.tips}
                          onPress={()=>this.onFetch()}
                    >取出</Text>
                </View>

                <Toast ref={toast=>this.toast=toast}/>

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
    text: {
        fontSize: 20
    },
    tips: {
        fontSize: 22,
        margin: 5  //按钮有间距
    }
})