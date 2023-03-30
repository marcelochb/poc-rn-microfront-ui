import { ITheme } from "@poc/interfaces";
import { Component } from "react";

export type IBadge = {
  value?: number;
  theme: ITheme;
}

export class Badge extends Component<IBadge> {}
