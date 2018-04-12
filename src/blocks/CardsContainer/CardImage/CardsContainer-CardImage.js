import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'CardsContainer',
  elem: 'CardImage',
  content() {
    let { src } = this.props;
    if (!src) src = 'img/1.png';
    const regexp = /(.+).png/;
    const srcWithoutExt = src.match(regexp)[1];
    const ImageName = srcWithoutExt + `@2x.png`;
    const linkToImage = require('../../../' + ImageName);
    return (
      <Fragment>
        <Bem elem="Picture" tag="picture">
          <Bem elem="Image" tag="img" src={linkToImage} />
        </Bem>
      </Fragment>
    )
  }
});
