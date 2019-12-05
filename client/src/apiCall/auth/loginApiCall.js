import axios from 'axios';

import {
  attemptLoginSuccessfully,
  attemptLoginFailed
} from '../../actions/auth/attemptLoginAction';

import { HOST, LOGIN_URI, USER_ID } from '../../constant';

import { setTokenToLocalStorage } from '../../utils';

// Register
export const attemptLogin = userData => dispatch => {
  axios
    .post(`${HOST}${LOGIN_URI}`, userData)
    .then(res => {
      // Set userToken to Local Storage
      setTokenToLocalStorage(USER_ID, res.data.userID);
      console.log('attempt login callAPI');
      console.log(res.data);
      const payload = dispatch(attemptLoginSuccessfully(res.data));
      return payload;
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptLoginFailed(err));
    });
};
