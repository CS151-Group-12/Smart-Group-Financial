import React from 'react';
import AddMemberModal from './addMemberModal';

const MembersList = props => {
  return (
    <div className='container'>
      <div class='row valign-wrapper'>
        <div class='col s5'>
          <h3> Party Members </h3>
        </div>
        <AddMemberModal partyID={props.partyID} invite={props.invite} />
      </div>
      <hr></hr>
      <ul class='collection with-header'>
        {props.members.map(member => (
          <li class='collection-item'>
            <div>
              {member.email}
              <button
                class='secondary-content valign-wrapper'
                onClick={() => props.delete(member.userID)}
              >
                <i class='material-icons'>remove</i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MembersList;
