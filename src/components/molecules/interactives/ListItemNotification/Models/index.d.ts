import { ITheme } from "@poc/theme";
import { Component } from "react";

export type IListItemNotification = {
  theme: ITheme,
  onPressed: (() => void) | undefined,
  name: string | undefined;
  lastName: string | undefined;
  nickName: string | undefined;
  playerPosition: string | undefined;
  createdDistance: string | undefined;
}

export class ListItemNotification extends Component<IListItemNotification> {}
