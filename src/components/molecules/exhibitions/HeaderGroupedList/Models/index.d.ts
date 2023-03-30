import { ITheme } from "@poc/interfaces";
import { Component } from "react";

export type IHeaderGroupedList = {
  themme: ITheme;
  yearMonth: string | undefined;
}

export class HeaderGroupedList extends Component<IHeaderGroupedList> {}
