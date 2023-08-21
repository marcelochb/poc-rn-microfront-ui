import React from 'react';
import {View, StyleSheet, ActivityIndicator, SafeAreaView} from 'react-native';
import {IPageWapper} from '../Models';
import {ITheme} from '../../../../../../../interfaces/src/themes';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { StatusBarPageWrapper } from '../../../../atoms/containers/StatusBarPageWrapper/View';
import { StatusBarPage } from '../../../../atoms/exhibitions/StatusBarPage/View';
import { Texts } from '../../../../atoms/exhibitions/Texts/View';
import { Buttons } from '../../../interactives';

export const PageWrapper: React.FC<IPageWapper> = ({
  children,
  isStatusBarLight = false,
  isScrollForm = false,
  noHorizontalPadding = false,
  Header,
  isHeaderRadius = false,
  ButtonFixed,
  loading = false,
  theme,
  actionSheet,
  hideButtonFixed = false,
  error = false,
  errorText = 'Tivemos um problema de comunicação',
  errorCallBack
}) => {
  if (loading) {
    return (
      <>
        <StatusBarPageWrapper
          theme={theme}
          isStatusBarLight={isStatusBarLight}
        />
        <View style={[styles(theme).container, styles(theme).centerChilds]}>
          <StatusBarPage theme={theme} isStatusBarLight={isStatusBarLight} />
          <ActivityIndicator />
        </View>
      </>
    );
  }
  if (error) {
    return (
      <>
        <StatusBarPageWrapper
          theme={theme}
          isStatusBarLight={isStatusBarLight}
        />
        <View style={[styles(theme).container, styles(theme).centerChilds]}>
          <StatusBarPage theme={theme} isStatusBarLight={isStatusBarLight} />
          <Texts.Body theme={theme} style={styles(theme).error}>{errorText}</Texts.Body>
          {errorCallBack && <Buttons.Link
            theme={theme}
            label='Voltar'
            onPress={errorCallBack}
          /> }
        </View>
      </>
    );
  }
  if (isScrollForm) {
    return (
      <>
        <StatusBarPageWrapper
          theme={theme}
          isStatusBarLight={isStatusBarLight}
        />
        <View style={styles(theme).container}>
          <StatusBarPage theme={theme} isStatusBarLight={isStatusBarLight} />
          {Header && <View style={styles(theme).header}>{Header}</View>}
          <KeyboardAwareScrollView
            style={styles(theme).scrollView}
            contentContainerStyle={[
              styles(theme).container,
              styles(theme).paddingH,
            ]}
            keyboardShouldPersistTaps="handled">
            <>
              {children}
              {!hideButtonFixed && ButtonFixed}
            </>
          </KeyboardAwareScrollView>
        </View>
      </>
    );
  }

  return (
    <>
      <StatusBarPageWrapper theme={theme} isStatusBarLight={isStatusBarLight} />
      <SafeAreaView style={styles(theme).container}>
        <StatusBarPage theme={theme} isStatusBarLight={isStatusBarLight} />
        {Header && (
          <View
            style={[
              styles(theme).header,
              isHeaderRadius ? styles(theme).headerRadius : {},
            ]}>
            {Header}
          </View>
        )}
        <View
          style={[
            styles(theme).content,
            noHorizontalPadding ? {} : styles(theme).paddingH,
          ]}>
          <>
            {children}
            {!hideButtonFixed && ButtonFixed}
          </>
        </View>
      </SafeAreaView>
      {actionSheet && actionSheet}
    </>
  );
};

const styles = (theme: ITheme) => {
  const {colors, metrics} = theme;
  return StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
    },
    content: {
      flex: 1,
    },
    paddingH: {paddingHorizontal: metrics.base},
    header: {
      backgroundColor: colors.elements,
    },
    headerRadius: {
      borderBottomStartRadius: metrics.radiusLargest,
      borderBottomEndRadius: metrics.radiusLargest,
      padding: metrics.base,
    },
    scrollView: {backgroundColor: colors.background, flex: 1},
    centerChilds: {justifyContent: 'center', alignItems: 'center'},
    error: {textAlign: 'center'}
  });
};
