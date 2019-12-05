/* eslint-disable import/prefer-default-export */
import {
  ATTEMPT_GET_PARTY_SUCCESSFULLY,
  ATTEMPT_GET_PARTY_FAILED
} from "../../constant";

export const attemptGetPartyFailed = error => ({
  type: ATTEMPT_GET_PARTY_FAILED,
  payload: error
});

export const attemptGetPartySuccessfully = user => ({
  type: ATTEMPT_GET_PARTY_SUCCESSFULLY,
  payload: user
});
