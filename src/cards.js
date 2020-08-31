import React from 'react';
import PropTypes from 'prop-types';
import Card from './card';

function Cards({ cards }) {
  return (
    <div className="cards">
      {cards.map(card => (
        <Card key={ card.id } card={ card } />
      ))}
    </div>
  );
};

Cards.propTypes = {
  cards: PropTypes.array.isRequired
};

export default Cards;
