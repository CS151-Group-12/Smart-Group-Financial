/* eslint-disable import/prefer-default-export */
import {
  ATTEMPT_CALCULATE_FAILED,
  ATTEMPT_CALCULATE_SUCCESSFULLY
} from '../../constant';

export const attemptCalculateFailed = error => ({
  type: ATTEMPT_CALCULATE_FAILED,
  payload: error
});

export const attemptCalculateSuccessfully = user => ({
  type: ATTEMPT_CALCULATE_SUCCESSFULLY,
  payload: user
});
