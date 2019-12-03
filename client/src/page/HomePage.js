import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { attemptGetPartiesByUserId } from '../actions/homePage/getPartiesByUserIdApiCall';
import { attemptGetEventsByUserId } from '../actions/homePage/getEventsByUserIdApiCall';

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

  async componentWillMount() {
    this.props
      .attemptGetEventsByUserId()
      .then(res => {
        if (res.status === 200) {
          const data = res.data || {};
          this.setState({ ...this.state, ...{ events: data } });
        }
      })
      .catch(() => {
        // FIX_ME
      });

    this.props
      .attemptGetPartiesByUserId()
      .then(res => {
        if (res.status === 200) {
          const data = res.data || {};
          this.setState({ ...this.state, ...{ parties: data } });
        }
      })
      .catch(() => {
        // FIX_ME
      });
  }

  render() {
    return this.state.selectedRow ? (
      <Redirect to={`/event/${this.state.selectedRow.eventID}`} />
    ) : (
      <div
        style={{ height: '75vh', width: '75vh' }}
        className='container valign-wrapper '
      >
        <div className='row'>
          <div className=' center-align'>
            <div className='col s6'>
              <ul
                style={{ width: '75vh' }}
                class='col s6 collection with-header'
              >
                <li class='collection-header'>
                  <h4>My Groups</h4>
                </li>
                <li class='collection-item'>
                  <div>
                    Group 1
                    <a href='#!' class='secondary-content'>
                      <i class='material-icons'>send</i>
                    </a>
                  </div>
                </li>
                <li class='collection-item'>
                  <div>
                    Group 2
                    <a href='#!' class='secondary-content'>
                      <i class='material-icons'>send</i>
                    </a>
                  </div>
                </li>
                <li class='collection-item'>
                  <div>
                    Group 3
                    <a href='#!' class='secondary-content'>
                      <i class='material-icons'>send</i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className='col s6'>
              <ul
                style={{ width: '75vh' }}
                class='col s6 collection with-header'
              >
                <li class='collection-header'>
                  <h4>My Events</h4>
                </li>
                <li class='collection-item'>
                  <div>
                    Event 1
                    <a href='#!' class='secondary-content'>
                      <i class='material-icons'>send</i>
                    </a>
                  </div>
                </li>
                <li class='collection-item'>
                  <div>
                    Event 2
                    <a href='#!' class='secondary-content'>
                      <i class='material-icons'>send</i>
                    </a>
                  </div>
                </li>
                <li class='collection-item'>
                  <div>
                    Event 3
                    <a href='#!' class='secondary-content'>
                      <i class='material-icons'>send</i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
//Store
function mapStateToProps(state) {
  return {
    user: state.user
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
