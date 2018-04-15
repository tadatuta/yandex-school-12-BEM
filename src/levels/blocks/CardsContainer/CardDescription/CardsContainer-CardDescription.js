import React from 'react';
import { decl } from 'bem-react-core';
import TextTruncate from 'react-text-truncate';

export default decl({
  block: 'CardsContainer',
  elem: 'CardDescription',
  content() {
    const { description, linesAmount } = this.props;
    return (
      <TextTruncate
        line={linesAmount}
        truncateText="…"
        text={description}
      />
    )
  }
});
