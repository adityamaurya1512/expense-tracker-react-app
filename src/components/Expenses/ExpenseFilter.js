import React from 'react';

import './ExpenseFilter.css';

const ExpensesFilter = (props) => {
  
       const onFilterChangeHere=(event)=>
       {
          props.onFilterChange(event.target.value);
       }
    console.log(props.selected)
  return (
    <div className='expenses-filter'>
      <div className='expenses-filter__control'>
        <label>Filter by year</label>
        <select value={props.selected} onChange={onFilterChangeHere}>
          <option value='2023'>2023</option>
          <option value='2022'>2022</option>
          <option value='2021'>2021</option>
          <option value='2020'>2020</option>
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;