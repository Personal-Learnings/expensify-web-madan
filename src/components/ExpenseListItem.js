import React from "react";
import { Link } from "react-router-dom";

const ExpenseListItem = ({ id, name, description, amount, date, index }) => (
  <tr>
    <td>
      <Link to={`/edit/${id}`}>{index}</Link>
    </td>
    <td>{name}</td>
    <td>{description}</td>
    <td>{amount}</td>
    <td>{date}</td>
    <td>
      <button type="submit" className="btn btn-danger btn-sm">
        Delete
      </button>
    </td>
  </tr>
);

export default ExpenseListItem;
