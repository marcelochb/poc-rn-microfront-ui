import { ITheme } from "@poc/theme";
import { Component } from "react";
import { StyleProp, TextStyle, ViewStyle } from "react-native";

export type IRadioButton = {
  label?: string;
  isChecked: boolean;
  onClick?: () => void;
  style?: StyleProp<ViewStyle>;
  styleLabel?: StyleProp<TextStyle>;
  disable?: boolean;
  theme: ITheme;
}

export class RadioButton extends Component<IRadioButton> {}
