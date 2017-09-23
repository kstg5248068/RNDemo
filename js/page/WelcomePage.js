/**
 * Create by  on 2017-09-23
 */
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import HomePage from './HomePage'

export default class WelcomePage extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.timer = setTimeout(() => {
            this.props.navigator.resetTo({
                    component: HomePage
                }
            )
        }, 2000)
    }

    componentWillUnmount() {
        this.timer && clearTimeout(this.timer)
    }

    render() {
        return <View style={styles.container}>
            <Text style={styles.tips}>Welcome to My RN.</Text>
        </View>
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#3bd0dc'
    },
    tips:{
        fontSize:20
    }
})