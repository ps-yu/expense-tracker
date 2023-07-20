import React, {useState} from "react";
import "./ExpenseItem.css"
import ExpenseDate from "./expenseDate";


function ExpenseItem(props) {
  const [title, setTitle] = useState(props.expenses.title);
  const clickHandler = () => {
    setTitle('Update')
  }
  return (
    <div className="expense-item">
      < ExpenseDate date = {props.expenses.date} />
      <div className="expense-item__description">
        <h2> {title} </h2>
        <div className="expense-item__price"> {props.expenses.amount} </div>
        <button onClick ={clickHandler}> Update</button>
      </div>
    </div>
  );
}
export default ExpenseItem;
