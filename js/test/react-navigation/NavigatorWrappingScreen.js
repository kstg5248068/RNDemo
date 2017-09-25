/**
 * Create by  on 2017-09-24
 */
import React, {Component} from 'react';
import {
    View,
    Image
} from 'react-native';

import Test from './Test';
import {TabNavigator} from 'react-navigation';
import RecentChatScreen from './RecentChatScreen';
import AllContactsScreen from './AllContactsScreen';


const MainScreenNavigator = TabNavigator({
    Recent: {
        screen: RecentChatScreen,
        navigationOptions: {
            //title：标题，会同时设置导航条和标签栏的title，还是不推荐这种方式。
            //tabBarVisible：是否隐藏标签栏。默认不隐藏(true)
            tabBarVisible: true,
            tabBarLabel: '最近',
            //tabBarIcon：设置标签栏的图标。需要给每个都设置。
            //tabBarLabel：设置标签栏的title。推荐这个方式。

        }
    },
    All: {screen: AllContactsScreen,
        navigationOptions: {
            //title：标题，会同时设置导航条和标签栏的title，还是不推荐这种方式。
            //tabBarVisible：是否隐藏标签栏。默认不隐藏(true)
            tabBarVisible: true,
            //tabBarIcon：设置标签栏的图标。需要给每个都设置。
            //tabBarLabel：设置标签栏的title。推荐这个方式。
            tabBarLabel: '全部',
        }
    }
}, {
    tabBarPosition: 'top',

});
export default class NavigatorWrappingScreen extends Component {
    // static navigationOptions={
    //     headerTitle:'导航栏的使用'
    // }
    render() {
        return <View style={{flex: 1}}>
            <MainScreenNavigator  navigation={this.props.navigation}/>
        </View>
    }
}

NavigatorWrappingScreen.router = MainScreenNavigator.router;

