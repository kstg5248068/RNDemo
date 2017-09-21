import React, {Component} from 'react';
import {
    Text,
    StyleSheet,
    View
} from 'react-native';


function setup() {
    class Root extends Component {
        render() {
            return <View style={styles.container}>
                <Text style={styles.text}>My RN Project</Text>
            </View>
        }
    }
return <Root/>;

}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },

    text: {
        fontSize: 20
    }

})

module.exports=setup;