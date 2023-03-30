import { ITheme } from "@poc/interfaces";
import { Component } from "react";
import { ImageSourcePropType } from "react-native";

export type IListItemMatch = {
  theme: ITheme;
  teamCrest?: ImageSourcePropType | undefined;
  teamName:  string;
  monthDay: string;
  weekDay: string;
  matchHour: string;
  opponentTeamCrest: string;
  opponentTeamName: string;
  onPressed: (() => void) | undefined;
}

export class ListItemMatch extends Component<IListItemMatch> {}
