import React, { useEffect, useState } from 'react';
import { View, FlatList } from 'react-native';
import { connect } from 'react-redux';
import firestore from '@react-native-firebase/firestore';

import styles from './styles';
import constant from '../../utility/constant';
import Header from '../../components/Header';
import SuggestionCard from '../../components/SuggestionCard';
const Suggestions = props => {
  const [suggestionList, setSuggestionList] = useState([]);

  useEffect(() => {
    getSuggestion();
  }, []);

  const getSuggestion = () => {
    firestore()
      .collection('SUGGESTION')
      .orderBy('created_at', 'desc')

      .get()
      .then(querySnapshot => {
        let blockarr = querySnapshot.docs.map(doc => doc.data());
        setSuggestionList(blockarr);
      })
      .catch(error => {
        setRefreshing(false);

        console.log('err', error);
      });
  };

  const renderItem = ({ item }) => <SuggestionCard data={item} userPress={() => props.navigation.navigate('UserDetail', { userDetailData: item.user })} />;

  return (
    <View style={styles.container}>
      <Header
        backColor={'rghba(0, 0, 0, 0)'}
        centerTextColor={constant.black}
        centerText={'Suggestions'}
      />
      <FlatList
        data={suggestionList}
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
        style={{marginHorizontal:'3%'}}
      />
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

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);
