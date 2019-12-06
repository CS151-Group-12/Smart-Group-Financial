import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';

import { attemptJoinParty } from '../apiCall/party/joinPartyApiCall';
import { getTokenFromLocalStorage } from '../utils';
import JoinParty from '../components/party/JoinParty';

class JoinPartyPage extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };

    this.handleParty = this.handleParty.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  handleParty = e => {
    e.preventDefault();
    this.props.attemptJoinParty({
      name: this.state.name,
      userID: getTokenFromLocalStorage('userID')
    });
  };

  render() {
    const user = this.props.user || {};
    const name = { ...this.state.name };

    const { foundParty } = user;
    return foundParty ? (
      <Redirect to={`/party/${foundParty[0].partyID}`} />
    ) : (
      // return (
      <div>
        <JoinParty
          name={name}
          onChange={e => this.onChange(e)}
          onClick={e => this.handleParty(e)}
        />
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
  return bindActionCreators({ attemptJoinParty }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withRouter(JoinPartyPage));
