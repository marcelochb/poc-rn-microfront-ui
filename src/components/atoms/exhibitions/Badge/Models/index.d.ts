import { ModelOfTheme } from "@poc/theme";
import { Component } from "react";

export type ModelOfBadge = {
  value?: number;
  theme: ModelOfTheme;
}

export class Badge extends Component<ModelOfBadge> {}
