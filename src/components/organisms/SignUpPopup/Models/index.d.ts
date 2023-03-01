import { Component } from "react";
import { ITheme } from "@poc/theme";

export type ISignUpPopup = {
  visible: boolean;
  onDismiss: () => void;
  theme: ITheme;
  firstButtonLabel: string;
  firstButtonIcon?: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  firstButtonOnPress: ((() => void) & (() => void))
  secondButtonLabel: string;
  secondButtonIcon?: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  secondButtonOnPress: ((() => void) & (() => void))
  tertiaryButtonLabel: string;
  tertiaryButtonIcon?: React.FC<React.SVGProps<SVGSVGElement>> | undefined
  tertiaryButtonOnPress: ((() => void) & (() => void))
}

export class SignUpPopup extends Component<ISignUpPopup> {}
