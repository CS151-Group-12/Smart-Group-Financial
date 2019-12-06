import React from 'react';
import AddMemberModal from './addMemberModal';

const MembersList = props => {
  return (
    <div className='container'>
      <div className='row valign-wrapper'>
        <div className='col s5'>
          <h3> Party Members </h3>
        </div>
        <AddMemberModal partyID={props.partyID} invite={props.invite} />
      </div>
      <hr></hr>
      <ul className='collection with-header'>
        {props.members.map(member => (
          <li className='collection-item'>
            <div>
              {member.email}
              <button
                className='secondary-content valign-wrapper'
                onClick={() => props.delete(member.userID)}
              >
                <i className='material-icons'>remove</i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MembersList;
