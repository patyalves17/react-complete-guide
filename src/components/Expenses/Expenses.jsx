import { useState } from 'react';
import Card from './../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';
import ExpensesChart from './ExpensesChart';

const Expenses = ({ expenses }) => {
  const [filtered, setFilterdYear] = useState('2020');

  const expensesFilter = expenses.filter(
    (expense) => expense.date.getFullYear().toString() === filtered
  );

  const filterChangeHandler = (selectedYear) => {
    setFilterdYear(selectedYear);
  };

  return (
    <Card className="expenses">
      <ExpensesFilter
        onChangeFilter={filterChangeHandler}
        selected={filtered}
      />
      <ExpensesChart expenses={expensesFilter} />
      <ExpensesList expenses={expensesFilter} />
    </Card>
  );
};

export default Expenses;
