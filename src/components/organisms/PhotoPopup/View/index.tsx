import React from 'react';
import { StyleSheet } from 'react-native';
import iconCamera from '../../../../assets/Icons/iconCamera.svg';
import iconGalery from '../../../../assets/Icons/iconGalery.svg';
import { IPhotoPopup } from '../Models';
import { Popups, Buttons } from '../../../molecules';
import { ITheme } from '@poc/interfaces';

export const PhotoPopup: React.FC<IPhotoPopup> = ({
  visible,
  onDismiss,
  onSelectFromGalery,
  onTakePhoto,
  theme,
}) => {
  return (
    <Popups.Options theme={theme} visible={visible} onHandler={onDismiss}
      firstButton={
        <Buttons.Link theme={theme} label={'Selecionar foto'} IconSVG={iconCamera}
          style={styles(theme).buttonLink}
          styleLabel={styles(theme).label}
          onPress={onSelectFromGalery}
        />
      }
      secondButton={
        <Buttons.Link theme={theme} label={'Tirar foto'} IconSVG={iconGalery}
          style={styles(theme).buttonLink}
          styleLabel={styles(theme).label}
          onPress={onTakePhoto}
        />
      }
    />
  );
}

const styles = (theme: ITheme) => StyleSheet.create({
  buttonLink: {
    paddingHorizontal: theme.metrics.large,
    alignItems: 'flex-start',
    backgroundColor: theme.colors.backgroundSecundary
  },
  label: { color: theme.colors.text }
})
