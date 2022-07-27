import React, {useState} from 'react';
import {Text, StyleSheet} from 'react-native';

const TextInANest = () => {
  const [titleText, setTitleText] = useState("Bird's Nest");
  const bodyText = 'This is not really a bird nest.';

  const onPressTitle = () => {
    setTitleText("Bird's Nest [pressed]");
  };

  return (
    <Text style={styles.baseText}>
      <Text style={styles.titleText} onPress={onPressTitle}>
        {titleText}
        {'\n'}
        {'\n'}
      </Text>
      <Text numberOfLines={5}>{bodyText}</Text>
    </Text>
  );
};

const styles = StyleSheet.create({
  baseText: {
    fontFamily: 'Cochin',
  },
  titleText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TextInANest;
// import React from 'react';
// import {Text, StatusBar} from 'react-native';
// import AppWrapper from './src/router/mainNavigator';
// // Redux
// import constant from './src/utility/constant';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';
// import configureStore from './src/store';
// import Geocoder from 'react-native-geocoding';

// //Stripe

// Text.defaultProps = Text.defaultProps || {};
// Text.defaultProps.allowFontScaling = false;
// const App = () => {
//   const {persistor, store} = configureStore();
//   persistor.persist();
//   Geocoder.init(constant.googleKey);

//   return (
//     <Provider store={store}>
//       <PersistGate persistor={persistor} loading={null}>
//         <StatusBar animated={true} hidden={false} />
//         <AppWrapper />
//       </PersistGate>
//     </Provider>
//   );
// };

// export default App;
