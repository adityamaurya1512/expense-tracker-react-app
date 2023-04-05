import './Expenses.css'
import Card from '../UI/Card';
import { useState } from 'react';
import ExpenseItem from  './ExpenseItem'
import ExpensesFilter from './ExpenseFilter';
import ExpensesChart from './ExpensesChart';
function Expenses(props)
{    
    useState();
     const [year,setSelectedYear]=useState('2020');
    const onFilterChangeHandler=(selectedYear)=>
    {
        setSelectedYear(selectedYear);
    }
    const filteredExpenses=props.items.filter((expenses)=>{
      
       return (expenses.date.getFullYear().toString()===year)
     
       
    })

    return (
        <Card className="expenses">
        <ExpensesFilter selected={year} onFilterChange={onFilterChangeHandler}></ExpensesFilter>
        <ExpensesChart expenses={filteredExpenses}></ExpensesChart>
        {filteredExpenses.length===0 ? <h3 className='empty_list'>No Expenses Found.Would you like to add some expenses ? </h3> : (filteredExpenses.map(expense=>(
            <ExpenseItem amount={expense.amount} title={expense.title} date={expense.date}></ExpenseItem>
        )))}
        </Card>
    )
}

export default Expenses