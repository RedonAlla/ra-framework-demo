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
            <NumberTextBox material label='Border Radius' placeholder='none' radius='none'/>
            <NumberTextBox material label='Border Radius' placeholder='medium' radius='medium'/>
            <NumberTextBox material label='Border Radius' placeholder='full radius' radius='full'/>
          </View>
          
          <View style={styles.column}>
            <NumberTextBox material label='Border Radius' placeholder='small' radius='small'/>
            <NumberTextBox material label='Border Radius' placeholder='large' radius='large' />
            <NumberTextBox material label='Border Radius' placeholder='12' radius={12} />
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