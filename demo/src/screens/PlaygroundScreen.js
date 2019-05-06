import React, {Component} from 'react';
import {StyleSheet, TouchableOpacity, Text as RNText, View as RNView} from 'react-native';
import {Colors, View, Text, Button} from 'react-native-ui-lib'; //eslint-disable-line
import _ from 'lodash';

let counter = 1;
let sum = 0;

export default class PlaygroundScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {}

  render() {
    return (
      <RNView flex bg-dark80 bg-red50 padding-20 style={styles.container} center>
        {/* <Text red20 marginL-120 uppercase>asdasd</Text> */}

        {this.state.show && <Tester />}

        <View bg-blue40 br20 padding-20 margin-20>
          <Text>SHALOM</Text>
        </View>

        <TouchableOpacity
          style={{position: 'absolute', top: 10, right: 10}}
          onPress={() => this.setState({show: !this.state.show})}
        >
          <RNText>PRESS ME</RNText>
        </TouchableOpacity>
      </RNView>
    );
  }
}

const styles = StyleSheet.create({
  container: {},
});

class Tester extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.time = Date.now();
  }

  componentDidMount() {
    counter++;
    sum += Date.now() - this.time;
    console.warn('time:', sum / counter);
  }

  render() {
    return _.times(500, index => {
      return <View bg-red50 br20 key={index} />;
    });
  }
}
