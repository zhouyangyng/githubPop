
import React,{Component, PropTypes} from 'react';
import {
    View,
    Image,
    Text,
    Platform,   //平台信息
    StatusBar,  //状态栏
    StyleSheet
} from 'react-native';

const NAVBAR_HEIGHT_ANDROID=50;
const NAVBAR_HEIGHT_IOS=44;
const STATUS_BAR_HEIGHT=20;
const StatusBarShape={
    backgroundColor: PropTypes.string,
    barStyle: PropTypes.oneOf(['default', 'light-content', 'dark-content']),
    hide: PropTypes.bool
}

export default class NavigationBar extends Component{
    //属性类型
    static propsTypes={
        style: View.propTypes.style,
        title: PropTypes.string,
        titleView: PropTypes.element,
        hide: PropTypes.bool,
        leftButton: PropTypes.element,
        rightButton: PropTypes.element,
        statusBar: PropTypes.shape(StatusBarShape)
    }

    static defaultProps={
        statusBar:{
        barStyle: 'light-content',
        hidden: false
        }
    }

    constructor(props){
        super(props),
        this.state={
            title: '',
            hide: false
        }

    }

    render(){

        let statusBar = <View style={[styles.statusStyle]}>
            <StatusBar {...this.props.statusBar}/>

        </View>
        let titleView=this.props.titleView? this.props.titleView: <Text style={styles.title}>{this.props.title}</Text>

        let content=<View style={[styles.navBar, this.props.style]}>
            {this.props.leftButton}
            <View style={styles.titleViewStyle}>
                {titleView}
            </View>
            {this.props.rightButton}
        </View>
        return(
            <View style={[styles.container, this.props.style]}>
                {statusBar}
                {content}
            </View>
        )
    }

}

const styles=StyleSheet.create({
    container:{
        backgroundColor: '#29aeab',
    },
    navBar:{
        justifyContent: 'space-between',
        alignItems: 'center',
        height: Platform.OS==='ios'? NAVBAR_HEIGHT_IOS : NAVBAR_HEIGHT_ANDROID,
        backgroundColor: '#29aeab',
        flexDirection: 'row'
    },
    titleViewStyle:{
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        left: 30,
        right: 30,
        top: 0,
        bottom: 0
    },
    title:{
        fontSize: 20,
        color: 'white'
    },
    statusStyle:{
        height: Platform.OS==='ios'? STATUS_BAR_HEIGHT : 0,
    }
})