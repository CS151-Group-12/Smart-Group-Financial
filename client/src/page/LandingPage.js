import React, { Component } from 'react';
import Landing from '../components/headerComponent/Landing';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';

class LandingPage extends Component {
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
  return bindActionCreators({}, dispatch);
}

export default connect(mapStateToProps, matchDispatchToProps)(LandingPage);
