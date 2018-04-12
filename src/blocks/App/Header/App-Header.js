import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import 'e:Logo';
import logoSvg from '../Logo/App-logo@3x.png';

export default decl({
  block: 'App',
  elem: 'Header',
  tag: 'header',
  content() {
    return (
      <Fragment>
        <Bem elem="Logo" tag="img" src={logoSvg} alt="logo"/>
      </Fragment>
    );
  }
});
