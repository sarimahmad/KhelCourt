import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  FlatList,
} from 'react-native';
import {connect} from 'react-redux';
import constant from '../../utility/constant';
import Header from '../../components/Header';
import CustomBtn from '../../components/CustomBtn';
import styles from './styles';
import Feather from 'react-native-vector-icons/Feather';
import CortCard from '../../components/CortCard';
const Home = props => {
  const [selectedTab, setSelectedTab] = useState(0);

  useEffect(() => {}, []);

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{flex: 1}}>
          <ImageBackground
            source={require('../../assets/images/Maskgroup.png')}
            style={{flex: 1}}>
            <SafeAreaView />
            <Header
              backColor={'rgba(0,0,0,0)'}
              rightComponent={() => (
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity>
                    <Image
                      style={{height: 30, width: 30, margin: 5}}
                      source={require('../../assets/images/icon/shopping-cart-white.png')}
                    />
                  </TouchableOpacity>
                  <TouchableOpacity>
                    <Image
                      style={{height: 30, width: 30, margin: 5}}
                      source={require('../../assets/images/icon/messages.png')}
                    />
                  </TouchableOpacity>
                </View>
              )}
            />
            <View style={{alignItems: 'center', marginTop: 5}}>
              <Image
                style={{
                  height: 74,
                  width: 72,
                  alignSelf: 'center',
                  resizeMode: 'contain',
                }}
                source={require('../../assets/images/logoWithTitle.png')}
              />
            </View>

            <View style={styles.mainUiContainer}>
              <Text style={styles.lookingText}>Looking for</Text>
              <View style={[styles.continueAsSwitchWrapper, styles.marginTop]}>
                <TouchableOpacity
                  onPress={() => setSelectedTab(0)}
                  style={[
                    styles.switchInnerWrapper,
                    {
                      backgroundColor:
                        selectedTab == 0 ? constant.white : constant.whiteGrey,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.font12,
                      {
                        color:
                          selectedTab == 0
                            ? constant.selectedBlack
                            : constant.noSelectedBlack,
                      },
                    ]}>
                    Courts
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setSelectedTab(1)}
                  style={[
                    styles.switchInnerWrapper,
                    {
                      backgroundColor:
                        selectedTab == 1 ? constant.white : constant.whiteGrey,
                    },
                  ]}>
                  <Text
                    style={[
                      styles.font12,
                      {
                        color:
                          selectedTab == 1
                            ? constant.selectedBlack
                            : constant.noSelectedBlack,
                      },
                    ]}>
                    Teams
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            <View style={styles.mainUiContainer}>
              <View
                style={{
                  width: '100%',
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <TouchableOpacity style={styles.btnContainer}>
                  <Image
                    style={{height: 20, width: 20}}
                    source={require('../../assets/images/BotomIcons/calendar.png')}
                  />
                  <Text style={styles.BtnText}>Date</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btnContainer}>
                  <Image
                    style={{height: 20, width: 20}}
                    source={require('../../assets/images/icon/clock.png')}
                  />
                  <Text style={styles.BtnText}>Slot</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity style={styles.btnContainer}>
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../../assets/images/icon/grid-3.png')}
                />
                <Text style={styles.BtnText}>Select Sport</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.btnContainer}>
                <Image
                  style={{height: 20, width: 20}}
                  source={require('../../assets/images/icon/Icon.png')}
                />
                <Text style={styles.BtnText}>Search location/Court</Text>
              </TouchableOpacity>
              <CustomBtn
                centerText={'Search'}
                onPress={() => props.navigation.navigate('Login')}
                customMarginTop={0}
                customSyle={{
                  height: constant.margin47,
                  width: '100%',
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 24,
                }}
              />
            </View>
          </ImageBackground>
        </View>
        <View style={{paddingHorizontal: 24}}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: '3%',
            }}>
            <Text style={{fontSize: 16, fontFamily: constant.interMedium}}>
              Court
            </Text>
            <Text style={{fontSize: 16, fontFamily: constant.interMedium}}>
              Show All
            </Text>
          </View>
          <FlatList
            horizontal
            data={[1, 2, 3, 4, 5, 6]}
            renderItem={() => <CortCard />}
            keyExtractor={item => item.id}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const mapStateToProps = state => {
  return {
    userToken: state.authData.token,
    userData: state.authData.userData,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onSetUserToken: data => {
      dispatch(setAuthToken(data));
    },
    onSetUserData: data => {
      dispatch(setAuthUser(data));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
