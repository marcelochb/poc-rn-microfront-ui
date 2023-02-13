import { Component } from 'react';
import { ModelOfTheme } from '@poc/theme';

export type ModelOfStatusBarPageWrapper = {
  theme: ModelOfTheme;
  isStatusBarLight?: boolean;
};

export class StatusBarPageWrapper extends Component<ModelOfStatusBarPageWrapper> {}
