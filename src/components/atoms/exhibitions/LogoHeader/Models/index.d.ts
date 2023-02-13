import { ModelOfTheme } from "@poc/theme";
import { Component } from "react";
import { ImageSourcePropType } from "react-native";

export type ModelOfLogoHeader = {
  theme: ModelOfTheme;
  source: ImageSourcePropType;
}

export class LogoHeader extends Component<ModelOfLogoHeader> {}
