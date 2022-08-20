const Filters = ({ filter, setFilter }) => {
  return (
    <div className="filters shadow container">
      <form>
        <div className="field">
          <label htmlFor="filterExpenses">Filter expenses</label>
          <select
            id="filterExpenses"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="">-- All expenses --</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="house">House</option>
            <option value="miscellaneous">Miscellaneous</option>
            <option value="hobbies">Hobbies</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Filters;
