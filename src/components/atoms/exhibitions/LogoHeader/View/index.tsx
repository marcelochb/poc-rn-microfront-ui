import React from 'react';
import { Image, StyleSheet } from 'react-native';
import { ITheme } from '@poc/interfaces';
import { ILogoHeader } from '../Models';


export const LogoHeader: React.FC<ILogoHeader> = ({theme,source}) => {
  return (
    <Image source={source} style={styles(theme).imageLogo} />
  );
}

const styles = (theme:ITheme) => StyleSheet.create({
  imageLogo: {
    width: 35,
    height: 35,
    resizeMode: 'stretch',
    borderRadius: 20,
    marginLeft: theme.metrics.base,
    marginBottom: theme.metrics.base
  },
})
