import React, { Component } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import Navbar from './components/headerComponent/Navbar';

import CustomNavbar from './components/headerComponent/CustomNavbar';

import RouterComponent from './route/RouterCompnent.js';

import { setUserToken } from './actions/auth/setUserTokenAction';

import { USER_ID } from './constant';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

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
    const isLogin = user.userID ? true : false;

    return isLogin ? (
      <div>
        <CustomNavbar />
        <RouterComponent isLogin={isLogin} user={user} />
      </div>
    ) : (
      <div>
        <Navbar />
        <RouterComponent isLogin={isLogin} user={user} />
      </div>
    );
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

export default connect(mapStateToProps, matchDispatchToProps)(App);
