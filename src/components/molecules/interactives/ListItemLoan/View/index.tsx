import React from 'react';
import { View, TouchableWithoutFeedback } from 'react-native';
import { IListItemLoan } from '../Models';
import IconArrowRight from '../../../../../assets/Icons/iconArrowRight.svg';
// import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Texts } from '../../../../atoms';
import { styles } from './styles';


export const ListItemLoan: React.FC<IListItemLoan> = ({
  theme,
  onPressed,
  name,
  type,
  amount,
}) => {
  return (
    <TouchableWithoutFeedback onPress={onPressed}>
      <View style={styles(theme).container}>
        <View style={styles(theme).viewData}>
          <Texts.Title theme={theme} style={styles(theme).type}>{type}</Texts.Title>
          <Texts.Body theme={theme} style={styles(theme).name}>{name}</Texts.Body>
          <Texts.Body theme={theme}>{amount}</Texts.Body>
        </View>
        <View style={styles(theme).viewButton}>
          <IconArrowRight fill={theme.colors.elements} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
