import Expenses from './components/Expenses/Expenses';

const App = () => {
  const expenses = [
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
  return (
    <>
      <h1>React complete guide 2023</h1>
      <Expenses expenses={expenses} />
    </>
  );
};

export default App;
