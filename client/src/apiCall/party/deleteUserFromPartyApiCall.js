import axios from 'axios';

import {
  attemptDeleteUserFromPartySuccessfully,
  attemptDeleteUserFromPartyFailed
} from '../../actions/party/attemptDeleteUserFromPartyAction';

import { HOST, PARTY_URI } from '../../constant';

// Delete user from party
export const attemptDeleteUserFromParty = data => dispatch => {
  return axios
    .post(`${HOST}${PARTY_URI + '/removeUser'}`, data)
    .then(res => {
      const payload = dispatch(
        attemptDeleteUserFromPartySuccessfully(res.data)
      );
      return payload;
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptDeleteUserFromPartyFailed(err));
    });
};
