/* eslint-disable import/prefer-default-export */
import {
  ATTEMPT_CREATE_EVENT_FAILED,
  ATTEMPT_CREATE_EVENT_SUCCESSFULLY
} from "../../constant";

export const attemptCreateEventFailed = error => ({
  type: ATTEMPT_CREATE_EVENT_FAILED,
  payload: error
});

export const attemptCreateEventSuccessfully = user => ({
  type: ATTEMPT_CREATE_EVENT_SUCCESSFULLY,
  payload: user
});
