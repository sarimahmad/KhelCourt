/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  TextInput,
  FlatList,
} from 'react-native';
import constant from '../../utility/constant';
import Header from '../../components/Header';
import DetailCourtCard from '../../components/DetailsCourtCard';

const ShowAll = props => {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <View style={styles.wrapperView}>
      <SafeAreaView style={{flex: 1}}>
        <Header
          centerText={'KhelCourt'}
          backColor={constant.white}
          rightComponent={() => (
            <TouchableOpacity style={{flexDirection: 'row'}}>
              <Image
                style={{height: 25, width: 25, marginRight: 20}}
                source={require('../../assets/images/icon/shoppingCart.png')}
              />
              <Image
                style={{height: 25, width: 25}}
                source={require('../../assets/images/icon/messagesblack.png')}
              />
            </TouchableOpacity>
          )}
        />
        <View style={styles.Container}>
          <View>
            <TextInput placeholder="Search Courts" style={styles.SearchBar} />
            <Image
              style={styles.searchIcon}
              source={require('../../assets/images/icon/search.png')}
            />
          </View>
          <Text style={styles.NormalBlack}>Looking For</Text>

          <View style={[styles.continueAsSwitchWrapper]}>
            <TouchableOpacity
              onPress={() => setSelectedTab(0)}
              style={[
                styles.switchInnerWrapper,
                {
                  backgroundColor:
                    selectedTab === 0 ? constant.white : '#F2F4F5',
                  borderRadius: selectedTab === 0 ? 6 : 0,
                },
              ]}>
              <Text
                style={[
                  styles.font12,
                  {
                    color:
                      selectedTab === 0
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
                    selectedTab === 1 ? constant.white : '#F2F4F5',
                  borderRadius: selectedTab === 1 ? 6 : 0,
                },
              ]}>
              <Text
                style={[
                  styles.font12,
                  {
                    color:
                      selectedTab === 1
                        ? constant.selectedBlack
                        : constant.noSelectedBlack,
                  },
                ]}>
                Teams
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{marginTop: 24, flex: 1}}>
            <FlatList
              data={[1, 2, 3, 4, 5]}
              keyExtractor={(item, index) => index.toString()}
              renderItem={({item}) => (
                <DetailCourtCard
                  CourtInfo={selectedTab === 0 ? true : false}
                  onPress={() =>
                    selectedTab === 0
                      ? props.navigation.navigate('Detail')
                      : props.navigation.navigate('TeamDetail')
                  }
                />
              )}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};
const styles = StyleSheet.create({
  wrapperView: {
    flex: 1,
    backgroundColor: constant.white,
  },
  Container: {
    flex: 1,
    width: constant.ScreenWidth - 48,
    alignSelf: 'center',
  },
  SearchBar: {
    width: '100%',
    height: 48,
    borderWidth: 1,
    borderColor: constant.borderColor,
    borderRadius: 10,
    paddingLeft: 20,
  },
  searchIcon: {
    width: 24,
    height: 24,
    position: 'absolute',
    right: 15,
    top: 10,
  },
  NormalBlack: {
    fontFamily: constant.interRegular,
    fontSize: 14,
    color: '#444444',
    textAlign: 'center',
    marginTop: 16,
  },
  continueAsSwitchWrapper: {
    height: 32,
    width: '100%',
    flexDirection: 'row',
    backgroundColor: constant.whiteGrey,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 18,
  },
  font12: {
    fontSize: 12,
    textAlign: 'center',
    fontFamily: constant.interBold,
  },
  switchInnerWrapper: {
    height: 28,
    width: '49.5%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default ShowAll;
