import React from 'react';
import { View } from 'react-native';
import { IListItemPix } from '../Models';
import IconArrowRight from '@src/assetsui/Icons/iconArrowRight.svg';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Texts } from '../../../../atoms';
import { styles } from './styles';


export const ListItemPix: React.FC<IListItemPix> = ({
  theme,
  onPressed,
  name,
  bank,
  date,
  amount,
}) => {
  return (
    <TouchableWithoutFeedback style={styles(theme).container} onPress={onPressed}>
      <View style={styles(theme).viewData}>
        <View style={styles(theme).viewRow}>
          <Texts.Body theme={theme} style={styles(theme).elementColor}>{name}</Texts.Body>
          <Texts.Body theme={theme} style={styles(theme).bank}>{bank}</Texts.Body>
        </View>
        <View style={styles(theme).viewRow}>
          <Texts.Body theme={theme}>{date}</Texts.Body>
          <Texts.Body theme={theme} style={styles(theme).elementColor}>{amount}</Texts.Body>
        </View>
      </View>
      <View style={styles(theme).viewButton}>
        <IconArrowRight fill={theme.colors.elements} />
      </View>
    </TouchableWithoutFeedback>
  );
}
