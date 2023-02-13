import { ModelOfTheme } from "@poc/theme";
import { Component } from "react";

export type ModelOfHeader = {
  theme: ModelOfTheme;
  nickName: String;
  playerType: String;
  sourceAvatar: string;
  onPressedAvatar: () => void;
}

export class Header extends Component<ModelOfHeader> {}
