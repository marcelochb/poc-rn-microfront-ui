import { ITheme } from "@poc/interfaces";
import {StyleSheet} from 'react-native'

export const styles = (theme: ITheme) => StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderBottomColor: theme.colors.textSecundary,
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
  viewRow: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  bank: {
    fontFamily: theme.fontFamily.italic
  },
  elementColor: {
    color: theme.colors.elements,
  }
})
