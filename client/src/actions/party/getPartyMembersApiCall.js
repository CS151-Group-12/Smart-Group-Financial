import axios from 'axios';

import {
  attemptGetPartyMembersSuccessfully,
  attemptGetPartyMembersFailed
} from './attemptGetPartyMembersAction';

import { HOST, PARTY_URI } from '../../constant';

// Register
export const attemptGetPartyMembers = partyData => dispatch => {
  return axios
    .post(`${HOST}${PARTY_URI+'/members'}`, partyData)
    .then(res => {
      console.log('attempt get members callAPI');
      console.log(res.data);
      const payload = dispatch(attemptGetPartyMembersSuccessfully(res.data));
      console.log('payload', payload);
      return payload;
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptGetPartyMembersFailed(err));
    });
};