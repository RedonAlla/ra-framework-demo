import React from "react";
import { StyleSheet } from "react-native";

import Button from 'ra-buttons';
import BottomSheet from "ra-bottom-sheet";

import DemoBlock from "@/components/app/DemoBlock";

import MockContainer from "./mock-container";
import { OPEN_TIME_OUT } from "./constants";
import { GAP } from "../../constants";


type State = {
  height: number;
}

export default class extends React.PureComponent<{}, State> {
  private refBottomSheet: React.RefObject<BottomSheet>;

  constructor(props: {}) {
    super(props);

    this.state = {
      height: 260
    };

    this.refBottomSheet = React.createRef();
    this.close = this.close.bind(this);
    this.setHeight = this.setHeight.bind(this);
  }

  private setHeight(height: number) {
    this.setState({height})
    setTimeout(() => {
      this.refBottomSheet?.current?.open();
    }, OPEN_TIME_OUT);
  }

  private close() {
    this.refBottomSheet?.current?.close();
  };

  public render() {
    return (
      <>
        <DemoBlock title='Height' contentStyle={styles.container}>
          <Button style={styles.button} text='260 (default)' color='primary' onPress={() => this.setHeight(260)}/>
          <Button style={styles.button} text='350' color='primary' onPress={() => this.setHeight(350)}/>
          <Button style={styles.button} text='650' color='primary' onPress={() => this.setHeight(650)}/>
        </DemoBlock>
        <BottomSheet ref={this.refBottomSheet} closeOnDragDown={true} height={this.state.height!} >
          <MockContainer close={this.close} />
        </BottomSheet>
      </>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    columnGap: GAP,
    flexDirection: "row",
    backgroundColor: 'transparent'
  },
  button: {
    flex: 1
  },
});