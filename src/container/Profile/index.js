import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {connect} from 'react-redux';

import styles from './styles';
import Header from '../../components/Header';
import constant from '../../utility/constant';

const facilityArray = [
  'Play On Johar Town',
  'Play On Bedian',
  'Play On Model Town',
];

const Profile = props => {
  const [myfacilityOpen, setMyFacilityOpen] = useState(false);
  const [myTeamOpen, setMyTeamOpen] = useState(false);
  const [myTournamentOpen, setMyTournamentOpen] = useState(false);
  const [personalInfoOpen, setPersonalInfoOpen] = useState(false);
  const [accountSetting, setAccountSetting] = useState(false);

  useEffect(() => {}, []);

  const facilityItem = (title, index) => {
    return (
      <View
        style={[{paddingHorizontal: 24, justifyContent: 'center'}]}
        key={index.toString()}>
        <Text style={[styles.font16, {fontFamily: constant.interMedium}]}>
          {title}
        </Text>
        <Text style={[styles.font16, {fontFamily: constant.interMedium}]}>
          {'2 Courts'}
        </Text>
        <View style={{position: 'absolute', right: 24}}>
          <Text style={[styles.font14, {color: 'green'}]}>manage</Text>
        </View>
      </View>
    );
  };

  const renderCloseView = (title, action) => {
    return (
      <TouchableOpacity
        onPress={action}
        style={[styles.rowView, {paddingHorizontal: 24, alignItems: 'center'}]}>
        <Text style={[styles.font16, {fontFamily: constant.interMedium}]}>
          {title}
        </Text>
        <View style={{position: 'absolute', right: 24}}>
          <AntDesign name="right" size={24} color={'black'} />
        </View>
      </TouchableOpacity>
    );
  };

  const renderOpenView = (title, action) => {
    return (
      <TouchableOpacity
        onPress={action}
        style={[styles.rowView, {paddingHorizontal: 24, alignItems: 'center'}]}>
        <Text
          style={[
            styles.font16,
            {fontFamily: constant.interMedium, color: constant.primaryColor},
          ]}>
          {title}
        </Text>
        <View style={{position: 'absolute', right: 24}}>
          <AntDesign name="down" size={24} color={constant.primaryColor} />
        </View>
      </TouchableOpacity>
    );
  };

  const renderTeamOpenView = (title, action) => {
    return (
      <TouchableOpacity
        onPress={action}
        style={{
          paddingHorizontal: 24,
          alignItems: 'center',
          height: 120,
          paddingVertical: 16,
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
          }}>
          <Text
            style={[
              styles.font16,
              {fontFamily: constant.interMedium, color: constant.primaryColor},
            ]}>
            {title}
          </Text>
          <AntDesign name="down" size={24} color={constant.primaryColor} />
        </View>
        <View
          style={{
            height: 1,
            width: '100%',
            backgroundColor: '#E3E3E3',
            marginTop: 16,
          }}
        />
        <Text
          style={{
            fontSize: 16,
            marginTop: 18,
            fontFamily: constant.interSeiBold,
            color: constant.primaryColor,
          }}>
          + Add New Team
        </Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <SafeAreaView style={styles.container}>
        <Header
          backColor={'rgba(0,0,0,0)'}
          centerText={'KhelCourt'}
          leftIcon={{name: 'chevron-back', color: constant.black}}
        />
        <View style={styles.container}>
          <ScrollView>
            <View
              style={[
                styles.rowView,
                {
                  height: constant.margin56,
                  paddingHorizontal: constant.margin24,
                },
              ]}>
              <View style={[styles.container, styles.jC]}>
                <Text style={styles.font16}>Hello Manager!</Text>
                <Text style={styles.font14}>Joined 2mo Ago</Text>
                <Image
                  style={styles.absoluteUserImg}
                  source={require('../../assets/images/userimage.png')}
                />
              </View>
            </View>
            <View
              style={[
                styles.menuItemWrapper,
                {marginTop: constant.margin47, marginBottom: 10},
              ]}>
              {!myTeamOpen
                ? renderCloseView('Teams', () => setMyTeamOpen(!myTeamOpen))
                : renderTeamOpenView('Teams', () => setMyTeamOpen(!myTeamOpen))}
            </View>

            <View style={[styles.menuItemWrapper]}>
              {!myfacilityOpen
                ? renderCloseView('My Facility', () =>
                    setMyFacilityOpen(!myfacilityOpen),
                  )
                : renderOpenView('My Facility', () =>
                    setMyFacilityOpen(!myfacilityOpen),
                  )}
              {myfacilityOpen &&
                facilityArray.map((item, index) => facilityItem(item, index))}
            </View>
            <View style={[styles.menuItemWrapper, {marginTop: 8}]}>
              {!myTournamentOpen &&
                renderCloseView('My Tournament', () =>
                  setMyTournamentOpen(!myTournamentOpen),
                )}
            </View>
            <View style={[styles.menuItemWrapper, {marginTop: 8}]}>
              {!personalInfoOpen &&
                renderCloseView('Personal Info', () =>
                  setPersonalInfoOpen(!personalInfoOpen),
                )}
            </View>
            <View style={[styles.menuItemWrapper, {marginTop: 8}]}>
              {!accountSetting &&
                renderCloseView('Account Setting', () =>
                  setAccountSetting(!accountSetting),
                )}
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Profile;
