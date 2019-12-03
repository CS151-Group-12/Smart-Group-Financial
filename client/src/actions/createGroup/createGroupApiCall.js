import axios from "axios";

import {
  attemptCreateGroupSuccessfully,
  attemptCreateGroupFailed
} from "./attemptCreateGroup";

import { HOST, GROUPS_URI } from "../../constant";

import { setTokenToLocalStorage } from "../../utils";

import { USER_ID } from "../../constant";

// Register
export const attemptCreateGroup = userData => dispatch => {
  axios
    .post(`${HOST}${GROUPS_URI}`, userData)
    .then(res => {
      // Set userToken to Local Storage
      setTokenToLocalStorage(USER_ID, res.data.insertId);

      dispatch(attemptCreateGroupSuccessfully(res.data));
    })
    .catch(err => {
      console.log("error");
      console.log(err);
      dispatch(attemptCreateGroupFailed(err));
    });
};
