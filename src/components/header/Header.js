import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = { color: "#FA2E02" };
//NavLink privdes the page that should be hit upon clicking the page
const Header = () => (
  <div>
    <nav>
      <NavLink to="/" activeStyle={activeStyle} exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/todo" activeStyle={activeStyle}>
        ToDo
      </NavLink>
      {" | "}
      <NavLink to="/about" activeStyle={activeStyle}>
        About
      </NavLink>
    </nav>
  </div>
);

export default Header;
