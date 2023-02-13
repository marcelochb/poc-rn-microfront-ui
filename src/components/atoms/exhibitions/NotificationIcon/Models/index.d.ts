import { ModelOfTheme } from "@poc/theme";
import { Component } from "react";

export type ModelOfNotificationIcon = {
  theme: ModelOfTheme;
  type: 'Sucesso' | 'Atenção' | 'Erro';
}

export class NotificationIcon extends Component<ModelOfNotificationIcon> {}
