import { ITheme } from "@poc/theme";
import { Component } from "react";

export type IHeaderGroupedList = {
  themme: ITheme;
  yearMonth: string | undefined;
}

export class HeaderGroupedList extends Component<IHeaderGroupedList> {}
