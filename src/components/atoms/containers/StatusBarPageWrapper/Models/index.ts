import { Component } from 'react';
import { ITheme } from '@poc/interfaces';

export type IStatusBarPageWrapper = {
  theme: ITheme;
  isStatusBarLight?: boolean;
};

export class StatusBarPageWrapper extends Component<IStatusBarPageWrapper> {}
