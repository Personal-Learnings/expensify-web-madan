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
      <div>
        <button type="submit" className="btn btn-info btn-sm">
          Edit
        </button>
        <span> </span>
        <button type="submit" className="btn btn-danger btn-sm">
          Delete
        </button>
      </div>
    </td>
  </tr>
);

export default ExpenseListItem;
