import { ModelOfTheme } from "@poc/theme"
import { Component } from "react";

export type ModelOfEmptyMatchList = {
  theme: ModelOfTheme;
}

export class EmptyMatchList extends Component<ModelOfEmptyMatchList> {}
