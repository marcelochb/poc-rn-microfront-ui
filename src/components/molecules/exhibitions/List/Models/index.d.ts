import { ITheme } from "@poc/interfaces";
import { Component } from "react";
import { ListRenderItem, StyleProp, ViewStyle } from "react-native";

export type IList<ItemT = any> = {
  horizontal?: boolean;
  data?: Array<ItemT>;
  item: ListRenderItem<ItemT> | null | undefined;
  style?: StyleProp<ViewStyle>;
  theme: ITheme
}

export class List<ItemT = any> extends Component<IList<ItemT>> {}
