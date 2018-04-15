import React, { Fragment } from 'react';
import { declMod } from 'bem-react-core';

import CardTitle from  'e:CardTitle';
import CardImage from 'e:CardImage';
import CardButtons from 'e:CardButtons';

export default declMod({ type: 'smallWithImg' }, {
  block: 'CardsContainer',
  elem: 'Card',
  content() {
    const {
      title,
      titleColor,
      image,
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
