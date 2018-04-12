import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import CardTitle from  'e:CardTitle';

import 'm:type_smallWithImg';
import 'm:type_smallWithText';
import 'm:type_medium';
import 'm:type_large';

export default decl({
  block: 'CardsContainer',
  elem: 'Card',
  mods({ type }) {
    return { type };
  },
  content() {
    const {
      title,
      titleColor, 
    } = this.props.data;
    return <CardTitle title={title} titleColor={titleColor} />
  }
});
