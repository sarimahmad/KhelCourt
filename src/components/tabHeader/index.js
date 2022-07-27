import React, {useEffect, useState} from 'react';
import {View, Text, Image, TouchableOpacity,StyleSheet,Dimensions,FlatList} from 'react-native';
import {connect} from 'react-redux';
const {width, height} = Dimensions.get('window');

import constant from '../../utility/constant';
const tabHeader = ({data}) => {
  const [tabActive, setActiveTab] = useState(0);
  const renderItem = ({ item }) => {
    console.log(item)
  }
    return (
    //    <View style={styles.TopTabcontainer}>
    //     <TouchableOpacity
    //       onPress={() => setActiveTab(0)}
    //       style={[
    //         styles.topButton,
    //         {
    //           backgroundColor:
    //             tabActive === 0 ? constant.primaryColor : constant.whiteGrey,
    //           borderTopLeftRadius: 20,
    //           borderBottomLeftRadius: 20,
    //         },
    //       ]}>
    //       <Text
    //         style={[
    //           styles.topBtnText,
    //           {
    //             color:
    //               tabActive === 1 ? constant.primaryColor : constant.whiteGrey,
    //           },
    //         ]}>
    //         Pending
    //       </Text>
    //     </TouchableOpacity>
    //     <TouchableOpacity
    //       style={[
    //         styles.topButton,
    //         {
    //           backgroundColor:
    //             tabActive === 1 ? constant.primaryColor : constant.whiteGrey,
    //           borderTopRightRadius: 20,
    //           borderBottomRightRadius: 20,
    //         },
    //       ]}
    //       onPress={() => setActiveTab(1)}>
    //       <Text
    //         style={[
    //           styles.topBtnText,
    //           {
    //             color:
    //               tabActive === 0 ? constant.primaryColor : constant.whiteGrey,
    //           },
    //         ]}>
    //         Approved
    //       </Text>
    //     </TouchableOpacity>
    //   </View> 
    <FlatList
    data={data}
    renderItem={renderItem}
    keyExtractor={item => item.id}
  />
  );
};
const styles=StyleSheet.create({
   
    TopTabcontainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      marginBottom: '3%',
    },
    topButton: {
      width: width * 0.3,
      alignItems: 'center',
      justifyContent: 'center',
      height: height * 0.04,
      borderWidth: 1,
      borderColor: constant.primaryColor,
    },
    topBtnText: {
      color: 'white',
      fontSize: 12,
      // fontFam
    },
  });
export default tabHeader;
