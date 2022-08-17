import React, { useEffect, useState } from 'react';
import { View, Text, Image, TouchableOpacity, FlatList, SafeAreaView } from 'react-native';
import { connect } from 'react-redux';
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
  useEffect(() => { }, []);

  const renderItem = ({ item }) => {
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
        <Text style={[styles.tabText, { color: '#E37E3C' }]}>collection</Text>
        <Entypo style={[{ color: '#E37E3C' }]} name="cross" size={15} />
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
              style={{ height: 25, width: 25 }}
              source={require('../../assets/images/icon/shoppingCart.png')}
            />
          </TouchableOpacity>
        )}
      />
      <View style={styles.coverContainer}>
        <View style={{ justifyContent: 'space-between', flexDirection: 'row' }}>
          <Text style={styles.HeaderText}>Total Bookings</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center' }}>
            <Text style={styles.HeaderText}>All</Text>
            <TouchableOpacity>
              <Image
                style={{ height: 25, width: 25, marginLeft: 10 }}
                source={require('../../assets/images/BotomIcons/calendar.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Text
          style={[
            styles.HeaderText,
            { color: constant.primaryColor, fontSize: 18 },
          ]}>
          240
        </Text>
      </View>

      <View style={{ flexDirection: 'row', marginTop: '5%' }}>
        <TouchableOpacity
          style={[tab == false && styles.tabActiveStyle, styles.tabMainStyle]}
          onPress={() => setTab(false)}>
          <Text
            style={[
              tab == false && { color: constant.primaryColor },
              styles.tabText,
            ]}>
            Upcomming
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[tab == true && styles.tabActiveStyle, styles.tabMainStyle]}
          onPress={() => setTab(true)}>
          <Text
            style={[
              tab == true && { color: constant.primaryColor },
              styles.tabText,
            ]}>
            Completed
          </Text>
        </TouchableOpacity>
      </View>
      <View
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
            style={{ height: 25, width: 25, marginLeft: 10 }}
            source={require('../../assets/images/icon/setting-4.png')}
          />
        </TouchableOpacity>
        {DATA.map((item, index) => renderFilter(item, index))}
      </View>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        showsVerticalScrollIndicator={false}
      />
      <View></View>
      {renderAddBtn()}
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

export default connect(mapStateToProps, mapDispatchToProps)(Booking);
