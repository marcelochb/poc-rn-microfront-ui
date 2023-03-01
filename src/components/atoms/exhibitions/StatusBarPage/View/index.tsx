import React from 'react';
import { StatusBar } from 'react-native';
import { IStatusBarPage } from '../Models';

export const StatusBarPage: React.FC<IStatusBarPage> = ({
  theme,
  isStatusBarLight = false,
}) => {
  const { colors } = theme;
  return (
    <StatusBar
      backgroundColor={isStatusBarLight ? colors.background : colors.elements}
      barStyle={isStatusBarLight ? 'dark-content' : 'light-content'}
    />

  );
}
