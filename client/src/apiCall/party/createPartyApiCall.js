import axios from 'axios';

import {
  attemptCreatePartySuccessfully,
  attemptCreatePartyFailed
} from '../../actions/party/attemptCreatePartyAction';

import { HOST, PARTY_URI } from '../../constant';

// Create Party
export const attemptCreateParty = partyData => dispatch => {
  return axios
    .post(`${HOST}${PARTY_URI}`, partyData)
    .then(res => {
      return dispatch(attemptCreatePartySuccessfully(res.data));
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptCreatePartyFailed(err));
    });
};
