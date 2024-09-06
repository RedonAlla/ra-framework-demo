import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';

import { HEADER_HEIGHT, PADDING, TAB_NAV_HEIGHT } from '@/constants/sizes';
import { WEB_MAX_SCREEN_WIDTH } from '@/components/app/constants';
import {
  DemoNumberTextBoxColors,
  DemoNumberTextBoxBorderColor,
  DemoNumberTextBoxBorderActiveColor,
  DemoNumberTextBoxBorderWidth,
  DemoNumberTextBoxBorderRadius,
  DemoTextBackgroundColor,
  DemoTextActiveBackgroundColor,
  DemoNumberTextBoxType,
  DemoNumberTextBoxSize,
  DemoNumberTextBoxReadOnly,
  DemoNumberTextBoxDisabled,
  DemoNumberTextBoxLabel,
  DemoNumberTextBoxLabelStyle,
  DemoNumberTextBoxHelperText,
  DemoNumberTextBoxMaxLength,
  DemoNumberTextBoxPrefix,
  DemoNumberTextBoxPrefixStyle,
  DemoNumberTextBoxSuffix,
  DemoNumberTextBoxSuffixStyle,
  DemoNumberTextBoxAdornmentsSeparator,
  DemoNumberTextBoxActions,
  DemoNumberTextBoxSteps
} from '@/components/app/components/number-text-boxes/material';


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <ScrollView contentContainerStyle={styles.content}>
        <DemoNumberTextBoxActions />
        <DemoNumberTextBoxSteps />
        <DemoNumberTextBoxColors />
        <DemoNumberTextBoxBorderColor />
        <DemoNumberTextBoxBorderActiveColor />
        <DemoNumberTextBoxBorderWidth />
        <DemoNumberTextBoxBorderRadius />
        <DemoTextBackgroundColor />
        <DemoTextActiveBackgroundColor />
        <DemoNumberTextBoxType />
        <DemoNumberTextBoxSize />
        <DemoNumberTextBoxReadOnly />
        <DemoNumberTextBoxDisabled />
        <DemoNumberTextBoxLabel />
        <DemoNumberTextBoxLabelStyle />
        <DemoNumberTextBoxHelperText />
        <DemoNumberTextBoxMaxLength />
        <DemoNumberTextBoxPrefix />
        <DemoNumberTextBoxPrefixStyle />
        <DemoNumberTextBoxSuffix />
        <DemoNumberTextBoxSuffixStyle />
        <DemoNumberTextBoxAdornmentsSeparator />
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  content: {
    width: '100%',
    marginHorizontal: "auto",
    paddingTop: HEADER_HEIGHT,
    paddingBottom: TAB_NAV_HEIGHT,
    paddingHorizontal: PADDING,
    backgroundColor: 'transparent',
    maxWidth: WEB_MAX_SCREEN_WIDTH,
  },
});