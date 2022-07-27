import React, {useState, useRef, useEffect} from 'react';
import {
  StyleSheet,
  View,
  Image,
  Animated,
  Easing,
  SafeAreaView,
  TouchableOpacity,
  Text,
} from 'react-native';
import MapView from 'react-native-maps';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';

import constant from '../../utility/constant';

const GOOGLE_API_KEY = 'AIzaSyACh6WdEQSVQcJGNYaDVvrrZyLgeAfSQJM';

const LocationFinder = ({currentLocation, setLocationPopUp, updateLocation}) => {
  const [region, setRegion] = useState({
    latitude: currentLocation.direction.lat,
    longitude: currentLocation.direction.long,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });

  const [regionInit, setRegionInit] = useState({
    latitude: currentLocation.direction.lat,
    longitude: currentLocation.direction.long,
    latitudeDelta: 0.1,
    longitudeDelta: 0.1,
  });
  const [startedAnimation, setStartedAnimation] = useState(false);
  const translation = useRef(new Animated.Value(0)).current;

  const startImageRotateFunction = data => {
    Animated.timing(translation, {
      toValue: 0,
      timing: 5,
      easing: Easing.bounce,
      useNativeDriver: false,
    }).start();
    setStartedAnimation(false);
    setRegion({
      latitude: data.latitude,
      longitude: data.longitude,
      latitudeDelta: data.latitudeDelta,
      longitudeDelta: data.longitudeDelta,
    });
    console.log('CallingDataUp');
  };
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: constant.darkBlue}}>
      <View
        style={{
          minHeight: 50,
          width: '95%',
          flexDirection: 'row',
        }}>
        <TouchableOpacity onPress={() => setLocationPopUp(0)}>
          <Ionicons
            size={40}
            color={constant.white}
            name={'md-chevron-back-sharp'}
          />
        </TouchableOpacity>

        <GooglePlacesAutocomplete
          keepResultsAfterBlur={true}
          fetchDetails={true}
          styles={{
            container: {
              alignSelf: 'center',
              width: '100%',
              marginBottom: '5%',
            },
            textInput: {
              paddingHorizontal: 24,
              paddingVertical: 12,
              borderRadius: 12,
              borderColor: '#336688',
              borderWidth: 2,
              marginHorizontal: 16,
              marginBottom: 16,
              height: 46,
              width: '100%',
              // fontFamily: 'WorkSans-Regular',
              fontSize: 16,
              color: constant.text,
            },
          }}
          //   onChangeText={setData}
          enablePoweredByContainer={false}
          placeholder="Address"
          onPress={(data, details = null) => {
            console.log('data, details', details);
            // onPress(data.description);
            setRegion({
              latitude: details.geometry.location.lat,
              longitude: details.geometry.location.lng,
              latitudeDelta: 0.3,
              longitudeDelta: 0.3,
            });
          }}
          onFail={error => console.error(error)}
          query={{
            key: GOOGLE_API_KEY,
            language: 'en',
          }}
          textInputProps={{placeholderTextColor: constant.text}}
        />
        <TouchableOpacity onPress={() => updateLocation(region)}>
          <Ionicons size={40} color={constant.white} name={'checkmark-sharp'} />
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <MapView
          style={{height: '100%', width: '100%'}}
          provider={'google'}
          followUserLocation={true}
          loadingEnabled={true}
          onRegionChangeComplete={data => startImageRotateFunction(data)}
          showsCompass={true}
          zoomEnabled={true}
          onPanDrag={() => {
            if (!startedAnimation) {
              setStartedAnimation(true);
              Animated.timing(translation, {
                toValue: -20,
                easing: Easing.bounce,
                useNativeDriver: false,
              }).start();
            }
          }}
          showsMyLocationButton={true}
          initialRegion={regionInit}
          region={region}
        />
        <Animated.View style={[{position: 'absolute'}]}>
          <Animated.Image
            style={{
              height: 40,
              width: 40,
              transform: [{translateY: translation}],
            }}
            source={require('../../assets/images/pin.jpeg')}
          />
        </Animated.View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: 'row',
    marginBottom: '10%',
  },
});

export default LocationFinder;
