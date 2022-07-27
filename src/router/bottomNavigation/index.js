// In App.js in a new project

import * as React from 'react';
import {View, Dimensions, SafeAreaView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
// import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
// import Ionicons from 'react-native-vector-icons/Ionicons';

import homeScreen from '../../container/home';
import eventScreen from '../../container/events';
import feebbackScreen from '../../container/feedback';
import settingScreen from '../../container/Settings';
import AddEventScreen from '../../container/AddEvent';
import constant from '../../utility/constant';
import {} from 'react-native-safe-area-context';
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
          name="home"
          component={homeScreen}
          options={{
            tabBarLabel: 'Users',
            tabBarIcon: ({color, size}) => (
              <Icon name="users" color={color} size={tabIconSize} />
            ),
          }}
        />
        <Tab.Screen
          name="event"
          component={eventScreen}
          options={{
            tabBarLabel: 'Event',
            tabBarIcon: ({color, size}) => (
              <MaterialIcons name="event" color={color} size={tabIconSize} />
            ),
          }}
        />
        <Tab.Screen
          name="feebback"
          component={feebbackScreen}
          options={{
            tabBarLabel: 'Suggestion',
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
          name="setting"
          component={settingScreen}
          options={{
            tabBarLabel: 'Settings',
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
