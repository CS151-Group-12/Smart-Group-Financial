/* eslint-disable import/prefer-default-export */
import {
  ATTEMPT_GET_RESULT_FAILED,
  ATTEMPT_GET_RESULT_SUCCESSFULLY
} from '../../constant';

export const attemptGetResultFailed = error => ({
  type: ATTEMPT_GET_RESULT_FAILED,
  payload: error
});

export const attemptGetResultSuccessfully = user => ({
  type: ATTEMPT_GET_RESULT_SUCCESSFULLY,
  payload: user
});
