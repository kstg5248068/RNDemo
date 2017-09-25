/**
 * Create by  on 2017-09-24
 */
import React, {Component} from 'react';
import {
    View
} from 'react-native';

import Test from './Test';
import {TabNavigator} from 'react-navigation';
import  RecentChatScreen from './RecentChatScreen';
import AllContactsScreen from './AllContactsScreen';

const MainScreenNavigator = TabNavigator({
    Recent: {screen: RecentChatScreen,
    navigationOptions:{
        tabBarLabel:'recent'
    }},
    All: {screen: AllContactsScreen}
},{
    tabBarPosition:'top',

});
export default class NavigatorWrappingScreen extends Component {
    // static navigationOptions={
    //     headerTitle:'导航栏的使用'
    // }
    render() {
        return <View style={{flex: 1}}>
            <MainScreenNavigator navigation={this.props.navigation}/>
        </View>
    }
}

NavigatorWrappingScreen.router = MainScreenNavigator.router;

