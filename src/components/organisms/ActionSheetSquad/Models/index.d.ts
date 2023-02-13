import { ModelOfTheme } from "@poc/theme"
import { Component } from "react"
import { GestureResponderEvent } from "react-native";

export type ModelOfActionSheetSquad = {
  theme: ModelOfTheme;
  onPress: (squad:string) => void;
}

export class ActionSheetSquad extends Component<ModelOfActionSheetSquad> {}
