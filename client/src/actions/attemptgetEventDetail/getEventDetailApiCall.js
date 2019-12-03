import axios from 'axios';

import {
  attemptGetEventDetailSuccessfully,
  attemptGetEventDetailFailed
} from './attemptGetEventDetailAction';

import { HOST, EVENT_URI } from '../../constant';

// Contribute
export const attemptGetEventDetail = eventID => dispatch => {
  console.log('Get event detail');
  console.log(eventID);
  axios
    .get(`${HOST}${EVENT_URI}/${eventID}`)
    .then(res => {
      return dispatch(attemptGetEventDetailSuccessfully(res.data));
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptGetEventDetailFailed(err));
    });
};
