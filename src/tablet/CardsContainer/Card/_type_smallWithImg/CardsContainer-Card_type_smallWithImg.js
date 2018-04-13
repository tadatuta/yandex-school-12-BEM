import React, { Fragment } from 'react';
import { declMod, Bem } from 'bem-react-core';

import CardTitle from  'e:CardTitle';
import CardImage from 'e:CardImage';
import CardDescription from 'e:CardDescription';
import CardButtons from 'e:CardButtons';

export default declMod({ type: 'smallWithImg' }, {
  block: 'CardsContainer',
  elem: 'Card',
  content() {
    const {
      title,
      titleColor,
      image,
      description,
    } = this.props.data;
    return (
      <Fragment>
        <CardTitle title={title} titleColor={titleColor} />
        <CardImage src={image} />
        <CardButtons />
      </Fragment>
    )
  }
});
