import React from 'react'
import ExpenseForm from './ExpenseForm'
import "./NewExpense.css"

const NewExpense = (props) => {

  let dataHandler = (newExpense)=>{
    var expense = {...newExpense, id:Math.random().toString()}
    console.log("NewExpense",expense)
    props.onSave(expense)
  }

  return (
    <div className='new-expense'>
        <ExpenseForm onSave={dataHandler}/>
    </div>
  )
}

export default NewExpense