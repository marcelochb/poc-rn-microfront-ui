import { ITheme } from "@poc/interfaces";
import { Component } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type ICheckBox = {
  label?: string;
  isChecked: boolean;
  onClick?: () => void;
  style?: StyleProp<ViewStyle>;
  styleLabel?: StyleProp<TextStyle>;
  disable?: boolean;
  theme: ITheme;
}

export class CheckBox extends Component<ICheckBox> {}
