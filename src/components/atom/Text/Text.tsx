import React from 'react'
import { StyleSheet, Text as TextNative } from 'react-native';

type TextProps = {
  text: string;
  color: string;
  type: 'largeHeading' | "mediumHeading" | "smallHeading" | 'largeText' | "mediumText" | "smallText"
}

export const Text = ({ text, color, type }: TextProps) => {
  return <TextNative style={[{color}, styles[type]]}>{text}</TextNative>;
}

const styles = StyleSheet.create({
  largeHeading: {
    fontSize: 32,
    fontWeight: 'bold'
  },
  mediumHeading: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  smallHeading: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  largeText: {
    fontSize: 18,
  },
  mediumText: {
    fontSize: 16,
  },
  smallText: {
    fontSize: 14,
  }
});
