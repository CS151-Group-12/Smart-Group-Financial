import {
  GET_USER_IDENTITY,
  GET_USER_IDENTITY_FAILED,
  GET_USER_IDENTITY_SUCCESSFULLY
} from "../constant";

export const getUserIdentity = token => ({
  type: GET_USER_IDENTITY,
  payload: token
});

export const getUserIdentityFailed = () => ({
  type: GET_USER_IDENTITY_FAILED
});

export const getUserIdentitySuccessfully = user => ({
  type: GET_USER_IDENTITY_SUCCESSFULLY,
  payload: user
});
