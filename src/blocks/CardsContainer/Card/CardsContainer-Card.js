import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import 'm:type=smallWithImg';
import 'm:type=smallWithText';
import 'm:type=medium';
import 'm:type=large';

export default decl({
  block: 'CardsContainer',
  elem: 'Card',
  mods({ type }) {
    return { type };
  },
});
