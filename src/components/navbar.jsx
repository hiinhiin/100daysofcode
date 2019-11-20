import React from "react";

//Stateless Functional Component

const NavBar = ({totalCounters}) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a href="https://github.com/hiinhiin/100daysofcode" className="navbar-brand">
        100daysofcode <span className="badge badge-pill badge-secondary">{totalCounters}</span>
      </a>
    </nav>
  );
}

export default NavBar;
