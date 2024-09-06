import React from "react";
import { StyleSheet } from "react-native";

import Tag from 'ra-tags';
import DemoBlock from "@/components/app/DemoBlock";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Background Color' contentStyle={styles.block}>
        <Tag text='crimson' backgroundColor='crimson'/>
        <Tag text='#ed143d' backgroundColor='#ed143d'/>
        <Tag text='rgb(237, 20, 61)' backgroundColor='rgb(237, 20, 61)'/>
        <Tag text='rgba(237, 20, 61, 0.5)' backgroundColor='rgba(237, 20, 61, 0.5)'/>
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  block: {
    rowGap: 10,
    columnGap: 6,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  }
});