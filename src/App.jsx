import { useState } from 'react';
import Expenses from './components/Expenses/Expenses';
import NewExpense from './components/NewExpense/NewExpense';

const INITIAL_EXPENSES = [
  {
    id: '1',
    title: 'Car Insurance 2021',
    amount: 296.98,
    date: new Date(2021, 4, 12),
  },
  {
    id: '2',
    title: 'New Desk 2023',
    amount: 450.0,
    date: new Date(2023, 1, 12),
  },
  {
    id: '3',
    title: 'Macbook 2019',
    amount: 500.0,
    date: new Date(2019, 2, 10),
  },
  {
    id: '4',
    title: 'iPad Air 2020',
    amount: 250.0,
    date: new Date(2020, 6, 12),
  },
  {
    id: '5',
    title: 'iPad Air 2020',
    amount: 100.0,
    date: new Date(2020, 2, 12),
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
