import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import { IButtonBase, IButtonFixed, IButtonLink } from '../Models';
import IconPlus from '@src/assetsui/Icons/iconPlus.svg';
import { Texts } from '../../../../atoms';
import { styles } from './styles';

const Base: React.FC<IButtonBase> = ({
  label, onPress,
  isLoading = false, isDisabled = false,
  isOutline = false, style, theme
}) => {
  const disabled = isLoading || isDisabled;
  return (
    <TouchableOpacity
      style={[styles(theme).base, style, isOutline ? styles(theme).outline : {}]}
      onPress={onPress} disabled={disabled}>
      <Texts.Button theme={theme} isOutline={isOutline}
        isLoading={isLoading}>
        {label}
      </Texts.Button>
    </TouchableOpacity>
  );
}

const Fixed: React.FC<IButtonFixed> = ({
  onPress,
  theme,
  style
}) => {
  return (
    <TouchableOpacity style={[styles(theme).fixed, style]} onPress={onPress}>
      <IconPlus fill={theme.colors.textElements} />
    </TouchableOpacity>
  );
}

const Link: React.FC<IButtonLink> = ({
  label,
  style,
  styleLabel,
  styleContent,
  IconSVG,
  onPress,
  IconColor,
  theme,
}) => {
  const colorIcon = IconColor ?? theme.colors.textSecundary;
  return (
    <TouchableOpacity style={[styles(theme).link, styleContent]} onPress={onPress} >
      <View style={[styles(theme).content, IconSVG ? styles(theme).viewSVG : {},style]}>
        {label && <Texts.Link theme={theme} style={styleLabel}>{label}</Texts.Link>}
        {IconSVG && <IconSVG fill={colorIcon} />}
      </View>
    </TouchableOpacity>
  );
}


export const Buttons = { Base, Fixed, Link };
