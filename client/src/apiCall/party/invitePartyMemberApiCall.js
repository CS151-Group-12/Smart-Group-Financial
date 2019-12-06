import axios from 'axios';

import {
  attemptInvitePartyMemberSuccessfully,
  attemptInvitePartyMemberFailed
} from '../../actions/party/attemptInvitePartyMemberAction';

import { HOST, PARTY_URI } from '../../constant';

// Invite user to party
export const attemptInvitePartyMember = userData => dispatch => {
  return axios
    .post(`${HOST}${PARTY_URI + '/invite'}`, userData)
    .then(res => {
      const payload = dispatch(attemptInvitePartyMemberSuccessfully(res.data));
      return payload;
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptInvitePartyMemberFailed(err));
    });
};
