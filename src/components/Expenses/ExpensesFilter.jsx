import './ExpensesFilter.css';

const ExpensesFilter = ({ selected, onChangeFilter }) => {
  const filterOptions = ['2022', '2021', '2020', '2019'];
  const dropDownChangeHandler = (event) => {
    onChangeFilter(event.target.value);
  };
  return (
    <div className="expenses-filter">
      <div className="expenses-filter__control">
        <label>Filter by year</label>
        <select onChange={dropDownChangeHandler} value={selected}>
          {filterOptions.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default ExpensesFilter;
