import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "../components/Header";
import ExpenseDashboard from "../components/ExpenseDashboard";
import AddExpense from "../components/AddExpense";
import EditExpense from "../components/EditExpense";
import NotFound from "../components/NotFound";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={ExpenseDashboard} exact={true} />
        <Route path="/add" component={AddExpense} />
        <Route path="/edit" component={EditExpense} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
