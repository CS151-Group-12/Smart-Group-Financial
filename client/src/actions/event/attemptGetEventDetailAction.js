/* eslint-disable import/prefer-default-export */
import {
  ATTEMPT_GET_EVENT_DETAIL_FAILED,
  ATTEMPT_GET_EVENT_DETAIL_SUCCESSFULLY
} from '../../constant';

export const attemptGetEventDetailFailed = error => ({
  type: ATTEMPT_GET_EVENT_DETAIL_FAILED,
  payload: error
});

export const attemptGetEventDetailSuccessfully = user => ({
  type: ATTEMPT_GET_EVENT_DETAIL_SUCCESSFULLY,
  payload: user
});
