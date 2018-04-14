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
    return (
      <Fragment>
        <Bem elem="Image" tag="img" src={require('../../../../' + imageMiddleName)} />
      </Fragment>
    )
  }
});
