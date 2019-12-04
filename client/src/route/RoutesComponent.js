import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Page

import LandingPage from '../page/LandingPage';
import RegisterPage from '../page/RegisterPage';
import LoginPage from '../page/LoginPage';
import GroupPage from '../page/GroupPage';
import HomePage from '../page/HomePage';
import EventPage from '../page/EventPage';
import CreateNewCategory from '../components/CreateNewCategory';
import CreateGroupPage from '../page/CreateGroupPage';
import CreateEventPage from '../page/CreateEventPage';

class RoutesComponent extends Component {
  convertToPrivateComponent(component) {
    const user = this.props.user || {};
    if (user.userID || user.email) {
      return component;
    } else {
      return LoginPage;
    }
  }

  render() {
    return (
      <div>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route
          exact
          path='/home'
          component={this.convertToPrivateComponent(HomePage)}
        />
        <Route
          path='/event/:eventID'
          component={this.convertToPrivateComponent(EventPage)}
        />
        <Route
          exact
          path='/new-category-form'
          component={this.convertToPrivateComponent(CreateNewCategory)}
        />
        <Route
          path='/party/:partyID'
          component={this.convertToPrivateComponent(GroupPage)}
        />
        <Route exact path='/creategroup' component={CreateGroupPage} />
        <Route exact path='/createevent' component={CreateEventPage} />
      </div>
    );
  }
}

export default RoutesComponent;
