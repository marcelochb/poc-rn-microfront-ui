import { Component } from 'react';
import { ModelOfTheme } from '@poc/theme';

export type ModelOfStatusBarPage = {
  theme: ModelOfTheme;
  isStatusBarLight?: boolean;
};

export class StatusBarPage extends Component<ModelOfStatusBarPage> {}
