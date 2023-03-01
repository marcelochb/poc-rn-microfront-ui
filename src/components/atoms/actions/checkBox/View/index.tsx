import React from 'react';
import { StyleSheet, View } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { ICheckBox } from '../Models';
import IconCheckBox from '@src/assetsui/Icons/iconCheckBox.svg';
import IconCheckBoxOutlineBlank from '@src/assetsui/Icons/iconCheckBoxOutlineBlank.svg';
import IconRadioButtonChecked from '@src/assetsui/Icons/iconRadioButtonChecked.svg';
import IconRadioButtonUnchecked from '@src/assetsui/Icons/iconRadioButtonUnchecked.svg';
import { ITheme } from '@poc/interfaces';
import { Texts } from '../../../exhibitions';

export const CheckBox: React.FC<ICheckBox> = (
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
    <WrapperView style={[styles(theme).container, style]} onPress={onClick} disabled={disable}>
      {isChecked
        ? (<IconCheckBox fill={'#000'} />)
        : (<IconCheckBoxOutlineBlank fill={'#000'} />)
      }
      {label && <Texts.Body theme={theme} style={[styles(theme).label, styleLabel]}>{label}</Texts.Body>}
    </WrapperView>
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
