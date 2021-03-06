/**
 * Create by  on 2017-09-24
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    Button
} from 'react-native';



export default class HomeScreen extends Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return <View>
            <Text>Hello,Chat App!</Text>
            <Button
                onPress={() => navigate('Chat', {user: 'Lucy'})}
                title='Chat with Lucy'/>
        </View>
    }
}

