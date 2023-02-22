import { ModelOfTheme } from "@poc/theme";
import { Component } from "react";

export type ModelOfListItemLoan = {
  theme: ModelOfTheme,
  onPressed: (() => void) | undefined,
  name: string | undefined;
  type: string | undefined;
  amount: number | undefined;
}

export class ListItemLoan extends Component<ModelOfListItemLoan> {}
