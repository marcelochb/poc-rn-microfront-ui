import React from 'react';
import { StyleSheet, View, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { IRadioButton } from '../Models';
import IconRadioButtonChecked from '../../../../../assets/Icons/iconRadioButtonChecked.svg';
import IconRadioButtonUnchecked from '../../../../../assets/Icons/iconRadioButtonUnchecked.svg';
import { ITheme } from '@poc/interfaces';
import { Texts } from '../../../exhibitions';

export const RadioButton: React.FC<IRadioButton> = (
  {
    label,
    isChecked,
    onClick,
    style,
    styleLabel,
    theme,
    disable = false,
  }
) => {
  const WrapperView = onClick ? TouchableWithoutFeedback : View;
  return (
    <TouchableWithoutFeedback  onPress={onClick} disabled={disable}>
      <View style={[styles(theme).container, style]}>
      {isChecked
        ? (<IconRadioButtonChecked fill={theme.colors.elements} />)
        : (<IconRadioButtonUnchecked fill={theme.colors.elements} />)
      }
      {label && <Texts.Body theme={theme} style={[styles(theme).label, styleLabel]}>{label}</Texts.Body>}
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = (theme: ITheme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    marginLeft: theme.metrics.small,
  }
});
