import { ITheme } from "@poc/theme";
import { Component } from "react";

export type IListItemPayment = {
  theme: ITheme,
  onPressed: (() => void),
  recipient: string;
  payer: string;
  dueDate: string;
  amount: string;
}

export class ListItemPayment extends Component<IListItemPayment> {}
