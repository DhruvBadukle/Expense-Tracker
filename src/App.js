import './App.css';
import ExpenseItem from './components/ExpenseItem';
import NewExpense from './components/NewExpense';
import { useState } from 'react';


var dummy = [
  { id: 101, expDate: new Date(2024, 8, 13), expTitle: "Desktop Computer", expAmount: "90000" },
  { id: 102, expDate: new Date(2020, 4, 15), expTitle: "Mobile", expAmount: "70000" },
  { id: 103, expDate: new Date(2022, 5, 10), expTitle: "TV", expAmount: "50000" },
]

function App() {

  let [expenses, setExpenses] = useState(dummy)

  let dataHandler = (expense) => {
    console.log("In App", expense)
    setExpenses(prevarr => [expense, ...prevarr])
  }

  let deleteHandler = (id) => {
    console.log("item to be deleted", id)
    setExpenses(oldValues => {
      return oldValues.filter(item => item.expTitle !== id)
    })
  }

  return (
    <div className="App">
      <h1>Lets Learn React</h1>
      <hr></hr>
   
      <NewExpense onSave={dataHandler} />

      {
        expenses.map(exp => (
          <ExpenseItem
            key={exp.id}
            expDate={exp.expDate}
            expTitle={exp.expTitle}
            expAmount={exp.expAmount}
            onDelete={deleteHandler} />
        ))
      }


      {/*
      <ExpenseItem expDate={expenses[0].expDate} expTitle={expenses[0].expTitle} expAmount={expenses[0].expAmount}/>
      <ExpenseItem expDate={expenses[1].expDate} expTitle={expenses[1].expTitle} expAmount={expenses[1].expAmount}/>
      <ExpenseItem expDate={expenses[2].expDate} expTitle={expenses[2].expTitle} expAmount={expenses[2].expAmount}/>
      <Person pname="Yuvraj" age="22" />
      <Person pname="Navya" age="25"/>
      <Person pname="Sharath" age="30"/>*/}
    </div>

  );
}

export default App;
