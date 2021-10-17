

import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

import Calc from './components/Calc';
import Ciphers from './components/Ciphers';
import Operators from './components/Operators';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: '',
      output: ''
    }
  }
  handleCallback = (childData) => {
    switch (childData) {
      case 'C':
        this.setState({ data: '',output:'' })
        break;
      case '=':
        let val
        try {
          val = eval(this.state.data)
        } catch (error) {
          val = 'error'
        }
        if(val==''){val='error'}
        this.setState({ output: val })
        break;
      default:
        let data = this.state.data + childData
        this.setState({ data: data })
        break;
    }


    console.log('data from child: ' + childData)
    //console.log('state: '+this.state.data)
  }
  componentDidUpdate(prevState) {
    if (this.state.data !== prevState.data) {
      console.log(this.state.data)
    }
  }
  render() {


    return (
      <View style={styles.container}>
        <View style={styles.calc}>
          <Calc calc={this.state.data} wynik={this.state.output} />
        </View>
        <View style={styles.buttonscontainers}>
          <Ciphers rootCallback={this.handleCallback} />
          <Operators rootCallback={this.handleCallback} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column'
  },
  calc: {
    flex: 1,
    backgroundColor: 'red',
    flexDirection: 'column'
  },
  buttonscontainers: {
    flex: 2,
    backgroundColor: 'red',
    flexDirection: 'row'
  }
});