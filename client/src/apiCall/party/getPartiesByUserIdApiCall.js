import axios from 'axios';

import { HOST, PARTY_URI } from '../../constant';

import {
  attemptGetPartySuccessfully,
  attemptGetPartyFailed
} from '../../actions/party/attemptGetPartyAction';

// Contribute
export const attemptGetPartiesByUserId = userData => dispatch => {
  axios
    .get(`${HOST}${PARTY_URI}/${userData.userID}`)
    .then(res => {
      return dispatch(attemptGetPartySuccessfully(res.data));
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptGetPartyFailed(err));
    });
};
