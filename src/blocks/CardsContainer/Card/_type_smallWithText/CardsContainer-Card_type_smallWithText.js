import React, { Fragment } from 'react';
import { declMod, Bem } from 'bem-react-core';

import CardImage from 'e:CardImage';
import CardDescription from 'e:CardDescription';
import CardButtons from 'e:CardButtons';
import CardChannel from 'e:CardChannel';

const TITLE_LINE_LENGTH = 20;

export default declMod({ type: 'smallWithText' }, {
  block: 'CardsContainer',
  elem: 'Card',
  content() {
    const {
      title,
      channelName,
      description,
    } = this.props.data;
    const titleLength = title.length;
    const descriptionLines = 9 - Math.ceil(titleLength/TITLE_LINE_LENGTH);
    return (
      <Fragment>
        {this.__base(...arguments)}
        <CardDescription description={description} linesAmount={descriptionLines}/>
        <CardChannel channelName={channelName}></CardChannel>
        <CardButtons isRowDirection={true}/>
      </Fragment>
    )
  }
});
