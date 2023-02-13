import { ModelOfTheme } from "@poc/theme";
import { Component } from "react";

export type ModelOfAwaitingApproval = {
  theme: ModelOfTheme;
  title: string;
  bodyText: string;
  onPressed: () => void;
  labelButton: string;
}


export class AwaitingApproval extends Component<ModelOfAwaitingApproval> {}
