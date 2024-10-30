import React from "react";
import { StyleSheet } from "react-native";

import Button from '@flexnative/buttons';
import Badge from '@flexnative/badges';

import { GAP } from "./constants";
import DemoBlock from "../../DemoBlock";

export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Color' contentStyle={styles.block}>
        <Badge text="10" color='primary'>
          <Button text="primary" />
        </Badge>
        <Badge text='10' color='secondary'>
          <Button text="secondary"/>
        </Badge>
        <Badge text='10' color='success'>
          <Button text="success"/>
        </Badge>
        <Badge text='10' color='info'>
          <Button text="info"/>
        </Badge>
        <Badge text='10' color='warning'>
          <Button text="warning"/>
        </Badge>
        <Badge text='10' color='error'>
          <Button text="error"/>
        </Badge>
        <Badge text='10' color='default'>
          <Button text="default"/>
        </Badge>
        <Badge text='10' color='dark'>
          <Button text="dark"/>
        </Badge>
        <Badge text='10' color='light'>
          <Button text="light"/>
        </Badge>
        <Badge text='10' color='crimson'>
          <Button text="crimson"/>
        </Badge>
        <Badge text='10' color='#ed143d'>
          <Button text="ed143d"/>
        </Badge>
        <Badge text='10' color='rgb(237, 20, 61)'>
          <Button text="rgb(237, 20, 61)"/>
        </Badge>
        <Badge text='10' color='rgba(237, 20, 61, 0.5)'>
          <Button text="rgba(237, 20, 61, 0.5)"/>
        </Badge>
      </DemoBlock>
    );
  }
}


const styles = StyleSheet.create({
  block: {
    rowGap: GAP,
    columnGap: GAP,
    flexWrap: 'wrap',
    flexDirection: 'row',
    backgroundColor: 'transparent',
  }
});