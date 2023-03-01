import { ITheme } from "@poc/theme";
import { Component } from "react";
import { DefaultSectionT, SectionListData, SectionListRenderItem, StyleProp, ViewStyle } from "react-native";

export type IListGrouped<ItemT = any,SectionT = DefaultSectionT> = {
  horizontal?: boolean;
  data: Array<SectionListData<ItemT, SectionT>>;
  item: SectionListRenderItem<ItemT, SectionT> | undefined;
  header: ((info: { section: SectionListData<ItemT, SectionT> }) => React.ReactElement | null) | undefined;
  style?: StyleProp<ViewStyle>;
  theme: ITheme;
  emptyList: React.ComponentType<any> | React.ReactElement<any, string | React.JSXElementConstructor<any>> | null | undefined;
}

export class ListGrouped<ItemT = any,SectionT = DefaultSectionT> extends Component<IListGrouped<ItemT,SectionT>> {}
