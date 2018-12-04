import { createStore, combineReducers } from "redux";
import expenseReducer from "../reducers/ExpenseReducer";

export default () => {
  const store = createStore(
    combineReducers({
      expenses: expenseReducer
    }),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  );
  return store;
};
