import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import Results from '../components/event/Results';

import { attemptGetResult } from '../apiCall/event/getResultApiCall';

class ResultsPage extends Component {
  constructor(props) {
    super(props);
    const { eventID } = this.props.match.params;
    this.state = {
      users: {},
      eventID: eventID,
      list: [],
      errors: {}
    };
  }

  componentDidMount() {
    this.props.attemptGetResult({ eventID: this.state.eventID });
  }

  render() {
    const user = this.props.user || {};
    const list = user.resultList || {};
    const resultArray = [];
    const userArray = Object.keys(list).map(i => list[i]);
    let i = 1;
    userArray.map(user => {
      const newRow = [i, user.payee, user.recipient, user.amount];
      resultArray.push(newRow);
      i += 1;
    });

    const columns = [
      'Number',
      'Payee Email',
      'Recipient Email',
      'Amount Money'
    ];

    return (
      <Results
        data={resultArray}
        eventID={this.state.eventID}
        columns={columns}
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
  return bindActionCreators({ attemptGetResult }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withRouter(ResultsPage));
