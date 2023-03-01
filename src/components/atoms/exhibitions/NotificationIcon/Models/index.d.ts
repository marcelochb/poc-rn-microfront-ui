import { ITheme } from "@poc/theme";
import { Component } from "react";

export type INotificationIcon = {
  theme: ITheme;
  type: 'Sucesso' | 'Atenção' | 'Erro';
}

export class NotificationIcon extends Component<INotificationIcon> {}
