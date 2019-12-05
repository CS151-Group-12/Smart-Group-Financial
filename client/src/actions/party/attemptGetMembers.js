/* eslint-disable import/prefer-default-export */
import {
  ATTEMPT_GET_PARTY_MEMBERS_FAILED,
  ATTEMPT_GET_PARTY_MEMBERS_SUCCESSFULLY
} from '../../constant';

export const attemptGetMembersFailed = error => ({
  type: ATTEMPT_GET_PARTY_MEMBERS_FAILED,
  payload: error
});

export const attemptGetMembersSuccessfully = members => ({
  type: ATTEMPT_GET_PARTY_MEMBERS_SUCCESSFULLY,
  payload: members
});
