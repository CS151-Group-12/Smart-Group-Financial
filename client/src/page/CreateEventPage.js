import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';

import { attemptCreateEvent } from '../apiCall/event/createEventApiCall';

import CreateEvent from '../components/event/CreateEvent';
import { getTokenFromLocalStorage } from '../utils';

class CreateEventPage extends Component {
  constructor() {
    super();
    this.state = {
      name: '',
      location: '',
      startdate: '',
      endDate: '',
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

    this.props.attemptCreateEvent({
      name: this.state.name,
      startDate: this.state.startDate,
      endDate: this.state.endDate,
      location: this.state.location,
      userID: getTokenFromLocalStorage('userID')
    });
  };
  render() {
    const user = this.props.user || {};
    const name = { ...this.state.name };
    const location = { ...this.state.location };
    const startDate = { ...this.state.startDate };
    const endDate = { ...this.state.endDate };
    const { createdEvent } = user;

    return createdEvent ? (
      <Redirect to={`/event/${createdEvent[0].eventID}`} />
    ) : (
      <div>
        <CreateEvent
          name={name}
          location={location}
          startDate={startDate}
          endDate={endDate}
          onChange={e => this.onChange(e)}
          onClick={e => this.onClick(e)}
        />
      </div>
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
  return bindActionCreators({ attemptCreateEvent }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withRouter(CreateEventPage));
