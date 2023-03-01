import React, { PropsWithChildren } from 'react';
import { Text, ActivityIndicator } from 'react-native';
import { ITextsTitle, ITextsBody, ITextsSubTitle, ITextsError, ITextsButton, ITextsLink } from '../Models';
import { styles } from './styles';


const Body: React.FC<ITextsBody> = ({ theme, isTextElement = false, style, children }) => {
  return (
    <Text style={[styles(theme, isTextElement).base, styles(theme).body, style]}>
      {children}
    </Text>
  )
}

const Title: React.FC<PropsWithChildren<ITextsTitle>> = ({
  children,
  style,
  small = false,
  isTextElement = false,
  theme,
}) => {
  return (
    <Text style={[styles(theme, isTextElement).base, small
      ? styles(theme).titleSmall : styles(theme).title,
      style]}>
      {children}
    </Text>);
}

const SubTitle: React.FC<ITextsSubTitle> = ({ theme, isTextElement = false, style, children }) => {
  return (
    <Text style={[styles(theme, isTextElement).base, styles(theme).subTitle, style]}>
      {children}
    </Text>
  )
}

const Error: React.FC<ITextsError> = ({ theme, style, children }) => {
  return (
    <Text style={[styles(theme).base, styles(theme).error, style]}>{children}</Text>
  );
}

const Button: React.FC<ITextsButton> = ({ isLoading, children, isOutline, theme, style }) => {
  return (
    isLoading
      ? (

        <ActivityIndicator color={theme.colors.textElements} />
      )
      : (
        <Text style={[
          styles(theme).base,
          styles(theme).button,
          !isOutline
            ? styles(theme).textElement
            : {},
          style]}>{children}</Text>

      )
  );
}

const Link: React.FC<ITextsLink> = ({ theme, style, children }) => {
  return (
    <Text style={[
      styles(theme).base,
      styles(theme).link,
      style
    ]}>{children}</Text>
  );
}



export const Texts = { Body, Title, Error, Button, Link, SubTitle };
