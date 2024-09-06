import React from "react";
import { View, StyleSheet } from "react-native";

import NumberTextBox from 'ra-inputs/dist/number-text-box';
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "@/components/app/constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Active Border Color'>
        <View style={styles.row}>
          <View style={styles.column}>
            <NumberTextBox activeBorderColor='crimson' placeholder='crimson' />
            <NumberTextBox activeBorderColor='rgb(237, 20, 61)' placeholder='rgb(237, 20, 61)' />
          </View>
          <View style={styles.column}>
            <NumberTextBox activeBorderColor='rgb(237, 20, 61)' placeholder='rgb(237, 20, 61)' />
            <NumberTextBox activeBorderColor='#ed143d' placeholder='#ed143d' />
          </View>
        </View>
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  row: {
    columnGap: GAP,
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'transparent'
  },
  column: {
    flex: 1,
    rowGap: GAP,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent'
  }
});