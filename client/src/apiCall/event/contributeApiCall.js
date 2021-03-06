import axios from 'axios';

import {
  attemptContributeSuccessfully,
  attemptContributeFailed
} from '../../actions/event/attemptContributeAction';

import { HOST, EVENT_URI } from '../../constant';

// Contribute
export const attemptContribute = userData => dispatch => {
  axios
    .post(`${HOST}${EVENT_URI}/${userData.eventID}/contribute`, userData)
    .then(res => {
      return dispatch(attemptContributeSuccessfully(res.data));
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptContributeFailed(err));
    });
};
