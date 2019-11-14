import React, { Component } from "react";
import { Route, Redirect } from "react-router-dom";

import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class RoutesComponent extends Component {
  constructor(props) {
    super(props);
  }

  convertToPrivateComponent(component) {
    const user = this.props.user || {};
    if (user.token || user.email) {
      return component;
    } else {
      return LoginPage;
    }
  }

  render() {
    const user = this.props.user || {};
    return (
      <div>
        <Route
          exact
          path="/"
          component={this.convertToPrivateComponent(Landing)}
        />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
      </div>
    );
  }
}

export default RoutesComponent;
