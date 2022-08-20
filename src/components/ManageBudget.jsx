const ManageBudget = ({ budget }) => {
  const formatQuantity = (quantity) => {
    return quantity.toLocaleString("en-US", {
      style: "currency",
      currency: "USD",
    });
  };

  return (
    <div className="container-budget container shadow two-columns">
      <div>
        <p>Graph here</p>
      </div>

      <div className="content-budget">
        <p>
          <span>Budget:</span> {formatQuantity(budget)}
        </p>
        <p>
          <span>Available:</span> {formatQuantity(0)}
        </p>
        <p>
          <span>Budget:</span> {formatQuantity(0)}
        </p>
      </div>
    </div>
  );
};

export default ManageBudget;
