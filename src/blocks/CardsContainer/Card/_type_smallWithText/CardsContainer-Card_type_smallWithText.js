import React, { Fragment } from 'react';
import { declMod, Bem } from 'bem-react-core';

import CardTitle from  'e:CardTitle';
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
      titleColor,
      channelName,
      description,
    } = this.props.data;
    const titleLength = title.length;
    const descriptionLines = 9 - Math.ceil(titleLength/TITLE_LINE_LENGTH);
    return (
      <Fragment>
        <CardTitle title={title} titleColor={titleColor} />
        <CardDescription description={description} linesAmount={descriptionLines}/>
        <CardChannel channelName={channelName}></CardChannel>
        <CardButtons isRowDirection={true}/>
      </Fragment>
    )
  }
});
