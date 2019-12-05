import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import { attemptCreateParty } from '../apiCall/party/createPartyApiCall';
class CreatePartyPage extends Component {
  constructor(props) {
    super(props);
    const { userID } = this.props.match.params;
    
    this.state = {
      userID: userID,
      name: ''
    };

    this.handleParty = this.handleParty.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleParty() {
    this.props.attemptCreateParty(this.state)
      .then(res => {
        console.log(res);
      });
  };

  render() {
    return (
      <div className="center-align">
        <div
          style={{ height: "75vh", width: "75vh" }}
          className="container valign-wrapper "
        >
          <div style={{ marginTop: "4rem" }} className="row">
            <div className="col s12 ">
              <form className="col s12">
                <div className="input-field col s12">
                  <input
                    placeholder="Party Name"
                    type="text"
                    className="validate"
                    value={this.state.name}
                    name='name'
                    onChange={this.onChange}
                  />
                </div>

                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <button
                    onClick={this.handleParty}
                    style={{
                      width: "120px",
                      borderRadius: "2px",
                      letterSpacing: "1.5px",
                      marginTop: "1rem"
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Create Party
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      attemptCreateParty
    },
    dispatch
  );
}

export default connect(
  mapStateToProps,
  matchDispatchToProps
)(withRouter(CreatePartyPage));
