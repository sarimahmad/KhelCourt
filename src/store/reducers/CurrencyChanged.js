import * as ACTION_TYPES from "../types";
import { CurrencyChanged } from "../models";

export default (state = CurrencyChanged, action) => {
  const { type, payload, error } = action;
  switch (type) {
    case ACTION_TYPES.SET_CURRENCY_CHANGED:
      return {
        ...state,
        currency: payload,
      };

    default:
      return state;
  }
};
