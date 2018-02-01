
import React, {Component} from 'react';

import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    AsyncStorage
} from 'react-native';

import keys from '../../../res/data/keys.json';

export var FLAG_LANGUAGE={flag_language:'flag_language_language', flag_key:'flag_language_key'}

export default class LanguageDao {

    constructor(flag){
        this.flag=flag;
    }

    fetch(){

        AsyncStorage.removeItem(this.flag, (error=>{

        }))

        return new Promise((resolve, reject)=>{
            // 本地取数据
            AsyncStorage.getItem(this.flag, (error, result)=>{
                if(error){
                    console.log('33333'+error);
                    reject(error);
                }else {
                    //如果有数据
                    if(result){
                        let resultArray=JSON.parse(result);

                        try {
                            resolve(resultArray);
                        } catch (e) {

                            reject(e);
                        }
                    }else {
                        //如果没有，把 json文件的数据保存进去
                        console.log("1234"+keys.type);
                        var data = this.flag === FLAG_LANGUAGE.flag_key ? keys : null;
                        //保存data
                        this.save(data);
                        console.log('22222'+data.type+'==='+data);
                        resolve(data);
                    }
                }

            })
        })
    }

    save(data){
        AsyncStorage.setItem(this.flag, JSON.stringify(data), (error)=>{

        })
    }
}