import React from "react";
import { NavLink } from "react-router-dom";

//Stateless Function Component
const Header = () => (
  <div>
    <nav className="navbar navbar-expand-lg fixed-top navbar-dark bg-dark">
      <NavLink className="navbar-brand mr-auto mr-lg-0" to="">
        Expensify App
      </NavLink>
    </nav>

    <div className="nav-scroller bg-white shadow-sm">
      <nav className="nav nav-underline">
        <NavLink to="/" className="nav-link active" exact={true}>
          Home
        </NavLink>
        <NavLink to="/add" className="nav-link active">
          Create an Expense
        </NavLink>
        <NavLink to="/edit" className="nav-link active">
          Edit an Expense
        </NavLink>
      </nav>
    </div>
    <br />
    <br />
  </div>
);
export default Header;
