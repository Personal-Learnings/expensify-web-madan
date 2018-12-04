import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";

const ExpenseList = props => (
  <div className="table-responsive">
    <table
      className="table table-striped table-lg"
      style={{ fontSize: 0.85 + "rem" }}
    >
      <thead>
        <tr>
          <th>#</th>
          <th>Expense Name</th>
          <th>Description</th>
          <th>Amount</th>
          <th>Date</th>
          <th> </th>
        </tr>
      </thead>
      <tbody>
        {props.expenses.map((expense, index) => {
          ++index;
          const expenseNew = { ...expense, index };
          return <ExpenseListItem key={expenseNew.id} {...expenseNew} />;
        })}
      </tbody>
    </table>
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: state.expenses
  };
};

export default connect(mapStateToProps)(ExpenseList);
