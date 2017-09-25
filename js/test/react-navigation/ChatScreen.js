/**
 * Create by  on 2017-09-24
 */
import React, {Component} from 'react';
import {
    Text,
    Button
} from 'react-native';

export default class ChatScreen extends Component {

    // static navigationOptions = ({navigation}) => ({
    //     // title: 'Chat with'+navigation.state.params.user,
    //     //ES6中允许使用反引号 ` 来创建字符串，此种方法创建的字符串里面可以包含由美元符号加花括号包裹的变量${vraible}。
    //     title: `Chat with ${navigation.state.params.user}`
    // });
    // static navigationOptions ={
    //     headerRight:<Button title='info'/>
    // }
    static navigationOptions = ({navigation}) => {
        const {state, setParams} = navigation;
        const isInfo = state.params.mode === 'info';
        const {user} = state.params;
        return {
            title: isInfo ? `${user}'s Contact Info` : `Chat with ${state.params.user}`,
            headerRight: <Button title={isInfo ? 'Done' : `${user}'s Info`}
                onPress={() => {setParams({mode: isInfo ? 'none' : 'info'})}}
                />
    }
    }

    render() {
        //const params = this.props.navigation.state.params;
        const {params} = this.props.navigation.state;
        return <Text>Chat with {params.user}.</Text>
    }
}