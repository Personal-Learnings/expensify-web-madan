import React from "react";
import ReactDOM from "react-dom";

import AppRouter from "./routers/AppRouter";
import configureStore from "./store/ConfigureStore";
import { addExpense } from "./actions/expenseAction";
import { Provider } from "react-redux";

import "./styles/bootstrap.min.css";
import "./styles/offcanvas.css";

const store = configureStore();

store.dispatch(
  addExpense({
    name: "Water Bill",
    description: "January 2018 Bill.",
    amount: 450,
    date: 10000
  })
);
store.dispatch(
  addExpense({
    name: "Mobile Bill",
    description: "January 2018 Bill.",
    amount: 150,
    date: 1500
  })
);
store.dispatch(
  addExpense({
    name: "House Rent",
    description: "January 2018 Bill.",
    amount: 1450,
    date: 1500
  })
);

const state = store.getState();
console.log(state);
const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById("app"));
