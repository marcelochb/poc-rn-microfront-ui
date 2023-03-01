import { ITheme } from "@poc/theme";
import { Component } from "react";
import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native";

export type IAvatar = {
  style?: StyleProp<ViewStyle>;
  onPress?: () => void;
  source?: string;
  sourceImage?: ImageSourcePropType;
  small?: boolean;
  error?: boolean | string;
  disable?: boolean;
  theme: ITheme;
}


export class Avatar extends Component<IAvatar> {}
