import React from 'react';
import {
  StyleSheet,
  Text,
  TextProps,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import {useLinkTo} from '@react-navigation/native';

export interface HyperlinkTextProps extends TextProps {
  link: string;
  containerStyle?: ViewStyle;
}

function DeeplinkText(props: HyperlinkTextProps) {
  const {link, style, containerStyle, ...rest} = props;
  const linkTo = useLinkTo();

  return (
    <TouchableOpacity
      style={[styles.container, containerStyle]}
      onPress={() => linkTo(link)}
    >
      <Text style={[styles.text, style]} {...rest} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {},
  text: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
});

export default DeeplinkText;
