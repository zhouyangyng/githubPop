import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native';

export default class ViewUtil{
    static getLeftButton(callback){
        return <TouchableOpacity
            style={{padding: 8}}
            onPress={callback}>
            <Image
                style={{width: 26, height: 26}}
                source={require('../../res/images/ic_arrow_back_white_36pt.png')}/>
        </TouchableOpacity>
    }
}