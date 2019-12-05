import axios from 'axios';

import { HOST, EVENT_URI } from '../../constant';

import { getTokenFromLocalStorage } from '../../utils';

// Contribute
export const attemptGetEventsByUserId = () => dispatch => {
  const userID = getTokenFromLocalStorage('userID');
  return axios({
    method: 'get',
    url: `${HOST}${EVENT_URI + '/user/'}${userID}`
  });
};
