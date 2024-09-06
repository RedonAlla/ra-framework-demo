import React from "react";

import NumberTextBox from 'ra-inputs/dist/number-text-box';
import DemoBlock from "@/components/app/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Max length'>
        <NumberTextBox material label='Max length' placeholder='Max length' maxLength={15} />
      </DemoBlock>
    );
  }
}