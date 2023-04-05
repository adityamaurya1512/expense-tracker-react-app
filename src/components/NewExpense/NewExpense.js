import React from "react";  
import './NewExpense.css'  
import ExpenseForm from './ExpenseForm'          
const NewExpense=(props)=>
{  
    
    const onSaveHandler=(expenseData)=>
    {
        props.onAdd(expenseData)
      
    }

    return (
       <div className="new-expense">
        <ExpenseForm onSave={onSaveHandler}></ExpenseForm>
       </div>
    )
}
export default NewExpense;