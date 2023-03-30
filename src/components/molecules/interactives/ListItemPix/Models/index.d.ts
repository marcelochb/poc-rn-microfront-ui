import { ITheme } from "@poc/interfaces";
import { Component } from "react";

export type IListItemPix = {
  theme: ITheme,
  onPressed: (() => void),
  name: string;
  bank: string;
  date: string;
  amount: string;
}

export class ListItemPix extends Component<IListItemPix> {}
