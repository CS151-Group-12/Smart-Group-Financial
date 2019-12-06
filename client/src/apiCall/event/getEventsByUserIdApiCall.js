import axios from 'axios';

import { HOST, EVENT_URI } from '../../constant';

import {
  attemptGetEventSuccessfully,
  attemptGetEventFailed
} from '../../actions/event/attemptGetEventAction';

// Contribute
export const attemptGetEventsByUserId = userData => dispatch => {
  axios
    .get(`${HOST}${EVENT_URI + '/user/'}${userData.userID}`)
    .then(res => {
      return dispatch(attemptGetEventSuccessfully(res.data));
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptGetEventFailed(err));
    });
};
