import React from 'react';
import { Link } from 'react-router-dom';

import AddEventModal from './addEventModal';

const EventsList = props => {
  return (
    <div className='container'>
      <div class='row valign-wrapper'>
        <div class='col s5'>
          <h3> Events </h3>
        </div>
        <AddEventModal partyID={props.partyID} create={props.create} />
      </div>
      <hr></hr>
      <div class='row'>
        {props.events.map(event => (
          <div class='col s1 m3'>
            <div class='card small teal darken-2 z-depth-3'>
              <div class='card-content white-text'>
                <span class='card-title'>{event.name}</span>
                <ul>
                  <li>{event.location}</li>
                  <li>Start Date: {event.startDate}</li>
                  <li>End Date: {event.endDate}</li>
                </ul>
              </div>
              <div class='card-action'>
                <Link
                  to={{
                    pathname: '/event/' + event.eventID
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

export default EventsList;
