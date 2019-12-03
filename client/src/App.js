import React, { Component } from 'react';

import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

import Navbar from './components/Navbar';

import CustomNavbar from './components/headerComponent/CustomNavbar';

import RouterComponent from './route/RouterCompnent.js';

import { setUserToken } from './actions/setUserTokenAction';

import { getUserIdentity } from './actions/getUserIdentity';

import { USER_ID } from './constant';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentWillMount() {
    const userID = localStorage.getItem(USER_ID);
    console.log('get token');
    if (userID) {
      console.log(`has token ${userID}`);
      this.props.setUserToken({
        userID
      });

      this.props.getUserIdentity(userID);
    }
  }

  render() {
    const user = this.props.user || {};
    const isLogin = user.userID ? true : false;

    return isLogin ? (
      <div>
        <CustomNavbar onClick={this.logout} />
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
      getUserIdentity: getUserIdentity,
      setUserToken: setUserToken
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(App);
