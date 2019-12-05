import axios from "axios";

import { HOST, PARTY_URI } from "../../constant";

import { getTokenFromLocalStorage } from "../../utils";
import {
  attemptGetPartySuccessfully,
  attemptGetPartyFailed
} from "../../actions/party/attemptGetPartyAction";

// Contribute
export const attemptGetPartiesByUserId = () => dispatch => {
  const userID = getTokenFromLocalStorage("userID");
  axios
    .get(`${HOST}${PARTY_URI}/${userID}`)
    .then(res => {
      return dispatch(attemptGetPartySuccessfully(res.data));
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      dispatch(attemptGetPartyFailed(err));
    });
};
