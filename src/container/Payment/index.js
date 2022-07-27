import React, {useEffect, useState} from 'react';
import {View, Text, FlatList, SafeAreaView} from 'react-native';
import {connect} from 'react-redux';
import Header from '../../components/Header';
import constant from '../../utility/constant';
import styles from './styles';
import PaymentCard from '../../components/PaymentCard';
import SearchBar from '../../components/SearchBar';
const Payment = props => {
  const renderItem = ({item}) => {
    return <PaymentCard data={item} navigation={props.navigation} />;
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header
        backColor={'rghba(0, 0, 0, 0)'}
        leftPress={() => {
          props.navigation.goBack();
        }}
        leftIcon={{
          fontfamily: 'Ionicons',
          name: 'md-chevron-back-sharp',
          color: constant.black,
        }}
        centerTextColor={constant.black}
        centerText={'Payment'}
      />
        <SearchBar
        // customStyle={{
        //   marginHorizontal: '5%',
        //   marginBottom: '2%',
        // }}
      />
      <FlatList
        contentContainerStyle={{
          marginHorizontal: '5%',
        }}
        data={constant.tempData}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      {/* <PaymentCard /> */}
    </SafeAreaView>
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

export default connect(mapStateToProps, mapDispatchToProps)(Payment);
