import { HOST, PARTY_URI } from '../../constant';

// Register
export const attemptGetMembers = userData => dispatch => {
  axios
    .post(`${HOST}${PARTY_URI}`, userData)
    .then(res => {
      console.log('attempt get members callAPI');
      console.log(res.data);
      const payload = dispatch(attemptGetMembersSuccessfully(res.data));
      return payload;
    })
    .catch(err => {
      console.log('error');
      console.log(err);
      dispatch(attemptGetMembersFailed(err));
    });
};
