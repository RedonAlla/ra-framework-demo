import React from "react";

import TextBox from 'ra-inputs/dist/text-box';
import DemoBlock from "@/components/app/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Helper text'>
        <TextBox material label='Helper text' placeholder='input with helper text' helperText="Helper text" />
      </DemoBlock>
    );
  }
}