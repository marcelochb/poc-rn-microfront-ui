import { ITheme } from "@poc/theme";
import { Component } from "react";

export type IListItemLoan = {
  theme: ITheme,
  onPressed: (() => void),
  name: string;
  type: string;
  amount: string;
}

export class ListItemLoan extends Component<IListItemLoan> {}
