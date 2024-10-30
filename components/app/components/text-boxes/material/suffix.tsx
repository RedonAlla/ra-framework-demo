import React from "react";
import { View, StyleSheet, Alert, Platform } from "react-native";

import Icon from '@flexnative/icons';
import { TextBox } from '@flexnative/inputs';
import DemoBlock from "@/components/app/DemoBlock";
import { GAP } from "@/components/app/constants";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Suffix'>
        <View style={styles.row}>
          <View style={styles.column}>
            <TextBox material label='Suffix' placeholder='Input with icon suffix' suffix="star" />
          </View>
          <View style={styles.column}>
            <TextBox material label='Suffix' placeholder='Input with custom element as suffix' suffix={<Suffix />} />
          </View>
        </View>
      </DemoBlock>
    );
  }
}

function Suffix() {
  const openAlert = () =>
    Platform.OS === 'web'
      ? alert('Custom Element as suffix')
      : Alert.alert('Alert Title', 'Custom Element as suffix', [
          {text: 'OK'},
        ]);
    
  return <Icon name="avatar" size={36} onPress={openAlert} />;
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