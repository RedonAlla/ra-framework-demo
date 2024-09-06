import React from "react";
import { View, StyleSheet } from "react-native";

import NumberTextBox from 'ra-inputs/dist/number-text-box';
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "@/components/app/constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Border Width'>
        <View style={styles.row}>
          <View style={styles.column}>
            <NumberTextBox material label='Border Width' placeholder='none (default)' borderWidth='none' />
            <NumberTextBox material label='Border Width' placeholder='hairline' borderWidth='hairline' />
            <NumberTextBox material label='Border Width' placeholder='thin' borderWidth='thin' />
          </View>
          <View style={styles.column}>
            <NumberTextBox material label='Border Width' placeholder='base' borderWidth='base' />
            <NumberTextBox material label='Border Width' placeholder='thick' borderWidth='thick' />
            <NumberTextBox material label='Border Width' placeholder='3' borderWidth={3}/>
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
    alignContent: 'center',
    justifyContent: 'space-evenly',
    backgroundColor: 'transparent'
  }
});