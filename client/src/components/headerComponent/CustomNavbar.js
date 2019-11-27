import React, { Component } from "react";
import { Link } from "react-router-dom";

class CustomNavbar extends Component {
  render() {
    return (
      <div className="navbar-fixed">
        <nav className="z-depth-0">
          <div className="nav-wrapper white">
            <Link
              to="/"
              style={{
                fontFamily: "monospace"
              }}
              className="brand-logo black-text"
            >
              <i className="material-icons">code</i>
              Smart Group Financial
            </Link>
            <ul className="right">
              <li>
                <Link
                  to="/"
                  style={{
                    fontFamily: "monospace"
                  }}
                  className=" right black-text"
                >
                  Create Group
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  style={{
                    fontFamily: "monospace"
                  }}
                  className=" right black-text"
                >
                  Create Event
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  style={{
                    fontFamily: "monospace"
                  }}
                  className=" right black-text"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
export default CustomNavbar;
