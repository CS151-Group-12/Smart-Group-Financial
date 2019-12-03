import axios from 'axios';

import {
  attemptInvitePartyMemberSuccessfully,
  attemptInvitePartyMemberFailed
} from './attemptInvitePartyMemberAction';

import { HOST, PARTY_URI } from '../../constant';

// Register
export const attemptInvitePartyMember = userData => dispatch => {
  return axios
    .post(`${HOST}${PARTY_URI+'/invite'}`, userData)
    .then(res => {
      console.log('attempt Invite member callAPI');
      console.log(res.data);
      const payload = dispatch(attemptInvitePartyMemberSuccessfully(res.data));
      return payload;
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptInvitePartyMemberFailed(err));
    });
};