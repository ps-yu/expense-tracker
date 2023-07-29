import React, { useState } from 'react';

import './ExpenseForm.css';

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState('');
  const [enteredAmount, setEnteredAmount] = useState('');
  const [enteredDate, setEnteredDate] = useState('');
  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    hideForm(false);
    hideButton(true)
  };
  
  //logic to hide or display the addExpenseForm
  function display () {
    hideForm(true);
    hideButton(false)
  }
  function hide () {
    hideForm(false)
    hideButton(true)
  }
  const [displayForm, hideForm] = useState(false);
  const [displayButton, hideButton] = useState(true);
  return (
    <div>
      {displayForm && <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
          <div className='new-expense__control'>
            <label>Title</label>
            <input
              type='text'
              value={enteredTitle}
              onChange={titleChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Amount</label>
            <input
              type='number'
              min='0.01'
              step='0.01'
              value={enteredAmount}
              onChange={amountChangeHandler}
            />
          </div>
          <div className='new-expense__control'>
            <label>Date</label>
            <input
              type='date'
              min='2019-01-01'
              max='2022-12-31'
              value={enteredDate}
              onChange={dateChangeHandler}
            />
          </div>

        </div>
        <div className='new-expense__actions'>
          <button type='submit'> Add Expense</button>
          <button type='button'onClick= {hide}> Cancel </button>
        </div>
      </form>}

      {displayButton &&
      <div className='new-expense button' onClick = {display}>
          <button type='button'> Add New Expense</button>
      </div>}
    </div>

  );
};

export default ExpenseForm;
