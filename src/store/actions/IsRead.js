import * as ACTION_TYPES from '../types';

export const setIsRead = payload => ({
  type: ACTION_TYPES.SET_ISREAD,
  payload: payload,
});
