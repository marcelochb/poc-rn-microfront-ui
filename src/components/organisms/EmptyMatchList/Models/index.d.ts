import { ITheme } from "@poc/theme"
import { Component } from "react";

export type IEmptyMatchList = {
  theme: ITheme;
}

export class EmptyMatchList extends Component<IEmptyMatchList> {}
