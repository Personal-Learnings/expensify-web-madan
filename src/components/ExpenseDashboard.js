import React from "react";

const ExpenseDashboard = () => (
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
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1. </td>
          <td>Rent</td>
          <td>December 2018 Rent</td>
          <td>$100</td>
          <td>02/12/2018</td>
        </tr>
        <tr>
          <td>1. </td>
          <td>Rent</td>
          <td>December 2018 Rent</td>
          <td>$100</td>
          <td>02/12/2018</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default ExpenseDashboard;
