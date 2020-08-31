import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header';
import Statuses from './statuses';
import Cards from './cards';
import PropTypes from 'prop-types';

var testData = {
  title: "Aviation Explorer",
  statuses: [
    {
      id: 1,
      count: "37",
      type: "Boards"
    },
    {
      id: 2,
      count: "8.9k",
      type: "Pins"
    },
    {
      id: 3,
      count: "186",
      type: "Likes"
    },
    {
      id: 4,
      count: "8.9k",
      type: "Followers"
    },
    {
      id: 5,
      count: "1.8k",
      type: "Following"
    }
  ],
  cards: [
    {
      id: 1,
      title: "Title 1",
      subtitle: "Sub Title 1",
      hash: "xyz"
    },
    {
      id: 2,
      title: "Title 2",
      subtitle: "Sub Title 2",
      hash: "xyz"
    },
    {
      id: 3,
      title: "Title 3",
      subtitle: "Sub Title 3",
      hash: "xyz"
    },
    {
      id: 4,
      title: "Title 4",
      subtitle: "Sub Title 4",
      hash: "xyz"
    },
    {
      id: 5,
      title: "Title 5",
      subtitle: "Sub Title 5",
      hash: "xyz"
    },
    {
      id: 6,
      title: "Title 6",
      subtitle: "Sub Title 6",
      hash: "xyz"
    },
  ]
};

function Lists({ data }) {
  return (
    <div className="content">
      <Header title={ data.title } />
      <Statuses statuses={ data.statuses } />
      <Cards cards={ data.cards } />
    </div>
  );
};

Lists.propTypes = {
  data: PropTypes.object
};

ReactDOM.render(
  <Lists data={ testData } />,
  document.getElementById('root')
);
