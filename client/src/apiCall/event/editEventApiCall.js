import axios from 'axios';

import {
  attemptEditEventSuccessfully,
  attemptEditEventFailed
} from '../../actions/event/attemptEditAction';

import { HOST, EVENT_URI } from '../../constant';

export const attemptEditEvent = userData => dispatch => {
  axios
    // TO-DO: Add Update API in Server
    .put(`${HOST}${EVENT_URI}/${userData.eventID}/contribute/`, userData)
    .then(res => {
      return dispatch(attemptEditEventSuccessfully(res.data));
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptEditEventFailed(err));
    });
};
