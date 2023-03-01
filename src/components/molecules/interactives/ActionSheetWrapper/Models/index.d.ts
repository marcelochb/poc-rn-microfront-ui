import { ITheme } from "@poc/theme";
import React, { Component } from "react";

export interface IActionSheetWrapper {
  theme: ITheme;
  children: React.ReactNode;
}

export class ActionSheetWrapper extends Component<IActionSheetWrapper> {}
