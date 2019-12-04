import React, { Component } from "react";

class AddMemberForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        partyID: this.props.partyID,
        invite: this.props.invite,
        email: "",
        errors: {}
    };

    this.onChange = this.onChange.bind(this);
  }

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-6 mt-5 mx-auto">
            <form noValidate>
              <h5 className="h3 mb-3 font-weight-normal">Add New Member</h5>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="text"
                  className="form-control"
                  name="email"
                  placeholder="Enter Email"
                  value={this.state.email}
                  onChange={this.onChange}
                />
              </div>
              <button
                onClick={() => this.state.invite(this.state)}
                className="btn btn-lg btn-primary btn-block"
              >
                Invite
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default AddMemberForm;