import React from "react";
import { View, StyleSheet } from "react-native";

import NumberTextBox from 'ra-inputs/dist/number-text-box';
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "@/components/app/constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Border Radius'>
        <View style={styles.row}>
          <View style={styles.column}>
            <NumberTextBox placeholder='none' radius='none'/>
            <NumberTextBox placeholder='medium' radius='medium'/>
            <NumberTextBox placeholder='full radius' radius='full'/>
          </View>
          
          <View style={styles.column}>
            <NumberTextBox placeholder='small' radius='small'/>
            <NumberTextBox placeholder='large' radius='large' />
            <NumberTextBox placeholder='12' radius={12} />
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