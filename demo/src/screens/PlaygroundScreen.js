import _ from 'lodash';
import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Colors, View, Text, Card, Incubator} from 'react-native-ui-lib'; //eslint-disable-line

export default class PlaygroundScreen extends Component {
  render() {
    return (
      <View center bg-dark80 flex>
        <Incubator.TouchableOpacity br100 bg-purple30 padding-20 feedbackColor={'red'} activeOpacity={1}>
          <Text>Button</Text>
        </Incubator.TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
