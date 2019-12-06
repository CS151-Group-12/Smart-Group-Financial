import axios from 'axios';

import {
  attemptJoinPartySuccessfully,
  attemptJoinPartyFailed
} from '../../actions/party/attemptJoinPartyAction';

import { HOST, PARTY_URI } from '../../constant';

// Join Party
export const attemptJoinParty = partyData => dispatch => {
  return axios
    .post(`${HOST}${PARTY_URI}/join`, partyData)
    .then(res => {
      return dispatch(attemptJoinPartySuccessfully(res.data));
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptJoinPartyFailed(err));
    });
};
