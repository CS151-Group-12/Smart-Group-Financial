/* eslint-disable import/prefer-default-export */
import {
  ATTEMPT_CREATE_PARTY_FAILED,
  ATTEMPT_CREATE_PARTY_SUCCESSFULLY
} from '../../constant';

export const attemptCreatePartyFailed = error => ({
  type: ATTEMPT_CREATE_PARTY_FAILED,
  payload: error
});

export const attemptCreatePartySuccessfully = user => ({
  type: ATTEMPT_CREATE_PARTY_SUCCESSFULLY,
  payload: user
});
