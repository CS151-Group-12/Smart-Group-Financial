/* eslint-disable import/prefer-default-export */
import {
  ATTEMPT_EDIT_EVENT_FAILED,
  ATTEMPT_EDIT_EVENT_SUCCESSFULLY
} from '../../constant';

export const attemptEditEventFailed = error => ({
  type: ATTEMPT_EDIT_EVENT_FAILED,
  payload: error
});

export const attemptEditEventSuccessfully = event => ({
  type: ATTEMPT_EDIT_EVENT_SUCCESSFULLY,
  payload: event
});
