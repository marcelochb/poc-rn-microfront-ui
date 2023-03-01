import { ITheme } from "@poc/theme"
import { Component } from "react"
import { GestureResponderEvent } from "react-native";

export type IActionSheetSquad = {
  theme: ITheme;
  onPress: (squad:string) => void;
}

export class ActionSheetSquad extends Component<IActionSheetSquad> {}
