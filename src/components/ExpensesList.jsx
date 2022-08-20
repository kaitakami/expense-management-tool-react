import Expense from "./Expense";

const ExpensesList = ({
  expenses,
  setEditExpense,
  removeExpense,
  filter,
  filteredExpenses,
}) => {
  return (
    <div className="list-expenses container">
      {filter ? (
        <>
          <h2>
            {filteredExpenses.length
              ? `Your expenses in ${filter}`
              : "No expenses in this category"}
          </h2>
          {filteredExpenses.map((expense) => {
            return (
              <Expense
                expense={expense}
                setEditExpense={setEditExpense}
                key={expense.id}
                removeExpense={removeExpense}
              ></Expense>
            );
          })}
        </>
      ) : (
        <>
          <h2>
            {expenses.length
              ? "Your expenses"
              : "Start adding some of your expenses"}
          </h2>
          {expenses.map((expense) => {
            return (
              <Expense
                expense={expense}
                setEditExpense={setEditExpense}
                key={expense.id}
                removeExpense={removeExpense}
              ></Expense>
            );
          })}
        </>
      )}
    </div>
  );
};

export default ExpensesList;
