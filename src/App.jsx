import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  {
    id: '1',
    title: 'Car Insurance',
    amount: 296.98,
    date: new Date(2021, 2, 12),
  },
  {
    id: '2',
    title: 'New Desk',
    amount: 450.0,
    date: new Date(2023, 2, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const addExpenseHandler = (enteredExpenseData) => {
    setExpenses((prevExpenses) => [enteredExpenseData, ...prevExpenses]);
  };

  return (
    <>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;
