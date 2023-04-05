
import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';
const DUMMY=[
  { title: "Pen",
    amount:10,
    date:new Date("2020-03-25")
  },
  { title: "Pencil",
    amount:5,
    date:new Date("2020-04-25")
  },
  {
    title: "Notebook",
    amount:26,
    date:new Date("2020-05-25")
  }

]
function App() {
    useState();
    const [expenses,newExpenses]=useState(DUMMY);
    const addNewExpenseHandler=(newExpense)=>
    {
       

        newExpenses((prevExpenses)=>
        {
            return [newExpense,...prevExpenses]
        });

    }
;  return (
    <div>
      <NewExpense onAdd={addNewExpenseHandler} ></NewExpense>
       <Expenses items={expenses}></Expenses>
    </div>
  );
}

export default App;
