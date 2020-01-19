import PropTypes from 'prop-types';
import React, {PureComponent} from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import {asBaseComponent, forwardRef, Modifiers} from '../../commons';

/**
 * @description: A wrapper for Text component with extra functionality like modifiers support
 * @extends: Text
 * @extendslink: https://facebook.github.io/react-native/docs/text.html
 * @modifiers: margins, color, typography
 */
class Text extends PureComponent {
  static displayName = 'Text';
  static propTypes = {
    ...RNText.propTypes,
    // ...PureBaseComponent.propTypes,
    /**
     * color of the text
     */
    color: PropTypes.string,
    /**
     * whether to center the text (using textAlign)
     */
    center: PropTypes.bool,
    /**
     * whether to change the text to uppercase
     */
    uppercase: PropTypes.bool
  };

  // static defaultProps = {
  //   color: Colors.dark10,
  // }

  // generateStyles() {
  //   this.styles = createStyles(this.props);
  // }

  // setNativeProps(nativeProps) {
  //   this._root.setNativeProps(nativeProps); // eslint-disable-line
  // }

  render() {
    const color = this.props.color || Modifiers.extractColorValue(this.props);
    const typography = Modifiers.extractTypographyValue(this.props);
    const {style, center, uppercase, modifiers, forwardedRef, ...others} = this.props;
    const {margins} = modifiers;
    const textStyle = [
      styles.container,
      typography,
      color && {color},
      margins,
      center && styles.centered,
      uppercase && styles.uppercase,
      style
    ];

    return <RNText {...others} style={textStyle} ref={forwardedRef} /* _ref={this.setRef} *//>;
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    textAlign: 'left'
  },
  centered: {
    textAlign: 'center'
  },
  uppercase: {
    textTransform: 'uppercase'
  }
});

export default asBaseComponent(forwardRef(Text));
