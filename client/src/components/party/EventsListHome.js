import React from 'react';
import { Link } from 'react-router-dom';

//import AddEventModal from "./addEventModal";

const EventsListHome = props => {
  return (
    <div className='container'>
      <div className='col s6 valign-wrapper'>
        <div className='col s12'>
          <h3
            style={{
              fontFamily: 'monospace'
            }}
            className='brand-logo black-text'
          >
            My Events
          </h3>
        </div>
      </div>
      <hr></hr>
      <div className='row'>
        {props.events.map(event => (
          <div className='col s1 m3'>
            <div className='card small teal darken-2 z-depth-3'>
              <div className='card-content white-text'>
                <span className='card-title'>{event.name}</span>
                <ul>
                  <li>Start Date: {event.startDate}</li>
                  <li>End Date: {event.endDate}</li>
                  <li>Location: {event.location}</li>
                </ul>
              </div>
              <div className='card-action'>
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

export default EventsListHome;
