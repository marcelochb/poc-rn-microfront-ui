import { ITheme } from "../../../../../../../interfaces/src/themes";
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
  type: {color: theme.colors.elements},
  name: {
    color: theme.colors.textSecundary,
    fontFamily: theme.fontFamily.italic,
  }
})
