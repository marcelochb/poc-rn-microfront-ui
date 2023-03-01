import { ITheme } from "@poc/theme";
import { Component } from "react";

export type IBadge = {
  value?: number;
  theme: ITheme;
}

export class Badge extends Component<IBadge> {}
