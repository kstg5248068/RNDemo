/**
 * Create by  on 2017-09-24
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';

export  default class RecentChatScreen extends Component {
    render() {
        const {navigate} = this.props.navigation;
        return <View>
            <Text>List of recent chats</Text>
            <Button
                onPress={() => navigate('Chat', {user: 'Lucy'})}
                title='Chat with Lucy'/>
        </View>
    }
}
