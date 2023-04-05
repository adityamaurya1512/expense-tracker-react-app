import React,{useState} from "react";   
import './ExpenseForm.css'           
const ExpenseForm=(props)=>
{     const [enteredTitle,setTitle]=useState('');
      const [enteredAmount,setAmount]=useState('');
      const [enteredDate,setDate]=useState('');
    const titleChangeHandler=(e)=>
    {
        setTitle(e.target.value);
      
    }
     const amountChangeHandler=(e)=>
     {
        setAmount(e.target.value)
     }
     const dateChangeHandler=(e)=>
     {
        setDate(e.target.value)
     }
     const submitHandler=(e)=>
     {  e.preventDefault()    ///prevent browser to send some kind of req to server .
         const expenseData=
         {
          title:enteredTitle,
          amount:enteredAmount,
          date:new Date(enteredDate)
         }
         props.onSave(expenseData);
         setTitle('');
         setAmount('');
         setDate('');
     }
    return (
     <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
          <div className="new-expense__controls">
            <label>Title</label>
            <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
          </div>
          <div className="new-expense__controls">
            <label>Amount</label>
            <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}></input>
          </div>
          <div className="new-expense__controls">
            <label>Date</label>
            <input type="date" value={enteredDate} onChange={dateChangeHandler}></input>
          </div>
        </div>
        <div className="new-expense__actions">
            <button type="submit" >Add Expense</button>
        </div>
     </form>
    )
}

export default ExpenseForm;