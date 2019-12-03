/* eslint-disable import/prefer-default-export */
import {
  ATTEMPT_CREATE_GROUP_FAILED,
  ATTEMPT_CREATE_GROUP_SUCCESSFULLY
} from "../../constant";

export const attemptCreateGroupFailed = error => ({
  type: ATTEMPT_CREATE_GROUP_FAILED,
  payload: error
});

export const attemptCreateGroupSuccessfully = user => ({
  type: ATTEMPT_CREATE_GROUP_SUCCESSFULLY,
  payload: user
});
