import { ITheme } from "@poc/theme";
import { Component } from "react";

export type IHeader = {
  theme: ITheme;
  nickName: String;
  playerType: String;
  sourceAvatar: string;
  onPressedAvatar: () => void;
}

export class Header extends Component<IHeader> {}
