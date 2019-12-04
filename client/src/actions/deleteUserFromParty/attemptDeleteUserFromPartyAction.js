/* eslint-disable import/prefer-default-export */
import {
    ATTEMPT_DELETE_USER_FROM_PARTY_FAILED,
    ATTEMPT_DELETE_USER_FROM_PARTY_SUCCESSFULLY
  } from "../../constant";
  
  export const attemptDeleteUserFromPartyFailed = error => ({
    type: ATTEMPT_DELETE_USER_FROM_PARTY_FAILED,
    payload: error
  });
  
  export const attemptDeleteUserFromPartySuccessfully = members => ({
    type: ATTEMPT_DELETE_USER_FROM_PARTY_SUCCESSFULLY,
    payload: members
  });