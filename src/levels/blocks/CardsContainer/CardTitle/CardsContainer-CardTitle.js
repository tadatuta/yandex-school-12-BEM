import React from 'react';
import { decl, Bem } from 'bem-react-core';
import TextTruncate from 'react-text-truncate';

const LINES_AMOUNT = 3;

export default decl({
  block: 'CardsContainer',
  elem: 'CardTitle',
  content() {
    const { title, titleColor } = this.props;
    return (
      <Bem 
        elem="CardTitleText" 
        tag="h1"
        style={{color: titleColor}}
        title={title}
      >
        <TextTruncate
          truncateText="..."
          line={LINES_AMOUNT}
          text={title}
        />
      </Bem>
    )
  }
});
