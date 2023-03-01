import { ITheme } from "@poc/theme";
import { Component } from "react";
import { ImageSourcePropType } from "react-native";

export type ILogoHeader = {
  theme: ITheme;
  source: ImageSourcePropType;
}

export class LogoHeader extends Component<ILogoHeader> {}
