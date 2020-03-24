import React from "react";
import { View, ViewProps, StyleSheet } from "react-native";

export interface BlankSpacerProps extends ViewProps {
  height?: number;
  width?: number;
  color?: string;
}

const BlankSpacer = ({
  style,
  height,
  width,
  color: backgroundColor,
  ...otherProps
}: BlankSpacerProps) => (
  <View
    style={[styles.container, { height, width, backgroundColor }, style]}
    {...otherProps}
  />
);

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

export default BlankSpacer;
