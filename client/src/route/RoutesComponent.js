import React, { Component } from "react";
import { Route } from "react-router-dom";

// Page

import LandingPage from "../page/LandingPage";
import RegisterPage from "../page/RegisterPage";

class RoutesComponent extends Component {
  convertToPrivateComponent(component) {
    const user = this.props.user || {};
    if (user.token || user.email) {
      return component;
    } else {
      return RegisterPage;
    }
  }

  render() {
    const user = this.props.user || {};
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={RegisterPage} />
      </div>
    );
  }
}

export default RoutesComponent;
