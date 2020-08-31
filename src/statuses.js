import React from 'react';
import PropTypes from 'prop-types';

const Status = ({ status }) => (
  <span className="status">
    <div className="count">{ status.count }</div>
    <div className="type">{ status.type }</div>
  </span>
);

Status.propTypes = {
  status: PropTypes.shape({
    id: PropTypes.number.isRequired,
    count: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired
  }).isRequired
};

function Statuses({ statuses }) {
  return (
    <div className="statuses">
      {statuses.map(status => (
        <Status key={ status.id } status={ status } />
      ))}
    </div>
  );
};

Statuses.propTypes = {
  statuses: PropTypes.array.isRequired
};

export default Statuses;
