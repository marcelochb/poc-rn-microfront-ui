import { ITheme } from "@poc/theme";
import { StyleSheet } from "react-native";

export const styles = (theme:ITheme) => {
  const {} = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      textAlign: 'center'
    },
    svg: {
      aspectRatio: 1,
      alignSelf: 'center',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    },
    text: {alignItems: 'center', flex: 1},
    title: {},
    subTitle: {}
  })
}
