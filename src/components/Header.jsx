import NewBudget from "./NewBudget";
import ManageBudget from "./ManageBudget";

const Header = ({
  budget,
  setBudget,
  isValidBudget,
  setIsValidBudget,
  expenses,
  setExpenses,
}) => {
  return (
    <header>
      <h1>Expense Management Tool</h1>
      {isValidBudget ? (
        <ManageBudget
          budget={budget}
          expenses={expenses}
          setExpenses={setExpenses}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      ) : (
        <NewBudget
          budget={budget}
          setBudget={setBudget}
          setIsValidBudget={setIsValidBudget}
        />
      )}
    </header>
  );
};

export default Header;
