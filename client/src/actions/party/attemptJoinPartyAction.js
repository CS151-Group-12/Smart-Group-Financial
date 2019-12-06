/* eslint-disable import/prefer-default-export */
import {
  ATTEMPT_JOIN_PARTY_FAILED,
  ATTEMPT_JOIN_PARTY_SUCCESSFULLY
} from '../../constant';

export const attemptJoinPartyFailed = error => ({
  type: ATTEMPT_JOIN_PARTY_FAILED,
  payload: error
});

export const attemptJoinPartySuccessfully = user => ({
  type: ATTEMPT_JOIN_PARTY_SUCCESSFULLY,
  payload: user
});
