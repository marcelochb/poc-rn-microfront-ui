import { Component } from "react";
import { TextInputProps } from "react-native";
import { ITheme } from "@poc/interfaces";

export type IInput = TextInputProps & {
  theme: ITheme;
  label: string,
  IconSVG?: React.FC<React.SVGProps<SVGSVGElement>>,
  isSecurityTextEntry?: boolean,
  error?: string | boolean,
  startAnimate?: boolean,
}

export type IInputMoveLabel = {
  x: number,
  y: number
}

export type IInputController = {
  isSecurityTextEntry: boolean,
}

export type IInputStyleService = {
  error: string | boolean,
}

export class Input extends Component<IInput> {}
