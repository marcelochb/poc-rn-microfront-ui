import { ITheme } from "@poc/theme"
import { StyleSheet } from "react-native"

export const styles = (theme: ITheme) => {
  return StyleSheet.create({
     yearMonth: {textTransform: 'capitalize', marginBottom: theme.metrics.base}
  })
}
