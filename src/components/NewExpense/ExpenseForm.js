import './ExpenseForm.css'
import React, {useState} from 'react';

function ExpenseForm (){
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState('');
  const [date, changeDate] = useState('');

  const titleChangeHandler = (e) => {
  setTitle(e.target.value);
  }
  const amountChangeHandler = (e) => {
    setAmount(e.target.value);
  }
  const dateChangeHandler = (e) => {
    changeDate(e.target.value);
  };

  const submitHandler = (event) =>{
    event.preventDefault();
    const expenseData = {
      title,
      amount,
      date : new Date(date)
    }
    setTitle('');
    setAmount('');
    changeDate('');
    console.log(expenseData);
  }
  



  return(
    <form onSubmit={submitHandler}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text'
           value={title} 
           onChange={titleChangeHandler} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' 
          value={amount}
          onChange={amountChangeHandler}/>
        </div>
        <div className='new-expense__control'>
          <label>date</label>
          <input type='date' 
          value={date}
          onChange={dateChangeHandler}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}
export default ExpenseForm;