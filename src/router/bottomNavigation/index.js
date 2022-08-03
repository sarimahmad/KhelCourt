// In App.js in a new project

import * as React from 'react';
import {Image, Dimensions, SafeAreaView, View} from 'react-native';
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
const iconHeight=24
const iconWidth=24
const tabIconSize = 27;
function App(props) {
  return (
    <>
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
            tabBarIcon: ({color, size, focused}) => (
              <Image
                style={{height: iconHeight, width: iconWidth}}
                source={
                  focused
                    ? require('../../assets/images/BotomIcons/calendarActive.png')
                    : require('../../assets/images/BotomIcons/calendar.png')
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Tournaments"
          component={Tournament}
          options={{
            tabBarLabel: 'Tournaments',
            tabBarIcon: ({color, size, focused}) => (
              <Image
                style={{height: iconHeight, width: iconWidth}}
                source={
                  focused
                    ? require('../../assets/images/BotomIcons/cupActive.png')
                    : require('../../assets/images/BotomIcons/cup.png')
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size, focused}) => (
              <Image
                style={{height: iconHeight+3, width: iconWidth}}
                source={
                  focused
                    ? require('../../assets/images/BotomIcons/mainActive.png')
                    : require('../../assets/images/BotomIcons/main.png')
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Notification"
          component={Notification}
          options={{
            tabBarLabel: 'Notification',
            tabBarIcon: ({color, size, focused}) => (
              <Image
                style={{height: iconHeight, width: iconWidth}}
                source={
                  focused
                    ? require('../../assets/images/BotomIcons/notificationActive.png')
                    : require('../../assets/images/BotomIcons/notification.png')
                }
              />
            ),
          }}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            tabBarLabel: 'Profile',
            tabBarIcon: ({color, size, focused}) => (
              <Image
                style={{height: iconHeight, width: iconWidth}}
                source={
                  focused
                    ? require('../../assets/images/BotomIcons/cupActive.png')
                    : require('../../assets/images/BotomIcons/cup.png')
                }
              />
            ),
          }}
        />
      </Tab.Navigator>
    </>
  );
}

export default App;
