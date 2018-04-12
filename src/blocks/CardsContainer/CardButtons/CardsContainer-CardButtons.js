import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import 'm:isRowDirection';

export default decl({
  block: 'CardsContainer',
  elem: 'CardButtons',
  mods({ isRowDirection }) {
    return { isRowDirection };
  },
  content() {
    return (
      <Fragment>
        <Bem elem="ReadMoreButton" tag="button" ></Bem>
        <Bem elem="LikeButton" tag="button"></Bem>
      </Fragment>
    )
  }
});
