import React from "react";

import NumberTextBox from 'ra-inputs/dist/number-text-box';
import DemoBlock from "@/components/app/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Helper text'>
        <NumberTextBox placeholder='input with helper text' helperText="Helper text" />
      </DemoBlock>
    );
  }
}