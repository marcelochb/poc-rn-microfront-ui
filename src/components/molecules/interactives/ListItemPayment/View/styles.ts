import { ITheme } from "@poc/interfaces";
import {StyleSheet} from 'react-native'

export const styles = (theme: ITheme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: theme.colors.elements,
    borderBottomWidth: theme.metrics.borderWidthBase,
    marginBottom: theme.metrics.base,
    paddingBottom: theme.metrics.base
  },
  viewData: {
    flex: 4,
  },
  viewButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  viewBottom: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  recipient: {color: theme.colors.elements},
  dueDate: {
    color: theme.colors.textSecundary,
    fontFamily: theme.fontFamily.italic,
  }
})
