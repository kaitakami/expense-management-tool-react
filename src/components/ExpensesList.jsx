import Expense from "./Expense";

const ExpensesList = ({ expenses, setEditExpense, removeExpense }) => {
  return (
    <div className="list-expenses container">
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
    </div>
  );
};

export default ExpensesList;
