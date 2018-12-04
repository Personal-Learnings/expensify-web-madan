import React from "react";
import { NavLink } from "react-router-dom";

const NotFound = () => (
  <div>
    <h3>Oops, thats a Bad Link !!!</h3>
    <p>
      <NavLink to="/" activeClassName="is-active">
        Take Me Back Home
      </NavLink>
    </p>
  </div>
);

export default NotFound;
