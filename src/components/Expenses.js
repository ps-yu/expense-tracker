import ExpenseItem from "./ExpenseItem";

function Expenses (props){
  return (
    <div>
      <ExpenseItem  expenses = {props.expenses[0]}/>
      <ExpenseItem  expenses = {props.expenses[1]}/>
      <ExpenseItem  expenses = {props.expenses[2]}/>
      <ExpenseItem  expenses = {props.expenses[3]}/>
    </div>
  )
}
export default Expenses;