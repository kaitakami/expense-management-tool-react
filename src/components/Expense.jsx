import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css";
import { formatDate } from "../helpers";
import iconSavings from "../assets/icon-savings.svg";
import iconExpense from "../assets/icon-expense.svg";
import iconFood from "../assets/icon-food.svg";
import iconHealth from "../assets/icon-health.svg";
import iconHouse from "../assets/icon-house.svg";
import iconLeisure from "../assets/icon-leisure.svg";
import iconSubscriptions from "../assets/icon-suscriptions.svg";

const Expense = ({ expense, setEditExpense, removeExpense }) => {
  const { name, quantity, category, date, id } = expense;

  const iconsValue = {
    savings: iconSavings,
    food: iconFood,
    house: iconHouse,
    miscellaneous: iconExpense,
    hobbies: iconLeisure,
    health: iconHealth,
    subscriptions: iconSubscriptions,
  };

  const leadingActions = () => (
    <LeadingActions>
      <SwipeAction onClick={() => setEditExpense(expense)}>Edit</SwipeAction>
    </LeadingActions>
  );

  const trailingActions = () => (
    <TrailingActions>
      <SwipeAction onClick={() => removeExpense(id)} destructive={true}>
        Remove
      </SwipeAction>
    </TrailingActions>
  );

  return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}
        trailingActions={trailingActions()}
      >
        <div className="shadow expense">
          <div className="content-expense">
            <img src={iconsValue[category]} alt="icon" />
            <div className="description-expense">
              <p className="category">{category}</p>
              <p className="name-expense">{name}</p>
              <p className="date-expense">
                Added: <span>{formatDate(date)}</span>
              </p>
            </div>
          </div>
          <p className="quantity-expense">${quantity}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>
  );
};

export default Expense;
