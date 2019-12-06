import axios from 'axios';

import {
  attemptGetPartyMembersSuccessfully,
  attemptGetPartyMembersFailed
} from '../../actions/party/attemptGetPartyMembersAction';

import { HOST, PARTY_URI } from '../../constant';

// Register
export const attemptGetPartyMembers = partyData => dispatch => {
  return axios
    .post(`${HOST}${PARTY_URI + '/members'}`, partyData)
    .then(res => {
      const payload = dispatch(attemptGetPartyMembersSuccessfully(res.data));
      return payload;
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptGetPartyMembersFailed(err));
    });
};
