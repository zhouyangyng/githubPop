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

import Girl from './girl';
import NavigationBar from './js/common/NavigationBar';

export  default class Boy extends Component{
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
                title={'Boy'}
                statusBar={{
                     backgroundColor: 'red',

                }}
            />
            <Text style={styles.text}>I am a boy</Text>
            <Text style={styles.text}
                  onPress={()=>{
                    this.props.navigator.push({
                        component: Girl,
                        param:{
                            word:'一枝玫瑰',
                            onCallBack:(word)=>{
                                this.setState({
                                    word:word
                                })
                            }
                        }
                    })
                  }}>送一支玫瑰</Text>
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