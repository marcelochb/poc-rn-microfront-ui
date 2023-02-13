import { ModelOfTheme } from "@poc/theme";
import { Component } from "react";

export type ModelOfHeaderGroupedList = {
  themme: ModelOfTheme;
  yearMonth: string | undefined;
}

export class HeaderGroupedList extends Component<ModelOfHeaderGroupedList> {}
