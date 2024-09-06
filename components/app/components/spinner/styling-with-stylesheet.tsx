import React from "react";
import { StyleSheet } from "react-native";

import { Spinner } from "ra-icons";
import DemoBlock from "@/components/app/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Styling with StyleSheet'>
        <Spinner name='spinner' style={styles.icon1} />
        <Spinner name='spinner' style={styles.icon2} />
        <Spinner name='spinner' style={styles.icon3} />
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  icon1: {
    width: 64,
    height: 64,
    fontSize: 64,
  },
  icon2: {
    width: 64,
    height: 64,
    fontSize: 64,
    color: 'rgb(0, 146, 255)'
  },
  icon3: {
    fontSize: 32,
    color: 'crimson',
    backgroundColor: '#FFC436',
    textAlignVertical: 'center',
    width: 68,
    height: 68,
    padding: 15,
    textAlign: 'center',
    borderRadius: 34,
    borderWidth: 3,
    borderColor: 'black',
    overflow: 'hidden'
  }
});