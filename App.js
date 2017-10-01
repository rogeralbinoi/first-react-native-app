import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default class App extends React.Component {
  state = {
    count: 0
  }
  onPressMoreOne = () => {
    this.setState((state) => {
      const count = state.count + 1
      return { count }
    })
  }
  onPressLessOne = () => {
    this.setState((state) => {
      const count = state.count - 1
      return { count }
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>My First React App</Text>
        <Text style={styles.text}>{this.state.count}</Text>
        <View style={styles.buttons}>
          <Button title="(-) Menos um" color="#8E24AA" onPress={this.onPressLessOne}></Button>
          <Button title="(+) Mais um" color="#4A148C" onPress={this.onPressMoreOne}></Button>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E91E63',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    color: '#fff'
  },
  buttons: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  }
});
