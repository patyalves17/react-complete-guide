import { useState } from 'react';
import Card from './../UI/Card';
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';

const ExpenseItem = ({ title, amount, date }) => {
  const [titleEdit, setTitle] = useState(title);

  const onClickHandler = () => {
    setTitle('Change!!!');
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={date} />

      <div className="expense-item__description">
        <h2>{titleEdit}</h2>
        <div className="expense-item__price">{amount}</div>
      </div>
      <button onClick={onClickHandler}>Chance Title</button>
    </Card>
  );
};

export default ExpenseItem;
