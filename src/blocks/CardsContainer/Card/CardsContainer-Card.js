import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import 'm:type=smallWithImg m:type=smallWithText m:type=medium m:type=large';

export default decl({
  block: 'CardsContainer',
  elem: 'Card',
  mods({ type }) {
    return { type };
  },
});
