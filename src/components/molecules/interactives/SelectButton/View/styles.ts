import { ITheme } from "@poc/interfaces";
import { StyleSheet } from "react-native";

export const styles = (theme: ITheme) => {
  const {metrics, colors} = theme;
  return StyleSheet.create({
    content: {
      marginVertical: metrics.small,
      backgroundColor: colors.elementsThird,
      borderRadius: metrics.radiusBase,
      padding: metrics.large,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderColor: colors.elementsThird,
      borderWidth: theme.metrics.borderWidthLarger
    },
    selected: {
      borderColor: colors.elements,
    },
  })
}
