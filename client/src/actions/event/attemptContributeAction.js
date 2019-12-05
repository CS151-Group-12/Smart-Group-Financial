/* eslint-disable import/prefer-default-export */
import {
  ATTEMPT_CONTRIBUTE_FAILED,
  ATTEMPT_CONTRIBUTE_SUCCESSFULLY
} from '../../constant';

export const attemptContributeFailed = error => ({
  type: ATTEMPT_CONTRIBUTE_FAILED,
  payload: error
});

export const attemptContributeSuccessfully = user => ({
  type: ATTEMPT_CONTRIBUTE_SUCCESSFULLY,
  payload: user
});
