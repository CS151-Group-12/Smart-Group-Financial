import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { USER_ID } from '../../constant';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { attemptLogout } from '../../actions/attemptLogoutAction';

class CustomNavbar extends Component {
  logout() {
    localStorage.removeItem(USER_ID);
    this.props.attemptLogout();
  }
  render() {
    return (
      <div className='navbar-fixed'>
        <nav className='z-depth-0'>
          <div className='nav-wrapper white'>
            <a
              href='/'
              style={{
                fontFamily: 'monospace'
              }}
              className='brand-logo black-text'
            >
              <i className='material-icons'>code</i>
              Smart Group Financial
            </a>
            <ul className='right'>
              <li>
                <a
                  href='/'
                  style={{
                    fontFamily: 'monospace'
                  }}
                  className=' right black-text'
                >
                  Create Group
                </a>
              </li>
              <li>
                <a
                  href='/'
                  style={{
                    fontFamily: 'monospace'
                  }}
                  className=' right black-text'
                >
                  Create Event
                </a>
              </li>
              <li>
                <a
                  href='/'
                  onClick={() => this.logout()}
                  style={{
                    fontFamily: 'monospace'
                  }}
                  className=' right black-text'
                >
                  Logout
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      attemptLogout: attemptLogout
    },
    dispatch
  );
}

export default connect(null, matchDispatchToProps)(CustomNavbar);
