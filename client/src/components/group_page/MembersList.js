import React, { Component } from 'react';
import AddMemberModal from './addMemberModal';

const MembersList = props => {
    return ( 
        <div>
            <div class='row valign-wrapper'>
                <div class="col s5">
                    <h3> Group Members </h3>
                </div>
                <AddMemberModal 
                    partyID={props.partyID}
                    invite={props.invite}
                />
            </div>
            <hr></hr>
            <ul class="collection with-header">
                {props.members.map(member =>  
                    <li class="collection-item"><div>{member.email}</div></li>
                )}
            </ul>
        </div>
    );
}

export default MembersList;
