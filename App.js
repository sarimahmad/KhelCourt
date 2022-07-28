import React from 'react';
import {Text, StatusBar} from 'react-native';
import AppWrapper from './src/router/mainNavigator';
// Redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import configureStore from './src/store';

//Stripe

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;
const App = () => {
  const {persistor, store} = configureStore();
  persistor.persist();
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={null}>
        <StatusBar animated={true} hidden={false} />
        <AppWrapper />
      </PersistGate>
    </Provider>
  );
};

export default App;
