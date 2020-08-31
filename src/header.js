import React from 'react';
import PropTypes from 'prop-types';

const Icon = () => (
  <div className="icon">
    <i className="fab fa-accusoft"></i>
  </div>
);

const Title = ({ title }) => (
<div className="title">{ title }</div>
);

Title.propTypes = {
  title: PropTypes.string.isRequired
};

function Header({ title }) {
  return (
    <div className="header">
      <Icon />
      <Title title={ title } />
    </div>
  );
};

Header.propTypes = {
  title: PropTypes.string.isRequired
};

export default Header;
