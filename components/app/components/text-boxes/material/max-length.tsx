import React from "react";

import TextBox from 'ra-inputs/dist/text-box';
import DemoBlock from "@/components/app/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Max length'>
        <TextBox material label='Max length' placeholder='Max length' maxLength={15} />
      </DemoBlock>
    );
  }
}