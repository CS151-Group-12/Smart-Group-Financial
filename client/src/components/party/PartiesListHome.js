import React from "react";
import { Link } from "react-router-dom";

const PartiesListHome = props => {
  return (
    <div>
      <div className="col s6 container valign-wrapper">
        <div className="col s12">
          <h3
            style={{
              fontFamily: "monospace"
            }}
            className="brand-logo black-text"
          >
            My Parties
          </h3>
        </div>
      </div>
      <hr></hr>
      <div className="row">
        {props.parties.map(party => (
          <div className="col s1 m3">
            <div className="card small teal darken-2 z-depth-3">
              <div className="card-content white-text">
                {/* <span className="card-title">{party.name}</span> */}
                <ul>
                  <li>{party.name}</li>
                  {/* <li>Start Date: {even.startDate}</li>
                  <li>End Date: {event.endDate}</li> */}
                </ul>
              </div>
              <div className="card-action">
                <Link
                  to={{
                    pathname: "/party/" + party.partyID
                  }}
                >
                  View
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartiesListHome;
