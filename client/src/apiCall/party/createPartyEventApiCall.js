import axios from 'axios';

import {
  attemptCreatePartyEventSuccessfully,
  attemptCreatePartyEventFailed
} from '../../actions/party/attemptCreatePartyEvent';

import { HOST, EVENT_URI } from '../../constant';

// Create party event
export const attemptCreatePartyEvent = eventData => dispatch => {
  return axios
    .post(`${HOST}${EVENT_URI + '/create'}`, eventData)
    .then(res => {
      const payload = dispatch(attemptCreatePartyEventSuccessfully(res.data));
      return payload;
    })
    .catch(err => {
      dispatch(attemptCreatePartyEventFailed(err));
    });
};
