import { ITheme } from "@poc/interfaces"
import { StyleSheet } from "react-native"

export const styles = (theme: ITheme) => {
  return StyleSheet.create({
    container: {
      borderColor: theme.colors.textElementsSecundary,
      borderRadius: theme.metrics.radiusBase,
      borderWidth: theme.metrics.borderWidthLarger,
      marginBottom: theme.metrics.large,
      padding: theme.metrics.large
    },
    content: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    team: {
      alignItems: 'center',
    },
    matchDetail: {
      backgroundColor: theme.colors.elementsThird,
      borderRadius: theme.metrics.radiusBase,
      paddingHorizontal: theme.metrics.base,
      justifyContent: 'space-evenly'
    },
    line: {
      borderColor: theme.colors.backgroundSecundary,
      borderWidth: theme.metrics.borderWidthBase,
    },
    capitalize: {textTransform: 'capitalize'},
    weekDay: {flexDirection: 'row'},
  })
}
