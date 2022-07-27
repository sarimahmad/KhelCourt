import * as ACTION_TYPES from '../types';
import {IsRead} from '../models';

export default (state = IsRead, action) => {
  const {type, payload, error} = action;
  switch (type) {
    case ACTION_TYPES.SET_ISREAD:
      return {
        ...state,
        IsRead: payload,
      };

    default:
      return state;
  }
};
