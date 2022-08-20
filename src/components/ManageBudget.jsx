import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ManageBudget = ({
  budget,
  expenses,
  setExpenses,
  setBudget,
  setIsValidBudget,
}) => {
  const [percentage, setPercentage] = useState(0);
  const [available, setAvailable] = useState(0);
  const [spent, setSpent] = useState(0);

  useEffect(() => {
    const totalSpent = expenses.reduce(
      (total, expense) => expense.quantity + total,
      0
    );

    const totalAvailable = budget - totalSpent;

    const newPercentage = (((budget - totalAvailable) / budget) * 100).toFixed(
      2
    );

    setTimeout(() => {
      setPercentage(newPercentage);
    }, 800);

    setAvailable(totalAvailable);
    setSpent(totalSpent);
  }, [expenses]);

  const formatQuantity = (quantity) => {
    return quantity.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  const handleResetApp = () => {
    const result = confirm("Are you sure you want to reset the app?");
    if (result) {
      setBudget(0);
      setExpenses([]);
      setIsValidBudget(false);
    }
  };

  return (
    <div className="container-budget container shadow two-columns">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percentage < 100 ? "#3B82F6" : "#DC2626",
            trailColor: "#f5f5f5",
            textColor: percentage < 100 ? "#3B82F6" : "#DC2626",
          })}
          value={percentage}
          text={`${percentage}% spent`}
        />
      </div>

      <div className="content-budget">
        <button className="reset-app" type="button" onClick={handleResetApp}>
          Reset App
        </button>
        <p>
          <span>Budget:</span> {formatQuantity(budget)}
        </p>
        <p>
          <span className={`${available < 0 ? "negative" : ""}`}>
            Available:
          </span>{" "}
          {formatQuantity(available)}
        </p>
        <p>
          <span>Spent:</span> {formatQuantity(spent)}
        </p>
      </div>
    </div>
  );
};

export default ManageBudget;
