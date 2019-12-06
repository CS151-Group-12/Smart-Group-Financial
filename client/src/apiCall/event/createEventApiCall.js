import axios from 'axios';

import {
  attemptCreateEventSuccessfully,
  attemptCreateEventFailed
} from '../../actions/event/attemptCreateEventAction';

import { HOST, EVENT_URI } from '../../constant';

export const attemptCreateEvent = eventData => dispatch => {
  axios
    .post(`${HOST}${EVENT_URI}`, eventData)
    .then(res => {
      dispatch(attemptCreateEventSuccessfully(res.data));
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptCreateEventFailed(err));
    });
};
