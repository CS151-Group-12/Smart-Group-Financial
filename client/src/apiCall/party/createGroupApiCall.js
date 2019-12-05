import axios from 'axios';

import {
  attemptCreatePartySuccessfully,
  attemptCreatePartyFailed
} from '../../actions/party/attemptCreateParty';

import { HOST, PARTYS_URI } from '../../constant';

import { setTokenToLocalStorage } from '../../utils';

import { USER_ID } from '../../constant';

// Register
export const attemptCreateParty = userData => dispatch => {
  axios
    .post(`${HOST}${PARTYS_URI}`, userData)
    .then(res => {
      // Set userToken to Local Storage
      setTokenToLocalStorage(USER_ID, res.data.insertId);

      dispatch(attemptCreatePartySuccessfully(res.data));
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptCreatePartyFailed(err));
    });
};
