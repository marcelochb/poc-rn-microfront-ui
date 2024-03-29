import { ITheme } from "@poc/interfaces";
import { StyleSheet } from "react-native";

export const styles = (theme: ITheme) => StyleSheet.create({
  header: { flexDirection: 'row', justifyContent: 'space-between' },
  title: { color: theme.colors.textElements, fontSize: theme.fontSize.extraLagest },
  type: { marginRight: theme.metrics.base },
  viewStatistic: {
    backgroundColor: theme.colors.textSecundary,
    borderRadius: theme.metrics.radiusBase,
    flexDirection: 'row',
    padding: theme.metrics.small,
  },
  viewItemStatistic: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  marginRight: { marginRight: theme.metrics.base }
})
