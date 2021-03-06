import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';

import { attemptCreateParty } from '../apiCall/party/createPartyApiCall';
import { getTokenFromLocalStorage } from '../utils';
import CreateParty from '../components/party/CreateParty';

class CreatePartyPage extends Component {
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
    this.props.attemptCreateParty({
      name: this.state.name,
      userID: getTokenFromLocalStorage('userID')
    });
  };

  render() {
    const user = this.props.user || {};
    const name = { ...this.state.name };

    const { createdParty } = user;
    return createdParty ? (
      <Redirect to={`/party/${createdParty[0].partyID}`} />
    ) : (
      <div>
        <CreateParty
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
  return bindActionCreators({ attemptCreateParty }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withRouter(CreatePartyPage));
