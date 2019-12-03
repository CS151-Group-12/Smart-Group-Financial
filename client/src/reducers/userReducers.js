import {
  ATTEMPT_REGISTER_SUCCESSFULLY,
  ATTEMPT_REGISTER_FAILED,
  GET_ERRORS,
  GET_USER_IDENTITY_SUCCESSFULLY,
  GET_USER_IDENTITY_FAILED,
  SET_USER_ID,
  ATTEMPT_LOGIN_SUCCESSFULLY,
  ATTEMPT_LOGIN_FAILED,
  ATTEMPT_GET_PARTY_MEMBERS_FAILED,
  ATTEMPT_GET_PARTY_MEMBERS_SUCCESSFULLY,
  ATTEMPT_GET_PARTY_EVENTS_FAILED,
  ATTEMPT_GET_PARTY_EVENTS_SUCCESSFULLY,
  ATTEMPT_INVITE_PARTY_MEMBER_FAILED,
  ATTEMPT_INVITE_PARTY_MEMBER_SUCCESSFULLY,
  ATTEMPT_CALCULATE_FAILED,
  ATTEMPT_CALCULATE_SUCCESSFULLY,
  ATTEMPT_CONTRIBUTE_FAILED,
  ATTEMPT_CONTRIBUTE_SUCCESSFULLY,
  ATTEMPT_GET_EVENT_DETAIL_SUCCESSFULLY,
  ATTEMPT_GET_EVENT_DETAIL_FAILED,
  ATTEMPT_LOGOUT
} from '../constant';

export default function(state = { loading: false, errors: null }, action) {
  switch (action.type) {
    // Register
    case ATTEMPT_REGISTER_SUCCESSFULLY: {
      console.log(action.payload + "," + action.type);
      return { ...state, ...action.payload, ...{ loading: false } };
    }

    case ATTEMPT_REGISTER_FAILED:
      return { ...state, ...{ loading: false }, ...{ errors: action.payload } };
    case GET_USER_IDENTITY_SUCCESSFULLY:
      return { ...state, ...action.payload, ...{ isLoading: false } };
    case ATTEMPT_LOGIN_SUCCESSFULLY:
      return { ...state, ...action.payload, ...{ loading: false } };
    case ATTEMPT_LOGIN_FAILED:
      return { ...state, ...{ loading: false }, ...{ errors: action.payload } };
    case ATTEMPT_CALCULATE_SUCCESSFULLY:
      return { ...state, ...action.payload, ...{ loading: false } };
    case ATTEMPT_CALCULATE_FAILED:
      return { ...state, ...{ loading: false }, ...{ errors: action.payload } };
    case ATTEMPT_CONTRIBUTE_SUCCESSFULLY:
      return { ...state, ...action.payload, ...{ loading: false } };
    case ATTEMPT_CONTRIBUTE_FAILED:
      return { ...state, ...{ loading: false }, ...{ errors: action.payload } };
    case GET_USER_IDENTITY_FAILED:
      return {};
    case SET_USER_ID:
      return action.payload;
    case GET_ERRORS:
      return action.payload;
    case ATTEMPT_GET_PARTY_MEMBERS_SUCCESSFULLY:
      return { ...state, ...action.payload, ...{ loading: false } };
    case ATTEMPT_GET_PARTY_MEMBERS_FAILED:
      return { ...state, ...{ loading: false }, ...{ errors: action.payload } };
    case ATTEMPT_GET_PARTY_EVENTS_SUCCESSFULLY:
      return { ...state, ...action.payload, ...{ loading: false } };
    case ATTEMPT_GET_PARTY_EVENTS_FAILED:
      return { ...state, ...{ loading: false }, ...{ errors: action.payload } };
    case ATTEMPT_LOGOUT:
      return {};

    case ATTEMPT_GET_EVENT_DETAIL_SUCCESSFULLY: {
      console.log('redux');
      console.log({ ...action.payload }[0]);
      return {
        ...state,
        list: action.payload,
        ...{ loading: false }
      };
    }
    case ATTEMPT_GET_EVENT_DETAIL_FAILED:
      return { ...state, ...{ loading: false }, ...{ errors: action.payload } };
    default:
      return state;
  }
}
