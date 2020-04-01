import React, { PureComponent } from 'react';
import { View as RNView, SafeAreaView, Animated } from 'react-native';
import { asBaseComponent, forwardRef } from '../../commons/new';
import Constants from '../../helpers/Constants';
/**
 * @description: An enhanced View component
 * @extends: View
 * @extendslink: https://facebook.github.io/react-native/docs/view.html
 * @modifiers: margins, paddings, alignments, background, borderRadius
 */
class View extends PureComponent {
    constructor(props) {
        super(props);
        this.Container = props.useSafeArea && Constants.isIOS ? SafeAreaView : RNView;
        if (props.animated) {
            this.Container = Animated.createAnimatedComponent(this.Container);
        }
    }
    // TODO: do we need this?
    setNativeProps(nativeProps) {
        //@ts-ignore
        this._root.setNativeProps(nativeProps); // eslint-disable-line
    }
    render() {
        // (!) extract left, top, bottom... props to avoid passing them on Android
        // eslint-disable-next-line
        const { modifiers, style, left, top, right, bottom, flex: propsFlex, forwardedRef, inaccessible, ...others } = this.props;
        const { backgroundColor, borderRadius, paddings, margins, alignments, flexStyle, positionStyle } = modifiers;
        const Element = this.Container;
        return (<Element accessibilityElementsHidden={inaccessible} importantForAccessibility={inaccessible ? 'no-hide-descendants' : undefined} {...others} style={[
            backgroundColor && { backgroundColor },
            borderRadius && { borderRadius },
            flexStyle,
            positionStyle,
            paddings,
            margins,
            alignments,
            style
        ]} ref={forwardedRef}>
        {this.props.children}
      </Element>);
    }
}
View.displayName = 'View';
export default asBaseComponent(forwardRef(View));
