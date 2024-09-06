import React from "react";
import { View, StyleSheet } from "react-native";

import NumberTextBox from 'ra-inputs/dist/number-text-box';
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "@/components/app/constants";
import Alert from "@/components/app/Alert";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Actions'>
        <View style={styles.row}>
          <View style={styles.column}>
            <NumberTextBox placeholder='With actions' />
          </View>
          <View style={styles.column}>
            <NumberTextBox placeholder='Without actions' actions={false} />
          </View>
        </View>
        <Alert message="As NumberTextBox you can use also the TextBox with property `keyboardType='numeric'`" type="warning"/>
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  row: {
    width: '100%',
    columnGap: GAP,
    marginBottom: GAP,
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