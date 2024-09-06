import React from "react";
import { View, StyleSheet } from "react-native";

import NumberTextBox from 'ra-inputs/dist/number-text-box';
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "@/components/app/constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Steps'>
        <View style={styles.row}>
          <View style={styles.column}>
            <NumberTextBox placeholder='Step 1 (default)' label='Step 1 (default)' material />
            <NumberTextBox placeholder='Step 5' label='Step 5' step={5} material />
            <NumberTextBox placeholder='Step 10' label='Step 10' step={10} material />
          </View>
          <View style={styles.column}>
            <NumberTextBox placeholder='Step 50' label='Step 50' step={50} material />
            <NumberTextBox placeholder='Step 100' label='Step 100' step={100} material />
            <NumberTextBox placeholder='Step 1000' label='Step 1000' step={1000} material />
          </View>
        </View>
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  row: {
    width: '100%',
    columnGap: GAP,
    flexDirection: "row",
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