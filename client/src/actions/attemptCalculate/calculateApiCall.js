import axios from 'axios';

import {
  attemptCalculateSuccessfully,
  attemptCalculateFailed
} from './attemptCalculateAction';

import { HOST, EVENT_URI } from '../../constant';

// Calculate
export const attemptCalculate = userData => dispatch => {
  axios
    .post(`${HOST}${EVENT_URI}`, userData)
    .then(res => {
      return dispatch(attemptCalculateSuccessfully(res.data));
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptCalculateFailed(err));
    });
};
