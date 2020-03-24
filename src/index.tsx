import React from "react";
import { View, ViewProps } from "react-native";

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
  <View style={[{ height, width, backgroundColor }, style]} {...otherProps} />
);

export default BlankSpacer;
