import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';
import TextTruncate from 'react-text-truncate';

export default decl({
  block: 'CardsContainer',
  elem: 'CardDescription',
  content() {
    const { description } = this.props;
    return (
      <TextTruncate
        line={3}
        truncateText="…"
        text={description}
        
      />

    )
  }
});
