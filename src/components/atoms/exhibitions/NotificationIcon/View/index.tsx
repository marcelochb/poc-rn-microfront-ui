import React from 'react';
import { View, StyleSheet } from 'react-native';
import { INotificationIcon } from '../Models';

import IconCheckCicle from '../../../../../assets/Icons/iconCheckCircle.svg';
import IconWarning from '../../../../../assets/Icons/iconWarning.svg';
import IconDangerous from '../../../../../assets/Icons/iconDangerous.svg';
import { ITheme } from '@poc/interfaces';

export const NotificationIcon: React.FC<INotificationIcon> = ({ type, theme }) => {
  if (type === 'Sucesso') return (
    <View style={[styles(theme).container, styles(theme).succes]}>
      <IconCheckCicle fill={theme.colors.success} />
    </View>
  );
  else if (type === 'Atenção') return (
    <View style={[styles(theme).container, styles(theme).warn]}>
      <IconWarning fill={theme.colors.warn} />
    </View>
  );
  else if (type === 'Erro') return (
    <View style={[styles(theme).container, styles(theme).error]}>
      <IconDangerous fill={theme.colors.error} />
    </View>
  );
  else return null
}

const styles = (theme: ITheme) => {
  const { colors, metrics } = theme;
  return StyleSheet.create({
    container: {
      borderLeftWidth: 4,
      padding: metrics.base,
      justifyContent: 'center'
    },
    error: { borderLeftColor: colors.error, },
    warn: { borderLeftColor: colors.warn, },
    succes: { borderLeftColor: colors.success, },

  })
}
