import axios from 'axios';

import {
  attemptGetResultSuccessfully,
  attemptGetResultFailed
} from '../../actions/event/attemptGetResultAction';

import { HOST, EVENT_URI } from '../../constant';

// Calculate
export const attemptGetResult = userData => dispatch => {
  axios
    .get(`${HOST}${EVENT_URI}/${userData.eventID}/result`, userData)
    .then(res => {
      return dispatch(attemptGetResultSuccessfully(res.data));
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptGetResultFailed(err));
    });
};
