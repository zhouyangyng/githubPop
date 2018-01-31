import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import NavigationBar from '../common/NavigationBar';
import HomePage from './HomePage';

export default class WelcomePage extends Component{

    componentDidMount(){

        this.timer=setTimeout(()=>{
            this.props.navigator.resetTo({
                component: HomePage
            })
       }, 400);
    }
    //组件被卸载时，停止计时器
    componentWillUnmount(){
        this.tiemr&&clearTimeout(this.timer);
    }

    render(){
        return(
            <View>
            <NavigationBar
                title={'欢迎'}
            />
            <Text>欢迎欢迎</Text>
            </View>
        );
    }
}