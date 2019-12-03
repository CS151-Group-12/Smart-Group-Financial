import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';

import { attemptContribute } from '../actions/attemptContribute/contributeApiCall';
import { attemptCalculate } from '../actions/attemptCalculate/calculateApiCall';
import { attemptGetEventDetail } from '../actions/attemptgetEventDetail/getEventDetailApiCall';

import Event from '../components/Event';

import { getTokenFromLocalStorage } from '../utils';

class EventPage extends Component {
  constructor() {
    super();
    this.state = {
      categories: {},
      errors: {}
    };
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  async componentDidMount() {
    const { eventID } = this.props.match.params;
    this.props.attemptGetEventDetail(eventID);
  }

  onClickCalculate = e => {
    e.preventDefault();
    console.log('calculate');

    this.props.attemptCalculate({
      average: this.state.average,
      userID: getTokenFromLocalStorage('userID')
    });
  };

  render() {
    const user = this.props.user || {};
    const categoryList = [];
    const list = user.list || {};
    const categoryArray = Object.keys(list).map(i => list[i]);
    let i = 1;
    categoryArray.map(categoryItem => {
      const newCategory = [
        i,
        categoryItem.email,
        categoryItem.category,
        categoryItem.amount
      ];
      categoryList.push(newCategory);
      i += 1;
    });

    const columns = ['ID', 'Name', 'Category', 'Amount Money'];
    const options = { filterType: 'checkbox' };

    return (
      <Event
        data={categoryList}
        columns={columns}
        options={options}
        onClickCalculate={e => this.onClickCalculate(e)}
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
  return bindActionCreators(
    { attemptCalculate, attemptContribute, attemptGetEventDetail },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withRouter(EventPage));
