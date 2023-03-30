import { Component, ReactNode } from "react";
import { ITheme } from "@poc/interfaces";

export type  IPopupNotificationType = 'Sucesso' | 'Atenção' | 'Erro'

export type IPopupConfirmation = {
  theme: ITheme;
  loading: boolean;
  visible: boolean;
  handleButtonPositiveAnswer:  | ((() => void) & (() => void))
  | undefined;
  handleButtonNegativeAnswer:  | ((() => void) & (() => void))
  | undefined;
  lableButtonPositiveAnswer: string;
  question: string;
}

export type IPopupNotification = {
  theme: ITheme;
  visible: boolean;
  type: IPopupNotificationType;
  text: string;
  onHandler: () => void;
}

export type IPopupOption ={
  theme: ITheme;
  visible: boolean,
  onHandler: () => void;
  firstButton: ReactNode;
  secondButton: ReactNode;
  tertiaryButton?: ReactNode;
}

export class Confirmation extends Component<IPopupConfirmation> {}
export class Notification extends Component<IPopupNotification> {}
export class Options extends Component<IPopupOption> {}
