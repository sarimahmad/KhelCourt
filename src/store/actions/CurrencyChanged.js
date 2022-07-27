import * as ACTION_TYPES from "../types";

export const setCurrencyChanged = (payload) => ({
  type: ACTION_TYPES.SET_CURRENCY_CHANGED,
  payload: payload,
});
