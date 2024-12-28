import React, { useState } from 'react'
import "./ExpenseForm.css"

const ExpenseForm = (props) => {

    let [title, setTitle] = useState("")
    let [amount, setAmount] = useState("")
    let [date, setDate] = useState("")

    let titleHandler = (e)=>{
        setTitle(e.target.value)
    }

    let amountHandler = (e)=>{
        setAmount(e.target.value)
    }
    let dateHandler = (e)=>{
        setDate(e.target.value)
    }

   let submitHandler = (e)=>{
     e.preventDefault()
     var expense = {
        expTitle:title,
        expAmount:amount,
        expDate:new Date(date)
     }
     console.log("Expense Form", expense)
     setAmount("")
     setTitle("")
     setDate("")
     props.onSave(expense)

   }

  return (
    <div>
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
               <div className="new-expense__control">
                   <label>Title</label>
                   <input onChange={titleHandler} value={title}/>
               </div> 
               <div className="new-expense__control">
                   <label>Amount</label>
                   <input type="number" onChange={amountHandler} value={amount}/>
               </div>
               <div className="new-expense__control">
                   <label>Date</label>
                   <input type="date" onChange={dateHandler} value={date} />
               </div>
            </div>
            <div className="new-expense__actions">
                <button type="button"  >Cancel</button>
                <button type="submit">Add Expense</button>
            </div>
        </form>

    </div>
  )
}

export default ExpenseForm