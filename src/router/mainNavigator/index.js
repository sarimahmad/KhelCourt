// In App.js in a new project

import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import splashScreen from '../../container/SplashScreen';
import bottomTab from '../bottomNavigation';
import AuthMain from '../../container/AuthMain';
import SignUp from '../../container/SignUp';

const Stack = createNativeStackNavigator();


function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="splashScreen">
        <Stack.Screen name="splashScreen" component={splashScreen} />
        <Stack.Screen name="AuthMain" component={AuthMain} />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="Main" component={bottomTab} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
