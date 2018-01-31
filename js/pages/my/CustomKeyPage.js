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

export default class CustomKeyPage extends Component{

    onSave(){
        this.props.navigator.pop();
    }

    renderView(){

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

                <ScrollView>
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
    }
})