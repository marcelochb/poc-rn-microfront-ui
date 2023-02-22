import { ModelOfTheme } from "@poc/theme";
import { Component } from "react";

export type ModelOfListItemLoan = {
  theme: ModelOfTheme,
  onPressed: (() => void),
  name: string;
  type: string;
  amount: number;
}

export class ListItemLoan extends Component<ModelOfListItemLoan> {}
