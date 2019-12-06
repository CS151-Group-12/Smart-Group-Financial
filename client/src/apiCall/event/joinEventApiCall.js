import axios from 'axios';

import {
  attemptJoinEventSuccessfully,
  attemptJoinEventFailed
} from '../../actions/event/attemptJoinEventAction';

import { HOST, EVENT_URI } from '../../constant';

// Join Event
export const attemptJoinEvent = eventData => dispatch => {
  return axios
    .post(`${HOST}${EVENT_URI}/join`, eventData)
    .then(res => {
      return dispatch(attemptJoinEventSuccessfully(res.data));
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptJoinEventFailed(err));
    });
};
