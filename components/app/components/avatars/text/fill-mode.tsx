import React from "react";

import Avatar from 'ra-avatar';
import DemoBlock from "@/components/app/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Fill Mode'>
        <Avatar text='R A' type='text' color='primary' fillMode='solid' />
        <Avatar text='R A' type='text' color='primary' fillMode='none' />
        <Avatar text='R A' type='text' color='primary' fillMode='ghost' />
      </DemoBlock>
    );
  }
}