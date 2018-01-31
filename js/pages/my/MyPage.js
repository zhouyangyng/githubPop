import React, {Component} from 'react';

import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

import NavigationBar from '../../common/NavigationBar';
import CustomKeyPage from './CustomKeyPage';

export default class MyPage extends Component{

    render(){

        return(
            <View style={{flex: 1, backgroundColor: 'white'}}>
            <NavigationBar
                title='我的'
                // style={{backgroundColor: '#32EEA1'}}
            />

            <Text
                style={styles.tips}
                onPress={() => {
                    this.props.navigator.push({
                        component: CustomKeyPage,
                        params: {...this.props}
                    })
                }}>自定义标签</Text>

            </View>
        );
    }
}

const styles=StyleSheet.create({
    tips: {
        fontSize: 20
    }
})