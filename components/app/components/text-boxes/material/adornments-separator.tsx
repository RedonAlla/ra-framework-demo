import React from "react";
import { View, StyleSheet } from "react-native";

import TextBox from 'ra-inputs/dist/text-box';
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "@/components/app/constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Adornments Separator'>
        <View style={styles.row}>
          <View style={styles.column}>
            <TextBox label='Prefix Separator' placeholder='Prefix Separator' prefix="avatar" prefixSeparator material />
          </View>
          <View style={styles.column}>
            <TextBox label='Suffix Separator' placeholder='Suffix Separator' suffix="avatar" suffixSeparator material />
          </View>
        </View>
      </DemoBlock>
    );
  }
}

const styles = StyleSheet.create({
  label: {
    color: 'crimson'
  },
  row: {
    columnGap: GAP,
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'transparent'
  },
  column: {
    flex: 1,
    rowGap: GAP,
    alignContent: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent'
  }
});