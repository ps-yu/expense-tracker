import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";

function NewExpense(props) {
  const saveExpeseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id : Math.random().toString()
    };
    props.onAddExpense(expenseData)
  }
  return(
    <div className="new-expense">
      <ExpenseForm onSaveExpenseData = {saveExpeseDataHandler}/>
    </div>
  )
}
export default NewExpense;