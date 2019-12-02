import axios from 'axios';

import {
  attemptRegisterSuccessfully,
  attemptRegisterFailed
} from './attemptRegisterAction';

import { HOST, REGISTER_URI } from '../../constant';

import { setTokenToLocalStorage } from '../../utils';

import { USER_ID } from '../../constant';

// Register
export const attemptRegister = userData => dispatch => {
  axios
    .post(`${HOST}${REGISTER_URI}`, userData)
    .then(res => {
      // Set userToken to Local Storage
      setTokenToLocalStorage(USER_ID, res.data.insertId);

      dispatch(attemptRegisterSuccessfully(res.data));
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptRegisterFailed(err));
    });
};
