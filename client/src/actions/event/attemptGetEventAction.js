/* eslint-disable import/prefer-default-export */
import {
  ATTEMPT_GET_EVENT_SUCCESSFULLY,
  ATTEMPT_GET_EVENT_FAILED
} from "../../constant";

export const attemptGetEventFailed = error => ({
  type: ATTEMPT_GET_EVENT_FAILED,
  payload: error
});

export const attemptGetEventSuccessfully = user => ({
  type: ATTEMPT_GET_EVENT_SUCCESSFULLY,
  payload: user
});
