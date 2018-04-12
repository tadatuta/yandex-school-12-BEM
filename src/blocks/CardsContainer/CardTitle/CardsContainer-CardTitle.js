import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

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
      >
        {title}
      </Bem>
    )
  }
});
