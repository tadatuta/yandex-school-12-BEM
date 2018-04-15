import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'CardsContainer',
  elem: 'CardImage',
  content() {
    let { src } = this.props;
    const regexp = /(.+).png/;
    const srcWithoutExt = src.match(regexp)[1];
    const imageMiddlePath = require('../../../../' + srcWithoutExt + `@2x.png`);
    const imageLargePath = require('../../../../' + srcWithoutExt + `@3x.png`);
    return (
      <Fragment>
        <Bem 
          elem="Picture" 
          tag="picture"
        >
          <Bem 
            elem="Source1" 
            tag="source"
            media="(min-width: 1480px)"
            srcset={imageLargePath}
          />
          <Bem elem="Image" tag="img" src={imageMiddlePath} />
        </Bem>
      </Fragment>
    )
  }
});
