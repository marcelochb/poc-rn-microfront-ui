import { ITheme } from "@poc/interfaces";
import { StyleSheet } from "react-native";

export const styles = (theme: ITheme) => {
  const { colors, metrics } = theme;
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.backgroundModal,
      paddingVertical: 64,
      paddingHorizontal: 16,
      justifyContent: 'center',
      alignItems: 'center',
    },
    content: {
      backgroundColor: colors.background,
      width: '90%',
      padding: metrics.base,
      borderRadius: metrics.radiusBase
    },
    flexDirectionRow: {flexDirection: 'row'},
    viewTop: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: metrics.large
    },
    marginBottom: { marginBottom: metrics.large },
    notificationTitle: { paddingTop: metrics.base, color: colors.textSecundary },
    optionTitle: { textAlign: 'center', paddingTop: metrics.base },
    optionFirstButton: {
      padding: metrics.base,
      borderRadius: metrics.radiusBase
    },
    optionButton: {
      paddingHorizontal: metrics.base,
      paddingBottom: metrics.base,
      borderRadius: metrics.radiusBase
    },
  })
}
