import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ card }) => {
  var url = `https://www.gravatar.com/avatar/${ card.hash }`;
  
  return (
    <div className="card">
      <div className="card-title">{ card.title }</div>
      <div className="card-subtitle">{ card.subtitle }</div>
      <img src={ url } alt="card-img" />
      <button>Follow</button>
    </div>
  );
};

Card.propTypes = {
  card: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired
  }).isRequired
};

export default Card;
