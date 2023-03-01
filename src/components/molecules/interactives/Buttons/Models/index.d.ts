import { Component } from 'react';
import {
  GestureResponderEvent,
  StyleProp,
  ViewStyle,
  TextStyle,
} from 'react-native';
import { ITheme } from '@poc/interfaces';

export type IButtonBase = {
  theme: ITheme;
  label: string;
  testID?: string;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  isLoading?: boolean;
  isDisabled?: boolean;
  isOutline?: boolean;
  style?: StyleProp<ViewStyle>;
};

export type IButtonFixed = {
  theme: ITheme;
  IconSVG: React.FC<React.SVGProps<SVGSVGElement>>;
  style?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
};

export type IButtonLink = {
  theme: ITheme;
  label?: string;
  styleLabel?: StyleProp<TextStyle>;
  styleContent?: StyleProp<TextStyle>;
  IconSVG?: React.FC<React.SVGProps<SVGSVGElement>>;
  style?: StyleProp<ViewStyle>;
  onPress: ((event: GestureResponderEvent) => void) | undefined;
  IconColor?: string;
};

export class Base extends Component<IButtonBase> {}
export class Fixed extends Component<IButtonFixed> {}
export class Link extends Component<IButtonLink> {}
