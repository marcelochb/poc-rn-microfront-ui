import { ITheme } from '@poc/interfaces';
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Texts } from '../../Texts/View';
import { IBadge } from '../Models';

export const Badge: React.FC<IBadge> = ({ value, theme }) => {

  if (!value || value === 0) return null;

  return (
    <View style={styles(theme).container}>
      <Texts.SubTitle isTextElement theme={theme}>{value}</Texts.SubTitle>
    </View>
  );
}

const styles = (theme: ITheme) => StyleSheet.create({
  container: {
    width: 20,
    height: 20,
    position: 'absolute',
    backgroundColor: theme.colors.error,
    borderRadius: theme.metrics.radiusRounded,
    alignItems: 'center',
    justifyContent: 'center',
    right: -20,
    bottom: 10
  }
})
