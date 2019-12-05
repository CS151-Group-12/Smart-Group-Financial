import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { attemptGetPartiesByUserId } from "../apiCall/party/getPartiesByUserIdApiCall";
import { attemptGetEventsByUserId } from "../apiCall/event/getEventsByUserIdApiCall";

import EventsListHome from "../components/party/EventsListHome.js";
import PartiesListHome from "../components/party/PartiesListHome.js";

class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRow: null,
      events: [],
      parties: []
    };
  }

  onRowClick(e, selectedRow) {
    this.setState({ ...this.state, ...{ selectedRow } });
  }

  componentDidMount() {
    this.props.attemptGetEventsByUserId();
    this.props.attemptGetPartiesByUserId();
  }

  render() {
    const user = this.props.user || {};
    const eventList = user.eventList || [];
    const partyList = user.partyList || [];
    return (
      <div>
        <EventsListHome events={eventList} />
        <PartiesListHome parties={partyList} />
      </div>
    );
  }
}
//Store
function mapStateToProps(state) {
  return {
    user: state.user,
    data: state.user.data
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      attemptGetEventsByUserId,
      attemptGetPartiesByUserId
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withRouter(HomePage));
