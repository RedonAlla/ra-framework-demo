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
            <NumberTextBox placeholder='Step 1 (default)' />
            <NumberTextBox placeholder='Step 5' step={5} />
            <NumberTextBox placeholder='Step 10' step={10} />
          </View>
          <View style={styles.column}>
            <NumberTextBox placeholder='Step 50' step={50} />
            <NumberTextBox placeholder='Step 100' step={100} />
            <NumberTextBox placeholder='Step 1000' step={1000} />
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