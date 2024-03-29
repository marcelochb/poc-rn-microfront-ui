import React from 'react';
import { View, StyleSheet } from 'react-native';
import { IListItemNotification } from '../Models';
import IconFootball from '../../../../../assets/Icons/iconFootball.svg';
import IconArrowRight from '../../../../../assets/Icons/iconArrowRight.svg';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { Texts } from '../../../../atoms';
import { ITheme } from '@poc/interfaces';


export const ListItemNotification: React.FC<IListItemNotification> = ({
  theme,
  onPressed,
  name,
  lastName,
  nickName,
  playerPosition,
  createdDistance,
}) => {
  return (
    <TouchableWithoutFeedback style={styles(theme).container} onPress={onPressed}>
      <View style={styles(theme).viewIcon}>
        <IconFootball fill={theme.colors.text} />
      </View>
      <View style={styles(theme).viewData}>
        <View style={styles(theme).title}>
          <Texts.Title theme={theme}>{nickName}</Texts.Title>

        </View>
        <Texts.Body theme={theme} style={styles(theme).name}>{`${name} ${lastName}`}</Texts.Body>
        <Texts.Body theme={theme}>{playerPosition}</Texts.Body>
        <Texts.SubTitle theme={theme} style={styles(theme).distance}>{createdDistance}</Texts.SubTitle>

      </View>
      <View style={styles(theme).viewButton}>
        <IconArrowRight fill={theme.colors.text} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = (theme: ITheme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: theme.colors.textSecundary,
    borderBottomWidth: theme.metrics.borderWidthBase,
    marginBottom: theme.metrics.base,
    paddingBottom: theme.metrics.base
  },
  viewIcon: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  viewData: {
    flex: 4,
  },
  viewButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  name: {
    color: theme.colors.textSecundary,
    fontFamily: theme.fontFamily.italic,
  },
  distance: {
    color: theme.colors.textHighlight,
    marginTop: theme.metrics.base,
    fontFamily: theme.fontFamily.italic,
  },
  title: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  }
})
