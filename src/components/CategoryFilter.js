import React from 'react';

const Filter = props => {

  return (
    <div className="filter">
      <input type="checkbox" onChange={() => props.onFilterChecked(props.filterName)} />
      <h4>{props.filterName}</h4>
    </div>
  );
}

export default Filter;
