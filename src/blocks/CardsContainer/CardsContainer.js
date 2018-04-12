import React, { Fragment } from 'react';
import { decl, Bem } from 'bem-react-core';

import cardsData from './data.js';

import Card from 'e:Card';

export default decl({
  block: 'CardsContainer',
  willInit() {
    this.state = {
      cardsData,
    };
  },

  determineType(data) {
    const { size } = data;
    let type = undefined;
    switch (size) {
      case 's':
        if (data.image && !data.description) {
          type = 'smallWithImg';
        }
        else if (!data.image && data.description) {
          type = 'smallWithText';
        }
        break;
      case 'm':
        type = 'medium';
        break;
      case 'l':
        type = 'large';
        break;
      default:
        break;
    }
    return 'medium';
  },

  createCards() {
    const { cardsData } = this.state;
    return cardsData.map((data, index) => {
      const type = this.determineType(data);
      return <Card key={index} data={data} type={type}/>
    })
  },

  content() {
    const cards = this.createCards();
    return (
      <Fragment>
        {cards}
      </Fragment>
    );
  }
});
