// In App.js in a new project

import * as React from 'react';
import {View, Dimensions, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Home from '../../container/HomeScreen';
import Booking from '../../container/Booking';
import Notification from '../../container/Notification';
import Profile from '../../container/Profile';
import Tournament from '../../container/Tournament';
import constant from '../../utility/constant';

const Tab = createBottomTabNavigator();
const windowHeight = Dimensions.get('window').height;

const tabIconSize = 27;
function App(props) {
  return (
    <>
      <SafeAreaView style={{backgroundColor: constant.whiteGrey}} />
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: constant.primaryColor,
        }}>
        <Tab.Screen
          name="Bookings"
          component={Booking}
          options={{
            tabBarLabel: 'Bookings',
            tabBarIcon: ({color, size}) => (
              <Icon name="users" color={color} size={tabIconSize} />
            ),
          }}
        />
        <Tab.Screen
          name="Tournaments"
          component={Tournament}
          options={{
            tabBarLabel: 'Tournaments',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="event" color={color} size={tabIconSize} />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons
                name="comment-text-outline"
                color={color}
                size={tabIconSize}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: 'Notification',
            tabBarIcon: ({color, size}) => (
              <Ionicons
                name="md-settings-sharp"
                color={color}
                size={tabIconSize}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size}) => (
              <Ionicons
                name="md-settings-sharp"
                color={color}
                size={tabIconSize}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default App;
