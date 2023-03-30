import { ITheme } from "@poc/interfaces";
import { Component } from "react";

export type IHeader = {
  theme: ITheme;
  nickName: String;
  playerType: String;
  sourceAvatar: string;
  onPressedAvatar: () => void;
}

export class Header extends Component<IHeader> {}
