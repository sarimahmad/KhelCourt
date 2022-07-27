import {createStore, applyMiddleware, compose} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import AsyncStorage from '@react-native-community/async-storage';
import {name as appName} from '../../app.json';
import rootReducer from './reducers';
import thunkMiddleware from 'redux-thunk';

const persistConfig = {
  key: 'root',
  whitelist: ['authData', 'IsRead'],
  keyPrefix: appName,
  storage: AsyncStorage,
};

const middlewares = [thunkMiddleware];
const persistedReducer = persistReducer(persistConfig, rootReducer);

export default () => {
  let store = createStore(
    persistedReducer,
    compose(applyMiddleware(...middlewares)),
  );

  let persistor = persistStore(store, [{manualPersist: true}]);
  return {store, persistor};
};

// @react-native-async-storage/async-storage is not working with presist
