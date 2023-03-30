import { ITheme } from "@poc/interfaces";
import { Component } from "react";

export type IListItemPlayer = {
  avatarSource: string | undefined;
  nickname: string | undefined;
  name: string | undefined;
  navigateTo: (() => void) | undefined;
  theme: ITheme;
}

export class ListItemPlayer extends Component<IListItemPlayer> {}
