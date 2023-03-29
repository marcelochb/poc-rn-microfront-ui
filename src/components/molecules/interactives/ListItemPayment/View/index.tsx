import React from 'react';
import { View } from 'react-native';
import { IListItemPayment } from '../Models';
import IconArrowRight from '@src/assetsui/Icons/iconArrowRight.svg';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Texts } from '../../../../atoms';
import { styles } from './styles';


export const ListItemPayment: React.FC<IListItemPayment> = ({
  theme,
  onPressed,
  recipient,
  payer,
  dueDate,
  amount,
}) => {
  return (
    <TouchableWithoutFeedback style={styles(theme).container} onPress={onPressed}>
      <View style={styles(theme).viewData}>
        <Texts.Title theme={theme}>{recipient}</Texts.Title>
        <Texts.Body theme={theme} style={styles(theme).recipient}>{dueDate}</Texts.Body>
        <Texts.Body theme={theme}>{amount}</Texts.Body>
      </View>
      <View style={styles(theme).viewButton}>
        <IconArrowRight fill={theme.colors.text} />
      </View>
    </TouchableWithoutFeedback>
  );
}
