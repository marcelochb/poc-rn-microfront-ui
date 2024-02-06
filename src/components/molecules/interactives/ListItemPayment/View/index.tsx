import React from 'react';
import { TouchableWithoutFeedback, View } from 'react-native';
import { IListItemPayment } from '../Models';
import IconArrowRight from '../../../../../assets/Icons/iconArrowRight.svg';
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
    <TouchableWithoutFeedback onPress={onPressed}>
      <View style={styles(theme).container}>
        <View style={styles(theme).viewData}>
          <Texts.Body theme={theme} style={styles(theme).recipient}>{recipient}</Texts.Body>
          <View style={styles(theme).viewBottom}>
            <Texts.Body theme={theme} style={styles(theme).dueDate}>{dueDate}</Texts.Body>
            <Texts.Body theme={theme}>{amount}</Texts.Body>
          </View>
        </View>
        <View style={styles(theme).viewButton}>
          <IconArrowRight fill={theme.colors.elements} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
