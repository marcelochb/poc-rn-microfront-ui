import { ITheme } from "@poc/interfaces";
import { Component } from "react";

export type IAwaitingApproval = {
  theme: ITheme;
  title: string;
  bodyText: string;
  onPressed: () => void;
  labelButton: string;
}


export class AwaitingApproval extends Component<IAwaitingApproval> {}
