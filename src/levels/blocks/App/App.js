import React, { Fragment } from 'react';
import { decl } from 'bem-react-core';

import Header from 'e:Header';
import CardsContainer from 'b:CardsContainer';

export default decl({
  block: 'App',
  content() {
    return (
      <Fragment>
        <Header />
        <CardsContainer />
      </Fragment>
    );
  }
});
