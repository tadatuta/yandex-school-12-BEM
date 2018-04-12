import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';
import TextTruncate from 'react-text-truncate';

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
