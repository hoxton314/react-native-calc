import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './Button';

export default class Ciphers extends Component {
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
          <Button number='1' buttonCallback = {this.handleCallback}/>
          <Button number='2' buttonCallback = {this.handleCallback}/>
          <Button number='3' buttonCallback = {this.handleCallback}/>
        </View>
        <View style={styles.row}>
          <Button number='4' buttonCallback = {this.handleCallback}/>
          <Button number='5' buttonCallback = {this.handleCallback}/>
          <Button number='6' buttonCallback = {this.handleCallback}/>
        </View>
        <View style={styles.row}>
          <Button number='7' buttonCallback = {this.handleCallback}/>
          <Button number='8' buttonCallback = {this.handleCallback}/>
          <Button number='9' buttonCallback = {this.handleCallback}/>
        </View>
        <View style={styles.row}>
          <Button number='.' buttonCallback = {this.handleCallback}/>
          <Button number='0' buttonCallback = {this.handleCallback}/>
          <Button number='=' buttonCallback = {this.handleCallback}/>
        </View>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container:{
    backgroundColor: "#6381a8", 
    flex: 3,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems:'center',
  },
});