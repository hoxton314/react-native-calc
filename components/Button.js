import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cipher: this.props.number
        };
    }

    render() {
        function onPress(e) {
            //console.log(this.state.cipher)
            this.props.buttonCallback(this.state.cipher);
            e.preventDefault()
        }

        return (
            <TouchableOpacity style={styles.touchable} onPress={onPress.bind(this)}>
                <View>
                    <Text style={styles.button}> {this.state.cipher} </Text>
                </View>
            </TouchableOpacity>
        );
    }
}


const styles = StyleSheet.create({
    button: {
        fontSize: 50,
        color: '#f3efe8',
    },
    touchable: {
        padding: 20
    }
});