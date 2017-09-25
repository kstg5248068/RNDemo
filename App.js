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
import {StackNavigator,TabNavigator} from 'react-navigation';
class RecentChatScreen extends Component{
    render(){
        const {navigate} = this.props.navigation;
        return <View>
        <Text>List of recent chats</Text>
        <Button
        onPress={() => navigate('Chat', {user: 'Lucy'})}
        title='Chat with Lucy'/>
            </View>
    }
}
class AllContactsScreen extends Component{
    render(){
        const {navigate} = this.props.navigation;
        return <View>
        <Text>List of all contacts</Text>
        <Button
        onPress={() => navigate('Chat', {user: 'Lucy'})}
        title='Chat with Lucy'/>
            </View>
    }
}
const MainScreenNavigator=TabNavigator({
    Recent:{screen:RecentChatScreen},
    All:{screen:AllContactsScreen}
})
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
const RNDemo = StackNavigator({
    Home: {screen: MainScreenNavigator,
    navigationOptions:{
        title:'My Chats'
    }},
    Chat: {screen: ChatScreen}
});
AppRegistry.registerComponent('RNDemo', () => RNDemo);