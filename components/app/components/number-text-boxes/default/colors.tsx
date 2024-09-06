import React from "react";
import { View, StyleSheet } from "react-native";

import NumberTextBox from 'ra-inputs/dist/number-text-box';
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "@/components/app/constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Color'>
        <View style={styles.row}>
          <View style={styles.column}>
            <NumberTextBox placeholder='primary' color='primary'/>
            <NumberTextBox placeholder='dark' color='dark'/>
            <NumberTextBox placeholder='info' color='info'/>
            <NumberTextBox placeholder='warning' color='warning' />
            <NumberTextBox placeholder='default' color='default'/>
            <NumberTextBox placeholder='rgb(237, 20, 61)' color='rgb(237, 20, 61)'/>
          </View>

          <View style={styles.column}>
            <NumberTextBox placeholder='secondary' color='secondary'/>
            <NumberTextBox placeholder='light' color='light'/>
            <NumberTextBox placeholder='success' color='success'/>
            <NumberTextBox placeholder='error' color='error'/>
            <NumberTextBox placeholder='crimson' color='crimson'/>
            <NumberTextBox placeholder='#ed143d' color='#ed143d'/>
          </View>
        </View>
        
        <View style={styles.row}>
          <View style={{flex: 1, paddingTop: GAP}}>
            <NumberTextBox placeholder='rgba(237, 20, 61, 0.5)' color='rgba(237, 20, 61, 0.5)'/>
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