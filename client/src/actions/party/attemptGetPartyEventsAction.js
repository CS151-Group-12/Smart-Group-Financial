/* eslint-disable import/prefer-default-export */
import {
    ATTEMPT_GET_PARTY_EVENTS_FAILED,
    ATTEMPT_GET_PARTY_EVENTS_SUCCESSFULLY
  } from '../../constant';
  
  export const attemptGetPartyEventsFailed = error => ({
    type: ATTEMPT_GET_PARTY_EVENTS_FAILED,
    payload: error
  });
  
  export const attemptGetPartyEventsSuccessfully = events => ({
    type: ATTEMPT_GET_PARTY_EVENTS_SUCCESSFULLY,
    payload: events
  });