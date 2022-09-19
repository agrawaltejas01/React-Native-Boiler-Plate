import {Box} from 'native-base';
import React from 'react';
import {Text, View} from 'react-native';
import {ICTAtomComponentProps} from 'src/types/components/atoms';

interface ICTView extends ICTAtomComponentProps {}

export default class CTView extends React.PureComponent<ICTView> {
  render() {
    const {
      children,
      padding,
      margin,
      paddingBottom,
      paddingTop,
      paddingLeft,
      paddingRight,
      marginBottom,
      marginTop,
      marginLeft,
      marginRight,
      flex,
      flexDirection,
      alignItems,
      justifyContent,
      backgroundColor,
      fontWeight,
      fontSize,
      color,
    } = this.props;

    const styles: ICTView = {};

    padding && (styles.padding = padding);
    margin && (styles.margin = margin);
    paddingBottom && (styles.paddingBottom = paddingBottom);
    paddingTop && (styles.paddingTop = paddingTop);
    paddingRight && (styles.paddingRight = paddingRight);
    paddingLeft && (styles.paddingLeft = paddingLeft);
    marginBottom && (styles.marginBottom = marginBottom);
    marginTop && (styles.marginTop = marginTop);
    marginLeft && (styles.marginLeft = marginLeft);
    marginRight && (styles.marginRight = marginRight);
    flex && (styles.flex = flex);
    flexDirection && (styles.flexDirection = flexDirection);
    alignItems && (styles.alignItems = alignItems);
    justifyContent && (styles.justifyContent = justifyContent);
    backgroundColor && (styles.backgroundColor = backgroundColor);
    fontWeight && (styles.fontWeight = fontWeight);
    fontSize && (styles.fontSize = fontSize);
    color && (styles.color = color);

    let finalStyles = {
      ...styles,
      ...this.props.style,
    };
    // delete this.props.style

    return <View style={[finalStyles]} {...this.props}></View>;
  }
}
