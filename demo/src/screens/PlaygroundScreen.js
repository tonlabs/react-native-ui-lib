import _ from 'lodash';
import React, {Component} from 'react';
import {StyleSheet, ScrollView} from 'react-native';
import {Colors, View, Text, Card, Constants} from 'react-native-ui-lib'; //eslint-disable-line

export default class PlaygroundScreen extends Component {
  state = {
    currentWeek: 15,
    weeks: _.times(5, index => -2 + index + 15)
    // weeks: _.times(5, index => 15)
  };

  page = 2;

  componentDidMount() {
    setTimeout(() => {
      this.carousel.scrollTo({x: Constants.screenWidth * this.page, animated: false});
    }, 0);

    // setTimeout(() => {
    //   this.carousel.scrollTo({x: Constants.screenWidth * 0, animated: false});
    // }, 1000);
  }

  onScroll = event => {
    const {weeks} = this.state;
    const offset = event.nativeEvent.contentOffset.x;
    const newPage = Math.round(offset / Constants.screenWidth);

    if (newPage !== this.page) {
      this.page = newPage;

      if (this.page === 4) {
        weeks[0] += 2;
        weeks[1] += 2;
        weeks[2] += 2;

        this.setState({weeks});
      } else if (this.page === 0) {
        weeks[2] -= 2;
        weeks[3] -= 2;
        weeks[4] -= 2;

        this.setState({weeks});
      }
    }
  };

  onMomentumScrollEnd = event => {
    const {weeks} = this.state;
    if (this.page === 4) {
      this.carousel.scrollTo({x: Constants.screenWidth * 2, animated: false});
      this.page = 2;

      setTimeout(() => {
        weeks[3] += 2;
        weeks[4] += 2;
        this.setState({weeks});
      }, 100);
    } else if (this.page === 0) {
      this.carousel.scrollTo({x: Constants.screenWidth * 2, animated: false});

      this.page = 2;

      setTimeout(() => {
        weeks[0] -= 2;
        weeks[1] -= 2;
        this.setState({weeks});
      }, 100);
    }
  };

  renderWeek(index) {
    const {weeks} = this.state;
    return (
      <View key={index} height={100} width={Constants.screenWidth} center padding-20 bg-blue50>
        <Text text30 style={{fontWeight: '700'}}>
          week {weeks[index]}
        </Text>
      </View>
    );
  }

  render() {
    return (
      <View bg-dark80 flex>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{borderWidth: 1, height: 100}}
          ref={r => (this.carousel = r)}
          horizontal
          pagingEnabled
          scrollEventThrottle={100}
          onScroll={this.onScroll}
          onMomentumScrollEnd={this.onMomentumScrollEnd}
        >
          {this.renderWeek(0)}
          {this.renderWeek(1)}
          {this.renderWeek(2)}
          {this.renderWeek(3)}
          {this.renderWeek(4)}
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {}
});
