/* eslint-disable import/prefer-default-export */
import {
    ATTEMPT_INVITE_PARTY_MEMBER_FAILED,
    ATTEMPT_INVITE_PARTY_MEMBER_SUCCESSFULLY
  } from '../../constant';
  
  export const attemptInvitePartyMemberFailed = error => ({
    type: ATTEMPT_INVITE_PARTY_MEMBER_FAILED,
    payload: error
  });
  
  export const attemptInvitePartyMemberSuccessfully = member => ({
    type: ATTEMPT_INVITE_PARTY_MEMBER_SUCCESSFULLY,
    payload: member
  });