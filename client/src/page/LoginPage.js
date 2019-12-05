import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';

import { attemptLogin } from '../apiCall/auth/loginApiCall';

import Login from '../components/auth/Login.js';

class LoginPage extends Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
      errors: {}
    };
    this.onChange = this.onChange.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  onClick = e => {
    e.preventDefault();

    this.props.attemptLogin({
      email: this.state.email,
      password: this.state.password
    });
  };

  render() {
    const errors = { ...this.state.errors };
    const email = { ...this.state.email };
    const password = { ...this.state.password };
    const user = this.props.user || {};
    const { userID } = user;

    return userID ? (
      <Redirect to='/home' />
    ) : (
      <Login
        onChange={e => this.onChange(e)}
        onClick={e => this.onClick(e)}
        email={email}
        password={password}
        errors={errors}
      />
    );
  }
}

// Store
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators({ attemptLogin }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withRouter(LoginPage));
