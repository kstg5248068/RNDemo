/**
 * Create by  on 2017-09-24
 */
import React, {Component} from 'react';
import {
    AppRegistry
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import NavigatorWrappingScreen from './NavigatorWrappingScreen'
import ChatScreen from './ChatScreen'


const RNDemo = StackNavigator({
    Home: {screen: NavigatorWrappingScreen},
    Chat: {screen: ChatScreen}
});




AppRegistry.registerComponent('RNDemo', () => RNDemo);