import axios from 'axios';

import { HOST, PARTY_URI } from '../../constant';

import { getTokenFromLocalStorage } from '../../utils';

// Contribute
export const attemptGetPartiesByUserId = () => dispatch => {
  const userID = getTokenFromLocalStorage('userID');
  return axios({
    method: 'get',
    url: `${HOST}${PARTY_URI}/${userID}`
  });
};
