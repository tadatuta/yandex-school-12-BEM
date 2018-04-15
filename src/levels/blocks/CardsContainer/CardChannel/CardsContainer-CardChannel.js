import React from 'react';
import { decl } from 'bem-react-core';

export default decl({
  block: 'CardsContainer',
  elem: 'CardChannel',
  content() {
    const { channelName } = this.props;
    return (
      <span>{channelName}</span>
    )
  }
});
