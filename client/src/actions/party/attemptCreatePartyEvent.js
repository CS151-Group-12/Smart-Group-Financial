/* eslint-disable import/prefer-default-export */
import {
  ATTEMPT_CREATE_PARTY_EVENT_FAILED,
  ATTEMPT_CREATE_PARTY_EVENT_SUCCESSFULLY
} from '../../constant';

export const attemptCreatePartyEventFailed = error => ({
  type: ATTEMPT_CREATE_PARTY_EVENT_FAILED,
  payload: error
});

export const attemptCreatePartyEventSuccessfully = events => ({
  type: ATTEMPT_CREATE_PARTY_EVENT_SUCCESSFULLY,
  payload: events
});
