import React, { Component } from 'react';
import Landing from '../components/headerComponent/Landing';
import { Redirect } from 'react-router-dom';
import { USER_ID } from '../constant';
import { setUserToken } from '../actions/auth/setUserTokenAction';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

class LandingPage extends Component {
  componentDidMount() {
    const userID = localStorage.getItem(USER_ID);
    if (userID) {
      this.props.setUserToken({
        userID
      });
    }
  }

  render() {
    const user = this.props.user || {};
    return user.userID ? <Redirect to='/home' /> : <Landing />;
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setUserToken: setUserToken
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(LandingPage);
