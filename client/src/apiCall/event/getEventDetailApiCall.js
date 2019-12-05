import axios from 'axios';

import {
  attemptGetEventDetailSuccessfully,
  attemptGetEventDetailFailed
} from '../../actions/event/attemptGetEventDetailAction';

import { HOST, EVENT_URI } from '../../constant';

export const attemptGetEventDetail = eventID => dispatch => {
  return axios
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
