import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class Calc extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    return (
      <View style={styles.container}>
        <Text style={styles.calculate}> {this.props.calc} </Text>
        <Text style={styles.wynik}> {this.props.wynik} </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  calculate: {
    fontSize: 60,
    color: 'white',
    flex:2,
    alignContent: 'flex-end',
    justifyContent: 'flex-end',
    textAlignVertical:'bottom'
  },
  wynik: {
    fontSize: 40,
    color: 'white',
    flex:1,
    textAlignVertical:'bottom'
  },
  container: {
    backgroundColor: '#e4b2ab',
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
    padding: 10,
    flex: 3,
  },
});