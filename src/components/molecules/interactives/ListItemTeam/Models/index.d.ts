import { ITheme } from "@poc/interfaces";
import { Component } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type IListItemTeam = {
  theme: ITheme;
  avatarSource: string | undefined;
  name: string | undefined;
  labelEdit: string | undefined;
  isSelectable?: boolean;
  responsable: string | undefined;
  phone: string | undefined;
  selectOnPressed: (() => void) | undefined;
  editOnPressed: (() => void) | undefined;
  style?: StyleProp<ViewStyle>;
}

export class ListItemTeam extends Component<IListItemTeam> {}
