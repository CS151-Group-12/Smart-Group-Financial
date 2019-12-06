import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';

import { attemptJoinEvent } from '../apiCall/event/joinEventApiCall';
import { getTokenFromLocalStorage } from '../utils';
import JoinEvent from '../components/event/JoinEvent';

class JoinEventPage extends Component {
  constructor() {
    super();
    this.state = {
      name: ''
    };

    this.joinEvent = this.joinEvent.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  joinEvent = e => {
    e.preventDefault();
    this.props.attemptJoinEvent({
      name: this.state.name,
      userID: getTokenFromLocalStorage('userID')
    });
  };

  render() {
    const user = this.props.user || {};
    const name = { ...this.state.name };

    const { foundEvent } = user;
    return foundEvent ? (
      <Redirect to={`/event/${foundEvent[0].eventID}`} />
    ) : (
      // return (
      <div>
        <JoinEvent
          name={name}
          onChange={e => this.onChange(e)}
          onClick={e => this.joinEvent(e)}
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
  return bindActionCreators({ attemptJoinEvent }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withRouter(JoinEventPage));
