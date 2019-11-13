import React, { Component } from "react";

const Navbar = props => {
  return (
    <div className="navbar-fixed">
      <nav className="z-depth-0">
        <div className="nav-wrapper white">
          <a
            style={{ fontFamily: "monospace" }}
            href="/"
            className="col s5 brand-logo center black-text"
          >
            <i className="material-icons">code</i>
            Smart Group Financial
          </a>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
