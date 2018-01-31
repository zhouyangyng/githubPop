/**

 */
import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';

import NavigationBar from './js/common/NavigationBar';

export  default class Girl extends Component{
    constructor(props){
        super(props);
        this.state={
            word: ''
        }
    }
    render(){
        return(
        <View style={styles.container}>
            <NavigationBar
                // title: {'Girl'}
                style={{
                    backgroundColor: '#FFC1C1'
                }}
            />
            <Text style={styles.text}>I am a girl</Text>
            <Text style={styles.text}>我收到了：{this.props.word}</Text>
        </View>
        )
    }
}

const styles=StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20
    }
})