/**
 * Create by  on 2017-09-23
 */
import React, {Component} from 'react';
import {
    View,
    Text,
    StyleSheet
} from 'react-native';
export default class HomePage extends Component{
    render(){
        return <View style={styles.container}>
            <Text  style={styles.tips}>HomePage</Text>
        </View>
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    tips:{
        fontSize:18
    }
})