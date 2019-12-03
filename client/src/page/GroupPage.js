import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Redirect, withRouter } from "react-router-dom";

import { attemptGetPartyMembers } from "../actions/party/getPartyMembersApiCall";
import { attemptGetPartyEvents } from "../actions/party/getPartyEventsApiCall";
import { attemptInvitePartyMember } from "../actions/party/invitePartyMemberApiCall";

import EventsList from '../components/group_page/EventsList.js';
import Memberslist from '../components/group_page/MembersList.js';

class GroupPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            partyID: this.props.partyID,
            partyName: this.props.partyName,
            events: [],
            members: [],
            errors: {}
        };
        // this.onEventClick = this.onClick.bind(this);
    }
    
    async componentWillMount() {
        this.props.attemptGetPartyMembers(this.state)
            .then(res => {
                this.setState({
                    members: res.payload
                });
            });
    
        this.props.attemptGetPartyEvents(this.state)
            .then(res => {
                this.setState({
                events: res.payload
                });
            });
    }

    // onEventClick = e => {
    //     //e.preventDefault();
    // }

    render() {
        return (
            <div>
                <h1>{this.state.partyName}</h1> 
                <EventsList events={this.state.events}/>
                <Memberslist 
                    partyID={this.state.partyID} 
                    members={this.state.members} 
                    invite={this.props.attemptInvitePartyMember}
                />
            </div>
        )
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
    return bindActionCreators({ 
        attemptGetPartyEvents,
        attemptGetPartyMembers,
        attemptInvitePartyMember
     }, dispatch);
}
  
export default connect(
    mapStateToProps,
    matchDispatchToProps
  )(withRouter(GroupPage));
