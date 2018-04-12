import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

export default decl({
  block: 'CardsContainer',
  elem: 'CardButtons',
  content() {
    return (
      <Fragment>
        <Bem elem="readMoreButton" tag="button" > </Bem>
        <Bem elem="likeBitton" tag="button"></Bem>
      </Fragment>
    )
  }
});
