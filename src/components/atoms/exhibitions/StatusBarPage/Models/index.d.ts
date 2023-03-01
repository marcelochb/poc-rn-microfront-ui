import { Component } from 'react';
import { ITheme } from '@poc/interfaces';

export type IStatusBarPage = {
  theme: ITheme;
  isStatusBarLight?: boolean;
};

export class StatusBarPage extends Component<IStatusBarPage> {}
