import React from 'react';

const Suggestions = props => {
  const options = props.results.slice(0, 10).map(r => {
    if (r.title === undefined) {
    } else {
      return <li key={r.id}>{r.title}</li>;
    }
  });
  return <ul>{options}</ul>;
};

export default Suggestions;
