import React, { Component } from "react";

class CreatePartyPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      partyID: null
    };
  }
  handleParty = partyID => {
    this.setState({
      partyID
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
                  />
                </div>

                <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                  <button
                    onClick={() => this.props.handleParty(this.props.orderID)}
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

export default CreatePartyPage;
