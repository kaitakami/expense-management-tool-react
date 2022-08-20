import { useEffect, useState } from "react";
import Message from "./Message";
import closeBtn from "../assets/close.svg";

const Modal = ({
  setModal,
  animateModal,
  setAnimateModal,
  saveExpense,
  editExpense,
  setEditExpense,
}) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [date, setDate] = useState('')
  const [id, setId] = useState('')

  useEffect(() => {
    if (Object.keys(editExpense).length > 0) {
      setName(editExpense.name);
      setQuantity(editExpense.quantity);
      setCategory(editExpense.category);
      setId(editExpense.id)
      setDate(editExpense.date)
    }
  }, [editExpense]);

  const hideModal = () => {
    setAnimateModal(false);
    setEditExpense({})
    setTimeout(() => {
      setModal(false);
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([name, quantity, category].includes("")) {
      setMessage("All fields are required");

      setTimeout(() => {
        setMessage("");
      }, 3000);
      return;
    }

    saveExpense({ name, quantity, category, id, date });
  };

  return (
    <div className="modal">
      <div className="close-modal">
        <img src={closeBtn} alt="close-icon" onClick={hideModal} />
      </div>
      <form
        className={`form ${animateModal ? "animate" : "close"}`}
        onSubmit={handleSubmit}
      >
        <legend>{editExpense.name ? "Edit Expense" : "Add expense"}</legend>
        {message && <Message type="error">{message}</Message>}

        <div className="field">
          <label htmlFor="nameExpense">Name of expense</label>
          <input
            type="text"
            id="nameExpense"
            placeholder="Write the name of the expense"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="field">
          <label htmlFor="quantity">Quantity</label>
          <input
            type="number"
            id="quantity"
            placeholder="Enter the amount of the expense"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
          />
        </div>
        <div className="field">
          <label htmlFor="category">Category</label>
          <select
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">-- Select --</option>
            <option value="savings">Savings</option>
            <option value="food">Food</option>
            <option value="house">House</option>
            <option value="miscellaneous">Miscellaneous</option>
            <option value="hobbies">Hobbies</option>
            <option value="health">Health</option>
            <option value="subscriptions">Subscriptions</option>
          </select>
        </div>
        <input type="submit" value={editExpense.name ? 'Save changes' : 'Add Expense'} />
      </form>
    </div>
  );
};

export default Modal;
