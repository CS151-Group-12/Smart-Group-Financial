import React, { Component } from 'react';
import { Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { attemptGetPartiesByUserId } from '../apiCall/party/getPartiesByUserIdApiCall';
import { attemptGetEventsByUserId } from '../apiCall/event/getEventsByUserIdApiCall';

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

  async componentDidMount() {
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
                className='col s6 collection with-header'
              >
                <li className='collection-header'>
                  <h4>My Partys</h4>
                </li>
                <li className='collection-item'>
                  <div>
                    Party 1
                    <a href='#!' className='secondary-content'>
                      <i className='material-icons'>send</i>
                    </a>
                  </div>
                </li>
                <li className='collection-item'>
                  <div>
                    Party 2
                    <a href='#!' className='secondary-content'>
                      <i className='material-icons'>send</i>
                    </a>
                  </div>
                </li>
                <li className='collection-item'>
                  <div>
                    Party 3
                    <a href='#!' className='secondary-content'>
                      <i className='material-icons'>send</i>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
            <div className='col s6'>
              <ul
                style={{ width: '75vh' }}
                className='col s6 collection with-header'
              >
                <li className='collection-header'>
                  <h4>My Events</h4>
                </li>
                <li className='collection-item'>
                  <div>
                    Event 1
                    <a href='#!' className='secondary-content'>
                      <i className='material-icons'>send</i>
                    </a>
                  </div>
                </li>
                <li className='collection-item'>
                  <div>
                    Event 2
                    <a href='#!' className='secondary-content'>
                      <i className='material-icons'>send</i>
                    </a>
                  </div>
                </li>
                <li className='collection-item'>
                  <div>
                    Event 3
                    <a href='#!' className='secondary-content'>
                      <i className='material-icons'>send</i>
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
