/* eslint-disable import/prefer-default-export */
import {
  ATTEMPT_JOIN_EVENT_FAILED,
  ATTEMPT_JOIN_EVENT_SUCCESSFULLY
} from '../../constant';

export const attemptJoinEventFailed = error => ({
  type: ATTEMPT_JOIN_EVENT_FAILED,
  payload: error
});

export const attemptJoinEventSuccessfully = user => ({
  type: ATTEMPT_JOIN_EVENT_SUCCESSFULLY,
  payload: user
});
