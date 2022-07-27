import * as ACTION_TYPES from '../types';
import {TutorBreak} from '../models';

export default (state = TutorBreak, action) => {
  const {type, payload, error} = action;
  switch (type) {
    case ACTION_TYPES.SET_TUTOR_BREAK:
      return {
        ...state,
        jsonArray: payload,
      };

    default:
      return state;
  }
};
