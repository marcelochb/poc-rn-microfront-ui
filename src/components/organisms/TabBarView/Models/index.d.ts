import { NavigationState, SceneRendererProps } from "react-native-tab-view";
import { Component, ReactNode } from "react";
import { ITheme } from "@poc/interfaces";

type ITabBarViewParameters = {
  navigationState: NavigationState<{ key: string; title: string }>;
};

export type ITabBar = SceneRendererProps & ITabBarViewParameters;

export type ITabBarView = {
  FirstTab:  React.ComponentType<{}>;
  firstTabTitle: string;
  FirstTabBadge?: number;
  SecondTab: React.ComponentType<{}>;
  secondTabTitle: string;
  SecondTabBadge?: number;
  theme: ITheme;
}

export class TabBarView extends Component<ITabBarView> {}
