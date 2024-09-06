import React from "react";
import { View, StyleSheet } from "react-native";

import Button from 'ra-buttons';

import DemoBlock from "@/components/app/DemoBlock";
import Alert from "@/components/app/Alert";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Types'>
        <View style={styles.row}>
          <View style={styles.column}>
            <View style={[styles.buttonView, styles.marginRight]}>
              <Button text='text' color='primary' type='text' />
            </View>
            <View style={[styles.buttonView, styles.marginRight]}>
              <Button text='ghost' color='primary' type='ghost' />
            </View>
          </View>
          <View style={styles.column}>
            <View style={[styles.buttonView, styles.marginLeft]}>
              <Button text='link' color='primary' type='link' />
            </View>
            <View style={[styles.buttonView, styles.marginLeft]}>
              <Button text='inverse' color='primary' type='inverse' />
            </View>
          </View>
        </View>
        <View style={[styles.row, {marginTop: 10, marginBottom: 15}]}>
          <View style={{flex: 1}}>
            <Button text='default' color='primary' />
          </View>
        </View>
        <Alert message="To have nice effect for ghost type using custom colors use hex color." type="warning"/>
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  buttonView: {
    marginVertical: 5,
    backgroundColor: 'transparent'
  },
  marginRight: {
    marginRight: 5,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent'
  },
  marginLeft: {
    marginLeft: 5
  },
  row: {
    flexDirection: "row",
    width: '100%',
    backgroundColor: 'transparent'
  },
  column: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    backgroundColor: 'transparent'
  }
});