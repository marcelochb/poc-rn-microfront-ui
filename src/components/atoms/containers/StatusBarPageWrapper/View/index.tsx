import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { IStatusBarPageWrapper } from '../Models';
import { ITheme } from '../../../../../../../interfaces/src/themes';


export const StatusBarPageWrapper: React.FC<IStatusBarPageWrapper> = ({
  theme,
  isStatusBarLight = false,
}: IStatusBarPageWrapper) => {
  return (
    <SafeAreaView style={styles(theme, isStatusBarLight).container} />
  );
}

const styles = (theme: ITheme, isStatusBarLight: boolean) => {
  const { colors } = theme;
  return StyleSheet.create({
    container: {
      flex: 0,
      backgroundColor: isStatusBarLight ? colors.background : colors.elements
    }
  })
}
