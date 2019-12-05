import { SET_USER_ID } from '../../constant';

export const setUserToken = user => ({
  type: SET_USER_ID,
  payload: user
});
