import React from 'react';
import { StyleSheet } from 'react-native';
import { ITheme } from '@poc/interfaces';
import { ISignUpPopup } from '../Models';
import { Buttons, Popups } from '../../../molecules';

export const SignUpPopup: React.FC<ISignUpPopup> = ({
  visible,
  onDismiss,
  theme,
  firstButtonLabel,
  firstButtonIcon,
  firstButtonOnPress,
  secondButtonLabel,
  secondButtonIcon,
  secondButtonOnPress,
  tertiaryButtonLabel,
  tertiaryButtonIcon,
  tertiaryButtonOnPress,
}) => {
  return (
    <Popups.Options theme={theme} visible={visible} onHandler={onDismiss}
      firstButton={
        <Buttons.Link theme={theme} label={firstButtonLabel} IconSVG={firstButtonIcon}
          style={styles(theme).buttonLink}
          styleLabel={styles(theme).label}
          onPress={() => {
            onDismiss();
            firstButtonOnPress();
          }}
        />
      }
      secondButton={
        <Buttons.Link theme={theme} label={secondButtonLabel} IconSVG={secondButtonIcon}
          style={styles(theme).buttonLink}
          styleLabel={styles(theme).label}
          onPress={() => {
            onDismiss();
            secondButtonOnPress();
          }}
        />
      }
      tertiaryButton={
        <Buttons.Link theme={theme} label={tertiaryButtonLabel} IconSVG={tertiaryButtonIcon}
          style={styles(theme).buttonLink}
          styleLabel={styles(theme).label}
          onPress={() => {
            onDismiss();
            tertiaryButtonOnPress();
          }}
        />
      }
    />
  );
}

const styles = (theme: ITheme) => {
  const { colors, metrics } = theme;
  return StyleSheet.create({
    buttonLink: {
      paddingHorizontal: metrics.large,
      alignItems: 'flex-start',
      backgroundColor: colors.backgroundSecundary,
      borderRadius: metrics.radiusBase
    },
    label: { color: colors.text }
  })
}
