import React, { Component, PropsWithChildren } from 'react';
import { ITheme } from '@poc/interfaces';
import { StyleProp, TextStyle } from 'react-native';

export type ITextsBody = {
  theme: ITheme;
  style?: StyleProp<TextStyle>;
  small?: boolean;
  isTextElement?: boolean;
  children: React.ReactNode;
}

export type ITextsTitle = {
  theme: ITheme;
  style?: StyleProp<TextStyle>;
  small?: boolean;
  isTextElement?: boolean;
  children: React.ReactNode;
}

export type ITextsSubTitle = {
  theme: ITheme;
  style?: StyleProp<TextStyle>;
  children: React.ReactNode;
  isTextElement?: boolean;
}

export type ITextsError = {
  theme: ITheme;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
}

export type ITextsButton = {
  theme: ITheme;
  children: React.ReactNode;
  style?: StyleProp<TextStyle>;
  isLoading?: boolean;
  isOutline?: boolean;
}

export type ITextsLink = {
  children: React.ReactNode;
  theme: ITheme;
  style?: StyleProp<TextStyle>;
}


export class Body extends Component<ITextsBody> {}
export class Title extends Component<ITextsTitle> {}
export class SubTitle extends Component<ITextsSubTitle> {}
export class Error extends Component<ITextsError> {}
export class Button extends Component<ITextsButton> {}
export class Link extends Component<ITextsLink> {}
