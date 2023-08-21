import {Component} from 'react';
import {ReactNode} from 'react';
import {ITheme} from '@poc/interfaces';

export type IPageWapper = {
  isStatusBarLight?: boolean;
  isScrollForm?: boolean;
  Header?: ReactNode;
  isHeaderRadius?: boolean;
  ButtonFixed?: ReactNode;
  loading?: boolean;
  error?: boolean;
  errorText?: string;
  errorCallBack?: () => void;
  noHorizontalPadding?: boolean;
  theme: ITheme;
  children: ReactNode;
  actionSheet?: ReactNode;
  hideButtonFixed?: boolean;
};

export class PageWrapper extends Component<IPageWapper> {}
