import moment from 'moment';
import React, {useState, useCallback} from 'react';
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import constant from '../../utility/constant';
const NUM_OF_LINES = 3;
const SuggestionCard = ({data, userPress}) => {
  const [loadMore, setLoadMore] = useState(false);
  const [numOfLines, setNumOfLines] = useState(0);
  const onTextLayout = useCallback(e => {
    if (numOfLines == 0) setNumOfLines(e.nativeEvent.lines.length);
  });

  const onLoadMoreToggle = () => {
    setLoadMore(!loadMore);
  };
  return (
    <View style={styles.container}>
      <TouchableOpacity style={{flex: 0.3, justifyContent: 'center', alignItems: 'center' }} onPress={userPress}>
        <Image style={{height: 50, width: 50, borderRadius: 25}} source={data.user.profileImage ? {uri: data.user.profileImage} : require('../../assets/images/userimage.png') } />
      </TouchableOpacity>
      <View style={{flex: 1}}>
      <Text style={styles.namesuggestion}>{data.title}</Text>
      <Text style={styles.datesuggestion}>{moment(data.created_at).format('llll')}</Text>
      <Text
        style={styles.descriptionsuggestion}
        numberOfLines={
          numOfLines == 0 ? null : loadMore ? numOfLines : NUM_OF_LINES
        }
        onTextLayout={onTextLayout}>
        {data.text}
      </Text>
      {numOfLines > NUM_OF_LINES && (
        <TouchableOpacity onPress={onLoadMoreToggle}>
          <Text
            style={{
              color: constant.primaryColor,
              fontFamily: constant.PoppinsMedium,
            }}>
            {loadMore ? 'Load Less' : 'Load More'}
          </Text>
        </TouchableOpacity>
      )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: constant.white,
    marginBottom: '2%',
    paddingHorizontal: '2%',
    paddingVertical: '2%',
    flexDirection: 'row',
    // flexDirection: 'row',
    borderRadius: 10,
    //ios
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      height: 1,
      width: 1,
    },
    //android
    elevation: 1,
  },
  namesuggestion: {
    color: constant.primaryColor,
    fontFamily: constant.PoppinsSemiBold,
    fontSize: 20,
  },
  datesuggestion: {
    fontFamily: constant.PoppinsMedium,
    fontSize: 12,
  },
  descriptionsuggestion: {
    fontFamily: constant.PoppinsRegular,
  },
});

export default SuggestionCard;
