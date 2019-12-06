import axios from 'axios';

import {
  attemptRegisterSuccessfully,
  attemptRegisterFailed
} from '../../actions/auth/attemptRegisterAction';

import { HOST, REGISTER_URI, USER_ID } from '../../constant';

import { setTokenToLocalStorage } from '../../utils';

// Register
export const attemptRegister = userData => dispatch => {
  axios
    .post(`${HOST}${REGISTER_URI}`, userData)
    .then(res => {
      // Set userToken to Local Storage
      setTokenToLocalStorage(USER_ID, res.data.userID);
      setTokenToLocalStorage('EMAIL', res.data.email);
      dispatch(attemptRegisterSuccessfully(res.data));
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptRegisterFailed(err));
    });
};
