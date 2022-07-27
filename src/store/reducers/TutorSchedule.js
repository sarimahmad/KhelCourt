import * as ACTION_TYPES from '../types';
import {TutorSchedule} from '../models';

export default (state = TutorSchedule, action) => {
  const {type, payload, error} = action;
  switch (type) {
    case ACTION_TYPES.SET_TUTOR_SCHEDULE:
      return {
        ...state,
        jsonArray: payload,
      };

    default:
      return state;
  }
};
