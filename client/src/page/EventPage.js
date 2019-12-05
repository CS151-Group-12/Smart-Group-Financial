import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';

import { attemptContribute } from '../apiCall/event/contributeApiCall';
import { attemptCalculate } from '../apiCall/event/calculateApiCall';
import { attemptGetEventDetail } from '../apiCall/event/getEventDetailApiCall';
import { attemptEditEvent } from '../apiCall/event/editEventApiCall';

import Event from '../components/event/Event';

import { getTokenFromLocalStorage } from '../utils';

class EventPage extends Component {
  constructor(props) {
    super(props);
    const { eventID } = this.props.match.params;
    this.state = {
      eventID: eventID,
      categories: [],
      calculateSuccess: false,
      errors: {}
    };

    this.onClick = this.onClickCalculate.bind(this);
  }

  onChange = e => {
    this.setState({ [e.target.id]: e.target.value });
  };

  async componentDidMount() {
    this.props.attemptGetEventDetail(this.state.eventID).then(res => {
      this.setState({ calculateSuccess: false });
    });
  }

  onClickContribute = e => {
    e.preventDefault();
    this.props.attemptContribute();
  };

  onClickCalculate = e => {
    e.preventDefault();
    this.props
      .attemptCalculate({
        average: this.state.average,
        eventID: this.state.eventID,
        userID: getTokenFromLocalStorage('userID')
      })
      .then(res => {
        if (res.data.message === true) {
          this.setState({ calculateSuccess: true });
        }
      });
  };

  render() {
    const user = this.props.user || {};
    const categories = [];
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
      categories.push(newCategory);
      i += 1;
    });

    const columns = ['ID', 'Name', 'Category', 'Amount Money'];
    const options = { filterType: 'checkbox' };

    return this.state.calculateSuccess ? (
      <Redirect to={`/results/${this.state.eventID}`} />
    ) : (
      <Event
        data={categories}
        columns={columns}
        options={options}
        eventID={this.state.eventID}
        contribute={this.props.attemptContribute}
        calculate={e => this.onClickCalculate(e)}
        edit={this.props.attemptEditEvent}
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
    {
      attemptCalculate,
      attemptContribute,
      attemptGetEventDetail,
      attemptEditEvent
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withRouter(EventPage));
