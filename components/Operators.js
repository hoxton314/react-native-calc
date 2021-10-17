import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

export default class Operators extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  handleCallback = (buttonData) => {
    this.props.rootCallback(buttonData)
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.row}>
          <Button number='C'  buttonCallback = {this.handleCallback}/>
        </View>
        <View style={styles.row}>
          <Button number='/'  buttonCallback = {this.handleCallback}/>
        </View>
        <View style={styles.row}>
          <Button number='*'  buttonCallback = {this.handleCallback}/>
        </View>
        <View style={styles.row}>
          <Button number='-'  buttonCallback = {this.handleCallback}/>
        </View>
        <View style={styles.row}>
          <Button number='+'  buttonCallback = {this.handleCallback}/>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: "#3d3d3d", 
    flex: 1,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
  },
});