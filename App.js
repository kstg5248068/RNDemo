/**
 * Create by  on 2017-09-24
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    AppRegistry,
    Button
} from 'react-native';
import {StackNavigator} from 'react-navigation';

class HomeScreen extends Component {
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

class ChatScreen extends Component {

    static navigationOptions = ({navigation}) => ({
       // title: 'Chat with'+navigation.state.params.user,
        //ES6中允许使用反引号 ` 来创建字符串，此种方法创建的字符串里面可以包含由美元符号加花括号包裹的变量${vraible}。
        title: `Chat with ${navigation.state.params.user}`
    });

    render() {
        //const params = this.props.navigation.state.params;
        const {params} = this.props.navigation.state;
        return <Text>Chat with {params.user}.</Text>
    }
}

export const RNDemo = StackNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen}
});
AppRegistry.registerComponent('RNDemo', () => RNDemo);