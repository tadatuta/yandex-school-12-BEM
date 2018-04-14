import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'CardsContainer',
  elem: 'CardImage',
  content() {
    let { src } = this.props;
    const regexp = /(.+).png/;
    const srcWithoutExt = src.match(regexp)[1];
    const imageMiddleName = srcWithoutExt + `@2x.png`;
    const imageLargeName = srcWithoutExt + `@3x.png`;
    const linksToImages = [
      require('../../../' + imageMiddleName),
      require('../../../' + imageLargeName)
    ]
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
            srcset={linksToImages[1]}
          />
          <Bem elem="Image" tag="img" src={linksToImages[1]} />
        </Bem>
      </Fragment>
    )
  }
});
