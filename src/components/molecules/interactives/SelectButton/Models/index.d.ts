import { ITheme } from "@poc/theme"
import { Component } from "react";

export type ISelectButton = {
  theme: ITheme;
  onClick: () => void;
  label: String;
  checked: boolean;
}

export class SelectButton extends Component<ISelectButton> {}
