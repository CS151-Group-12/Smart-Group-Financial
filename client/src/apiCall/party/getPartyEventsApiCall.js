import axios from 'axios';

import {
  attemptGetPartyEventsSuccessfully,
  attemptGetPartyEventsFailed
} from '../../actions/party/attemptGetPartyEventsAction';

import { HOST, PARTY_URI } from '../../constant';

// Register
export const attemptGetPartyEvents = partyData => dispatch => {
  return axios
    .post(`${HOST}${PARTY_URI + '/events'}`, partyData)
    .then(res => {
      const payload = dispatch(attemptGetPartyEventsSuccessfully(res.data));
      return payload;
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptGetPartyEventsFailed(err));
    });
};
