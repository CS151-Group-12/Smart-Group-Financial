import React, { Component } from 'react';
import { USER_ID } from '../../constant';
import { connect } from 'react-redux';

import { bindActionCreators } from 'redux';
import { attemptLogout } from '../../actions/auth/attemptLogoutAction';

class CustomNavbar extends Component {
  constructor(props) {
    super(props);
  }

  logout() {
    localStorage.removeItem(USER_ID);
    this.props.attemptLogout();
  }
  render() {
    const user = this.props.user || {};
    const { email } = user;
    return (
      <div className='navbar-fixed'>
        <nav className='z-depth-0'>
          <div className='nav-wrapper white'>
            <a
              href='/'
              style={{ fontFamily: 'monospace' }}
              className='brand-logo black-text'
            >
              <i className='material-icons'>code</i>
              Smart Party Financial
            </a>
            <ul className='right'>
              <li>
                <a
                  href={'/createparty/'+this.props.user.userID}
                  style={{
                    fontFamily: 'monospace'
                  }}
                  className=' right black-text'
                >
                  Create Party
                </a>
              </li>
              <li>
                <a
                  href='/create-event'
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

// Store
function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      attemptLogout: attemptLogout
    },
    dispatch
  );
}

export default connect(mapStateToProps, matchDispatchToProps)(CustomNavbar);
