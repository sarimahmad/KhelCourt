import {combineReducers} from 'redux';
import authData from './AuthUser';
import scheduleJson from './TutorSchedule';
import currencyData from './CurrencyChanged';
import IsRead from './IsRead';
import TutorBreak from './TutorBreak';

export default combineReducers({
  authData,
  scheduleJson,
  currencyData,
  IsRead,
  TutorBreak,
});
