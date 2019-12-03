import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Redirect, withRouter } from 'react-router-dom';

import { attemptContribute } from '../actions/attemptContribute/contributeApiCall';

import CreateNewCategory from '../components/CreateNewCategory.js';

class CreateNewCategoryPage extends Component {
  constructor() {
    super();
    this.state = {
      category: '',
      moneyAmount: '',
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

    this.props.attemptContribute({
      name: this.props.user,
      moneyAmount: this.state.moneyAmount,
      userID: getTokenFromLocalStorage('userID')
    });
  };

  render() {
    console.log('create new category');
    const errors = { ...this.state.errors };
    const category = { ...this.state.category };
    const moneyAmount = { ...this.state.moneyAmount };
    const user = this.props.user || {};

    return user.data.insertID ? (
      <Redirect to='/home' />
    ) : (
      <CreateNewCategory
        onChange={e => this.onChange(e)}
        onClick={e => this.onClick(e)}
        category={category}
        moneyAmount={moneyAmount}
        errors={errors}
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
  return bindActionCreators({ attemptContribute }, dispatch);
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withRouter(CreateNewCategoryPage));
