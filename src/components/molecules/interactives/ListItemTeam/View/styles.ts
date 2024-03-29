import { ITheme } from "@poc/interfaces";
import { StyleSheet } from "react-native";

export const styles = (theme: ITheme) => StyleSheet.create({
  container: {
    backgroundColor: theme.colors.background,
    paddingVertical: theme.metrics.base,
    flexDirection: 'row',
    borderBottomColor: theme.colors.elementsSecundary,
    borderBottomWidth: theme.metrics.borderWidthSmall
  },
  viewLeft: {
    flex: 1,
    borderRightColor: theme.colors.elementsSecundary,
    borderRightWidth: theme.metrics.borderWidthSmall
  },
  viewButtonEdit: {
    padding: theme.metrics.base,
    flex: 1
  },
  buttonEditContent: {flex: 1},
  labelEdit: {
    color: theme.colors.textSecundary,
    textAlign: 'left',
    flex: 1
  },
  viewCenter: {
    flexDirection: 'row',
    paddingLeft: theme.metrics.base,
    flex: 4
  },
  viewCenterLeft: {
    padding: theme.metrics.base,
  },
  viewCenterRight: { justifyContent: 'center', marginLeft: theme.metrics.base },
  name: {
    color: theme.colors.textSecundary,
    fontFamily: theme.fontFamily.italic,
  },
  viewRight: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  viewSelect: {flexDirection: 'row'},
  viewSelectContent: {flex:4}
})
