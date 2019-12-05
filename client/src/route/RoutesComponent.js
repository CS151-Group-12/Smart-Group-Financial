import React, { Component } from 'react';
import { Route } from 'react-router-dom';

// Page

import LandingPage from '../page/LandingPage';
import RegisterPage from '../page/RegisterPage';
import LoginPage from '../page/LoginPage';
import PartyPage from '../page/PartyPage';
import HomePage from '../page/HomePage';
import EventPage from '../page/EventPage';
import ResultsPage from '../page/ResultsPage';
import CreatePartyPage from '../page/CreatePartyPage';
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
        <Route exact path='/' component={LandingPage} />
        <Route exact path='/register' component={RegisterPage} />
        <Route exact path='/login' component={LoginPage} />
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
          path='/party/:partyID'
          component={this.convertToPrivateComponent(PartyPage)}
        />
        <Route
          exact
          path='/createparty/:userID'
          component={this.convertToPrivateComponent(CreatePartyPage)}
        />
        <Route
          exact
          path='/createparty'
          component={this.convertToPrivateComponent(CreatePartyPage)}
        />
        <Route
          exact
          path='/create-event'
          component={this.convertToPrivateComponent(CreateEventPage)}
        />
        <Route
          exact
          path='/results/:eventID'
          component={this.convertToPrivateComponent(ResultsPage)}
        />
      </div>
    );
  }
}

export default RoutesComponent;
