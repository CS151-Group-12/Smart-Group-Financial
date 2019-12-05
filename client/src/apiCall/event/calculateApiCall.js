import axios from 'axios';

import {
  attemptCalculateSuccessfully,
  attemptCalculateFailed
} from '../../actions/event/attemptCalculateAction';

import { HOST, EVENT_URI } from '../../constant';

// Calculate
export const attemptCalculate = userData => dispatch => {
  return axios
    .post(`${HOST}${EVENT_URI}/${userData.eventID}/calculate`, userData)
    .then(res => {
      dispatch(attemptCalculateSuccessfully(res.message));
      return res;
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptCalculateFailed(err));
    });
};
