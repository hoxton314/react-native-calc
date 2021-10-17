import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'

class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {
            color: this.props.color,
            v: this.props.v,
            fColor: this.props.fontC
        };
        console.log("Header")
    }

    render() {
        const styles = StyleSheet.create({
            text: {
                fontSize: 48,
                color: this.state.fColor
            },
            button: {
                backgroundColor: this.state.color,
                alignItems: "center",
                padding: 10,
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center'
            }
        });
        const onPress = () => { alert(this.state.color + '\n' + this.state.v) }
        return (
        <TouchableOpacity
            style={styles.button}
            onPress={onPress.bind(this)}
        >
            <View>

                <Text style={styles.text}>{this.state.v} </Text>

            </View>
        </TouchableOpacity>
        );
    }
}






export default Item