// In App.js in a new project

import * as React from 'react';
import {View, Dimensions} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import splashScreen from '../../container/SplashScreen';
import bottomTab from '../bottomNavigation';
import LoginScreen from '../../container/login';
import EventDetail from '../../container/EventDetail';
import AddEventScreen from '../../container/AddEvent';
import PaymentScreen from '../../container/Payment';
import UserDetailScreen from '../../container/UserDetail';
import AddAdminScreen from '../../container/AddAdmin';
const Stack = createNativeStackNavigator();
const windowHeight = Dimensions.get('window').height;

const tabIconSize = 32;
function App(props) {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}
        initialRouteName="splashScreen">
        <Stack.Screen name="splashScreen" component={splashScreen} />
        <Stack.Screen name="bottomTab" component={bottomTab} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="EventDetail" component={EventDetail} />
        <Stack.Screen name="AddEvent" component={AddEventScreen} />
        <Stack.Screen name="Payment" component={PaymentScreen} />
        <Stack.Screen name="UserDetail" component={UserDetailScreen} />
        <Stack.Screen name="AddAdmin" component={AddAdminScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
