import * as ACTION_TYPES from '../types';
import {AuthUser} from '../models';

export default (state = AuthUser, action) => {
  const {type, payload, error} = action;
  switch (type) {
    case ACTION_TYPES.SET_AUTH_TOKEN:
      return {
        ...state,
        token: payload,
      };
    case ACTION_TYPES.SET_AUTH_USER:
      return {
        ...state,
        userData: payload,
      };

    default:
      return state;
  }
};
