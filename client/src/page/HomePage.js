import React, { Component } from "react";
import { Link } from "react-router-dom";

class HomePage extends Component {
  render() {
    return (
      <div
        style={{ height: "75vh", width: "75vh" }}
        className="container valign-wrapper "
      >
        <div className="row">
          <div className=" center-align">
            <div className="col s6">
              <ul
                style={{ width: "75vh" }}
                class="col s6 collection with-header"
              >
                <li class="collection-header">
                  <h4>My Groups</h4>
                </li>
                <li class="collection-item">
                  <div>
                    Group 1
                    <a href="#!" class="secondary-content">
                      <i class="material-icons">send</i>
                    </a>
                  </div>
                </li>
                <li class="collection-item">
                  <div>
                    Group 2
                    <a href="#!" class="secondary-content">
                      <i class="material-icons">send</i>
                    </a>
                  </div>
                </li>
                <li class="collection-item">
                  <div>
                    Group 3
                    <a href="#!" class="secondary-content">
                      <i class="material-icons">send</i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className="col s6">
              <ul
                style={{ width: "75vh" }}
                class="col s6 collection with-header"
              >
                <li class="collection-header">
                  <h4>My Events</h4>
                </li>
                <li class="collection-item">
                  <div>
                    Event 1
                    <a href="#!" class="secondary-content">
                      <i class="material-icons">send</i>
                    </a>
                  </div>
                </li>
                <li class="collection-item">
                  <div>
                    Event 2
                    <a href="#!" class="secondary-content">
                      <i class="material-icons">send</i>
                    </a>
                  </div>
                </li>
                <li class="collection-item">
                  <div>
                    Event 3
                    <a href="#!" class="secondary-content">
                      <i class="material-icons">send</i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default HomePage;
