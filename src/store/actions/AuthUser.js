import * as ACTION_TYPES from '../types';

export const setAuthToken = payload => ({
  type: ACTION_TYPES.SET_AUTH_TOKEN,
  payload: payload,
});

export const setAuthUser = payload => ({
  type: ACTION_TYPES.SET_AUTH_USER,
  payload: payload,
});
