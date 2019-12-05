import React, { Component } from "react";
import { Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { attemptGetPartiesByUserId } from "../apiCall/party/getPartiesByUserIdApiCall";
import { attemptGetEventsByUserId } from "../apiCall/event/getEventsByUserIdApiCall";

import EventsListHome from "../components/party/EventsListHome.js";
import PartiesListHome from "../components/party/PartiesListHome.js";

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
          // console.log(data);
          this.setState({ events: data });
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
          console.log("get party");
          console.log(data);
          this.setState({ ...this.state, ...{ parties: data } });
        }
      })
      .catch(() => {
        // FIX_ME
      });
  }

  render() {
    return (
      <div>
        <EventsListHome
          partyID={this.state.partyID}
          events={this.state.events}
        />
        <PartiesListHome
          partyID={this.state.partyID}
          parties={this.state.parties}
          // events={this.state.events}
        />
      </div>
    );

    // const events = this.state.events || [];
    //const eventsTable = this.state.events || [];
    // const parties = this.state.parties || [];

    // const parties = this.state.parties || [];
    //console.log(events);

    //events.push(<td>{`Column ${i + 1}`}</td>);
    // events.map(event => {
    //   console.log(event);
    // <li>event</li>;
    // });

    // console.log(events[i]);

    // return <div>Hello</div>;

    // return this.state.selectedRow ? (
    //  <Redirect to={`/event/${this.state.selectedRow.eventID}`} />
    // )
    //   <div
    //     style={{ height: "75vh", width: "75vh" }}
    //     className="col s6 container valign-wrapper "
    //   >
    //     <div className="row">
    //       <div className=" center-align">
    //         <div className="col s12">
    //           <ul
    //             style={{ width: "75vh" }}
    //             class="col s12 collection with-header"
    //           >
    //             <li class="collection-header">
    //               <h4>My Groups</h4>
    //             </li>
    //             <li class="collection-item">
    //               <div>
    //                 {this.state.parties}
    //                 for
    //                 <a href="#!" class="secondary-content">
    //                   <i class="material-icons">send</i>
    //                 </a>
    //               </div>
    //             </li>
    //             {/* <li class="collection-item">
    //               <div>
    //                 Group 2
    //                 <a href="#!" class="secondary-content">
    //                   <i class="material-icons">send</i>
    //                 </a>
    //               </div>
    //             </li>
    //             <li class="collection-item">
    //               <div>
    //                 Group 3
    //                 <a href="#!" class="secondary-content">
    //                   <i class="material-icons">send</i>
    //                 </a>
    //               </div>
    //             </li> */}
    //           </ul>
    //         </div>
    //         <div className="col s12">
    //           <ul
    //             style={{ width: "75vh" }}
    //             class="col s12 collection with-header"
    //           >
    //             <li class="collection-header">
    //               <h4>My Events</h4>
    //             </li>
    //             <li class="collection-item">
    //               <div>
    //                 {this.state.events}
    //                 <a href="#!" class="secondary-content">
    //                   <i class="material-icons">send</i>
    //                 </a>
    //               </div>
    //             </li>
    //             {/* <li class="collection-item">
    //               <div>
    //                 Event 2
    //                 <a href="#!" class="secondary-content">
    //                   <i class="material-icons">send</i>
    //                 </a>
    //               </div>
    //             </li>
    //             <li class="collection-item">
    //               <div>
    //                 Event 3
    //                 <a href="#!" class="secondary-content">
    //                   <i class="material-icons">send</i>
    //                 </a>
    //               </div>
    //             </li> */}
    //           </ul>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
  }
}
//Store
function mapStateToProps(state) {
  return {
    user: state.user,
    data: state.user.data
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
