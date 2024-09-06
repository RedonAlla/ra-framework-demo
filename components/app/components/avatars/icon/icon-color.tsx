import React from "react";

import Avatar from 'ra-avatar';
import DemoBlock from "@/components/app/DemoBlock";


export default class extends React.PureComponent<{}, {}> {
  public render() {
    return (
      <DemoBlock title='Icon Color'>
        <Avatar icon='avatar' type='icon' iconColor='crimson'/>
        <Avatar icon='avatar' type='icon' iconColor='#ed143d'/>
        <Avatar icon='avatar' type='icon' iconColor='rgb(237, 20, 61)'/>
        <Avatar icon='avatar' type='icon' iconColor='rgba(237, 20, 61, 0.5)'/>
      </DemoBlock>
    );
  }
}