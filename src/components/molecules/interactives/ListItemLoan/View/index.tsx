import React from 'react';
import { View } from 'react-native';
import { ModelOfListItemLoan } from '../Models';
import IconArrowRight from '@src/assetsui/Icons/iconArrowRight.svg';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Texts } from '../../../../atoms';
import { styles } from './styles';


export const ListItemLoan: React.FC<ModelOfListItemLoan> = ({
  theme,
  onPressed,
  name,
  type,
  amount,
}) => {
  return (
    <TouchableWithoutFeedback style={styles(theme).container} onPress={onPressed}>
      <View style={styles(theme).viewData}>
        <Texts.Title theme={theme}>{type}</Texts.Title>
        <Texts.Body theme={theme} style={styles(theme).name}>{name}</Texts.Body>
        <Texts.Body theme={theme}>R$ {amount.toLocaleString("pt-BR")}</Texts.Body>
      </View>
      <View style={styles(theme).viewButton}>
        <IconArrowRight fill={theme.colors.text} />
      </View>
    </TouchableWithoutFeedback>
  );
}
