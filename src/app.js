import React from "react";
import ReactDOM from "react-dom";

import AppRouter from "./routers/AppRouter";

import "./styles/bootstrap.min.css";
import "./styles/offcanvas.css";

ReactDOM.render(<AppRouter />, document.getElementById("app"));
