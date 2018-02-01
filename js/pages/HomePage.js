import React, { Component } from 'react';
import TabNavigator from 'react-native-tab-navigator';

import {
    StyleSheet,
    Text,
    View,
    Image,

} from 'react-native';

import {
    Navigator
} from 'react-native-deprecated-custom-components';

import Popular from './PopularPage';
import AsyncStorageTest from '../../AsyncStorageTest';
import MyPage from './my/MyPage';

export default class HomePage extends Component {
    constructor(props){
        super(props);
        this.state={
            selectedTab:'home',
        }
    }
    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'home'}
                        selectedTitleStyle={{color: 'red'}} //选中 文字 颜色
                        title="我的"
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_polular.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'red'}]}
                                                         source={require('../../res/images/ic_polular.png')}/>}
                        // badgeText="1"
                        onPress={() => this.setState({selectedTab: 'home'})}>
                        {/*<View style={styles.page1}>*/}
                            {/*<Text>wofja</Text>*/}
                        {/*</View>*/}

                        <Popular/>

                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'trending'}
                        selectedTitleStyle={{color: 'green'}}
                        title="趋势"
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('../../res/images/ic_trending.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'green'}]}
                                                         source={require('../../res/images/ic_trending.png')}/>}
                        onPress={() => this.setState({selectedTab: 'trending'})}>

                        <AsyncStorageTest/>

                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'favorite'}
                        selectedTitleStyle={{color: 'pink'}} //选中 文字 颜色
                        title="收藏"
                        renderIcon={() => <Image style={styles.image}
                                                 source={require('../../res/images/ic_favorite.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'pink'}]}
                                                         source={require('../../res/images/ic_favorite.png')}/>}
                        // badgeText="1"
                        onPress={() => this.setState({selectedTab: 'favorite'})}>
                        <View style={styles.page3}>
                            <Text>wofja</Text>
                        </View>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'my'}
                        selectedTitleStyle={{color: 'blue'}}
                        title="我的"
                        renderIcon={() => <Image style={styles.image} source={require('../../res/images/ic_my.png')}/>}
                        renderSelectedIcon={() => <Image style={[styles.image, {tintColor: 'blue'}]}
                                                         source={require('../../res/images/ic_my.png')}/>}
                        onPress={() => this.setState({selectedTab: 'my'})}>

                        <MyPage {...this.props}></MyPage>
                    </TabNavigator.Item>
                </TabNavigator>

                {/*<Navigator*/}
                {/*initialRoute={{*/}
                {/*component:Boy*/}
                {/*}*/}
                {/*}*/}
                {/*renderScene={(route, navigator)=>{*/}
                {/*let Component = route.component;*/}
                {/*return <Component navigator={navigator} {...route.params} />*/}
                {/*}}*/}

                {/*></Navigator>*/}

                {/*<ListViewTest/>*/}


            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF',
    },
    page1: {
        flex: 1,
        backgroundColor: 'red'
    },
    page2: {
        flex: 1,
        backgroundColor: 'yellow'
    },
    page3: {
        flex: 1,
        backgroundColor: 'pink'
    },
    page4: {
        flex: 1,
        backgroundColor: '#8010fa'
    },
    image: {
        width: 22,
        height: 22
    }



});