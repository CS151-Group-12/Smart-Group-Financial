import axios from "axios";

import { HOST, EVENT_URI } from "../../constant";

import { getTokenFromLocalStorage } from "../../utils";

import {
  attemptGetEventSuccessfully,
  attemptGetEventFailed
} from "../../actions/event/attemptGetEventAction";

// Contribute
export const attemptGetEventsByUserId = () => dispatch => {
  const userID = getTokenFromLocalStorage("userID");

  axios
    .get(`${HOST}${EVENT_URI + "/user/"}${userID}`)
    .then(res => {
      return dispatch(attemptGetEventSuccessfully(res.data));
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      dispatch(attemptGetEventFailed(err));
    });
};
