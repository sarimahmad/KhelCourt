/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Image,
  Modal,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from 'react-native';
import Header from '../../components/Header';
import styles from './styles';
import constant from '../../utility/constant';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import MatchCard from '../../components/matchCard';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];
const Booking = props => {
  const [tab, setTab] = useState(true);
  const [filterModal, setfilterModal] = useState(false);
  useEffect(() => {}, []);

  const renderItem = ({item}) => {
    return <MatchCard />;
  };
  const renderFilter = (item, index) => {
    return (
      <View
        key={item.id.toString}
        style={{
          backgroundColor: 'rgba(227, 126, 60, 0.1)',
          flexDirection: 'row',
          alignItems: 'center',
          paddingHorizontal: 15,
          paddingVertical: 3,
          borderRadius: 20,
          marginHorizontal: 1,
        }}>
        <Text style={[styles.tabText, {color: '#E37E3C'}]}>collection</Text>
        <Entypo style={[{color: '#E37E3C'}]} name="cross" size={15} />
      </View>
    );
  };
  const renderAddBtn = () => {
    return (
      <TouchableOpacity
        style={{
          position: 'absolute',
          bottom: 10,
          right: 10,
          height: constant.ScreenHeight * 0.06,
          width: constant.ScreenHeight * 0.06,
          backgroundColor: constant.primaryColor,
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: 100,
        }}>
        <Feather name="plus" size={40} color={'white'} />
      </TouchableOpacity>
    );
  };
  return (
    <View style={styles.container}>
      <SafeAreaView />

      <Header
        centerText={'KhelCourt'}
        backColor={constant.white}
        rightComponent={() => (
          <TouchableOpacity>
            <Image
              style={{height: 25, width: 25}}
              source={require('../../assets/images/icon/shoppingCart.png')}
            />
          </TouchableOpacity>
        )}
      />
      <View style={styles.coverContainer}>
        <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
          <Text style={styles.HeaderText}>Total Bookings</Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text style={styles.HeaderText}>All</Text>
            <TouchableOpacity>
              <Image
                style={{height: 25, width: 25, marginLeft: 10}}
                source={require('../../assets/images/BotomIcons/calendar.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={[
            styles.HeaderText,
            {color: constant.primaryColor, fontSize: 18},
          ]}>
          240
        </Text>
      </View>

      <View style={{flexDirection: 'row', marginTop: '5%'}}>
        <TouchableOpacity
          style={[tab == false && styles.tabActiveStyle, styles.tabMainStyle]}
          onPress={() => setTab(false)}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={[
                {color: !tab && constant.primaryColor, marginRight: 8},
                styles.tabText,
              ]}>
              Upcomming
            </Text>
            <View
              style={[
                styles.ShadowVideo,
                {backgroundColor: !tab ? '#FFEFD7' : constant.whiteLight},
              ]}>
              <Text
                style={[
                  styles.shadowText,
                  {color: !tab ? '#A05E03' : constant.titleLightColor},
                ]}>
                8
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={[tab == true && styles.tabActiveStyle, styles.tabMainStyle]}
          onPress={() => setTab(true)}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <Text
              style={[
                {color: tab && constant.primaryColor, marginRight: 8},
                styles.tabText,
              ]}>
              Completed
            </Text>
            <View
              style={[
                styles.ShadowVideo,
                {backgroundColor: tab ? '#FFEFD7' : constant.whiteLight},
              ]}>
              <Text
                style={[
                  styles.shadowText,
                  {color: tab ? '#A05E03' : constant.titleLightColor},
                ]}>
                7
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        onPress={() => setfilterModal(true)}
        style={styles.FilterView}>
        <Text style={styles.tabText}>Filter</Text>
        <Image
          style={{height: 25, width: 25, marginLeft: 10}}
          source={require('../../assets/images/icon/setting-4.png')}
        />
      </TouchableOpacity>

      {/* <View
        style={{
          flexDirection: 'row-reverse',
          flexWrap: 'wrap',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: constant.ScreenHeight * 0.02,
          marginTop: constant.ScreenHeight * 0.02,
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: '#FAFAFA',
            flexDirection: 'row',
            alignItems: 'center',
            alignSelf: 'flex-end',
            paddingHorizontal: 15,
            paddingVertical: 3,
            borderRadius: 20,
          }}>
          <Text style={styles.tabText}>Filter</Text>
          <Image
            style={{height: 25, width: 25, marginLeft: 10}}
            source={require('../../assets/images/icon/setting-4.png')}
          />
        </TouchableOpacity>
        {DATA.map((item, index) => renderFilter(item, index))}
      </View> */}
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
      <View></View>
      {renderAddBtn()}
      <Modal transparent={true} visible={filterModal}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: 'rgba(0,0,0,0.5)',
          }}>
          <View
            style={{
              width: constant.ScreenWidth - 64,
              height: constant.ScreenHeight / 2,
              backgroundColor: constant.white,
              borderRadius: 20,
            }}>
            <View style={{flexDirection: 'row', margin: 10}}>
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(227, 126, 60, 0.1)',
                  height: 32,
                  width: 82,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: constant.primaryColor,
                    fontFamily: constant.interRegular,
                    fontSize: 14,
                  }}>
                  By PLace
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: 'rgba(227, 126, 60, 0.1)',
                  height: 32,
                  width: 82,
                  borderRadius: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{
                    color: constant.primaryColor,
                    fontFamily: constant.interRegular,
                    fontSize: 14,
                  }}>
                  By Date
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default Booking;
