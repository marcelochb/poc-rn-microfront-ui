import { ModelOfTheme } from "@poc/theme"
import { Component } from "react";

export type ModelOfSelectButton = {
  theme: ModelOfTheme;
  onClick: () => void;
  label: String;
  checked: boolean;
}

export class SelectButton extends Component<ModelOfSelectButton> {}
