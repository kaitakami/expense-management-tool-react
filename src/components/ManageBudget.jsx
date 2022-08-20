import { useState, useEffect } from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const ManageBudget = ({ budget, expenses }) => {
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

  return (
    <div className="container-budget container shadow two-columns">
      <div>
        <CircularProgressbar
          styles={buildStyles({
            pathColor: percentage < 100 ? "#3B82F6" : "red",
            trailColor: "#f5f5f5",
            textColor: percentage < 100 ? "#3B82F6" : "red",
          })}
          value={percentage}
          text={`${percentage}% spent`}
        />
      </div>

      <div className="content-budget">
        <p>
          <span>Budget:</span> {formatQuantity(budget)}
        </p>
        <p>
          <span>Available:</span> {formatQuantity(available)}
        </p>
        <p>
          <span>Spent:</span> {formatQuantity(spent)}
        </p>
      </div>
    </div>
  );
};

export default ManageBudget;
