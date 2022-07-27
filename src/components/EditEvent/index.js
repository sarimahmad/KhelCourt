import React, {useState, useEffect} from 'react';
import {
  Alert,
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Image,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';
import Geolocation from '@react-native-community/geolocation';
import Geocoder from 'react-native-geocoding';

import uuid from 'react-native-uuid';
import {connect} from 'react-redux';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ImagePicker from 'react-native-image-crop-picker';
import storage from '@react-native-firebase/storage';
import moment from 'moment';
import TagInput from 'react-native-tags-input';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import InputField from '../../container/AddEvent/inputField';
import PickerSelection from '../../container/AddEvent/PickerSelection';
import Header from '../Header';
import constant from '../../utility/constant';
import {EditEvent} from '../../services/FirestoreFunctions';
import LocationFinder from '../LocationFinder';
import Loader from '../../components/Loader';

const EditEventsrc = props => {
  const eventvalues = props.EditEventData;
  const [selectedDate, setSelectedDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [eventName, setEventName] = useState('');
  const [eventAccess, setEventAccess] = useState('public');
  const [eventDuration, setEventDuration] = useState('1');
  const [eventMaxPerson, setEventMaxPerson] = useState(0);
  const [eventCategory, setEventCategory] = useState('entertainment');
  const [eventType, setEventType] = useState('free');
  const [eventDescription, setEventDescription] = useState('');
  const [imageObj, setImageObj] = useState({});
  const [imageurl, setImageurl] = useState('');
  const [loading, setLoading] = useState(false);
  const [locationPopUp, setLocationPopUp] = useState(false);
  const [location, setLocation] = useState({});
  const [eventCost, setEventCost] = useState('');
  const [tags, setTags] = useState({
    tag: '',
    tagsArray: [],
  });

  const hideDatePicker = () => {
    props.setDateModel(false);
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    setSelectedDate(moment(date).format('lll'));
    hideDatePicker();
  };
  const updateTags = state => {
    setTags(state);
  };

  const uploadImageToStorage = (media, name) => {
    setLoading(true);
    const nameImage = uuid.v1();
    const reference = storage().ref(nameImage + '.jpg');
    const task = reference.putFile(media.path);

    task
      .then(() => {
        console.log('Image uploaded to the bucket!');
        getDownUrl(nameImage + '.jpg');
      })
      .catch(e => {
        setLoading(false);
        console.log('uploading image error => ', e);
      });
  };

  const getDownUrl = async name => {
    let url;
    if (imageObj.filename) {
      url = await storage().ref(name).getDownloadURL();
    } else {
      url = imageurl;
    }

    const dataToUpdate = {
      name: eventName,
      attendes_id: [],
      hash_tag: tags.tagsArray,
      location: location,
      access: eventAccess,
      category: eventCategory,
      date: selectedDate,
      description: eventDescription,
      duration: eventDuration,
      type: eventType,
      pic: url,
      host: props.userData,
      person_limit: eventMaxPerson,
      status: eventType == 'paid' ? '0' : '1',
      cost: eventCost,
    };
    EditEvent(eventvalues._id, dataToUpdate)
      .then(res => {
        Alert.alert('Added', 'Event been Updated', [
          {
            text: 'OK',
            onPress: () => {
              // setImageObj({});
              // setEventName('');
              // setEventCost('');
              // setEventDescription('');
              // props.setModalVisible(false);
              props.navProps.goBack();
            },
          },
        ]);
      })
      .catch(e => {
        console.log('uploading image error => ', e);
      });
    setLoading(false);
  };

  const openGalery = async => {
    ImagePicker.openPicker({
      width: 300,
      height: 300,
      cropping: true,
      compressImageQuality: 0.5,
    }).then(image => {
      console.log(image);
      setImageObj(image);
    });
  };

  const createEvent = async => {
    const allDataFilled =
      eventName != '' &&
      eventAccess != '' &&
      eventDuration != '' &&
      eventCategory != '' &&
      eventType != '' &&
      eventDescription != '' &&
      eventMaxPerson > 0 &&
      tags.tagsArray.length > 0;
    if (
      allDataFilled &&
      (eventType == 'free' ||
        (eventType == 'paid' && eventCost.trim().length > 0))
    ) {
      if (imageObj.filename) {
        uploadImageToStorage(imageObj, props.userData._id + imageObj.filename);
      } else {
        getDownUrl(imageurl);
      }
    } else {
      Alert.alert('Incomplete', 'Please fill all data');
    }
  };

  const ChangeLocation = (locationText, locationobj) => {
    if (locationText) {
      let locobj = {
        address: locationText,
        direction: {
          lat: 0,
          long: 0,
        },
      };

      setLocation(locobj);
    } else {
      setLocation(locationobj);
    }
    // setLocationPopUp(false);
  };

  const getLocation = data => {
    console.log('looooc', data.latitude, data.longitude);
    Geocoder.from(data.latitude, data.longitude)
      .then(json => {
        let addressComponent = json.results[0].formatted_address;
        setLocation({
          direction: {
            lat: data.latitude,
            long: data.longitude,
          },
          address: addressComponent,
        });
        setLocationPopUp(false);
      })
      .catch(error => {
        setLocationPopUp(false);
        console.warn(error);
      });
  };

  useEffect(() => {
    // props.EditEventData
    console.log('-=-=-=-', props.EditEventData.name);
    setImageurl(eventvalues.pic);
    setEventName(eventvalues.name);
    setSelectedDate(eventvalues.date);
    setEventAccess(eventvalues.access);
    setEventDuration(eventvalues.duration);
    setEventType(eventvalues.type);
    setEventCategory(eventvalues.category);
    setEventMaxPerson(eventvalues.person_limit);
    setEventDescription(eventvalues.description);
    setLocation(eventvalues.location);
    setTags({
      tag: '',
      tagsArray: eventvalues.hash_tag,
    });
  }, []);

  return props.addDateEvent && !props.modalVisible ? (
    <DateTimePickerModal
      isVisible={props.addDateEvent}
      mode="datetime"
      minimumDate={new Date()}
      onConfirm={handleConfirm}
      onCancel={hideDatePicker}
    />
  ) : (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.modalVisible}>
      {locationPopUp ? (
        <LocationFinder
          currentLocation={location}
          updateLocation={location => getLocation(location)}
          setLocationPopUp={() => setLocationPopUp(false)}
        />
      ) : (
        <SafeAreaView style={styles.centeredView}>
          <Header
            backColor={'rghba(0, 0, 0, 0)'}
            leftPress={() => {
              // setImageObj({});
              // setEventName('');
              // setEventDescription('');
              props.setModalVisible(!props.modalVisible);
            }}
            leftIcon={{
              fontfamily: 'Ionicons',
              name: 'md-chevron-back-sharp',
              color: constant.black,
            }}
            centerTextColor={constant.black}
            centerText={'Edit Event'}
          />
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            style={{flex: 1}}>
            <View style={styles.modalView}>
              <ScrollView style={{paddingHorizontal: 10}}>
                <TouchableOpacity onPress={() => openGalery()}>
                  {
                    <Image
                      style={styles.FontProfile}
                      source={{uri: imageObj.path ? imageObj.path : imageurl}}
                    />
                  }
                </TouchableOpacity>
                <InputField
                  placeholder={'Enter Event Name'}
                  value={eventName}
                  onChangeText={text => setEventName(text)}
                  headerName={'Event Name'}
                />
                <Text
                  style={{
                    fontFamily: constant.PoppinsBold,
                    fontSize: 15,
                    marginTop: 10,
                  }}>
                  {' Date and Time'}
                </Text>
                <TouchableOpacity
                  onPress={() => {
                    setDatePickerVisibility(true);
                  }}
                  style={[
                    styles.input,
                    {
                      height:
                        Platform.OS == 'ios'
                          ? constant.ScreenHeight * 0.05
                          : constant.ScreenHeight * 0.07,
                      borderRadius: 10,
                      justifyContent: 'center',
                    },
                  ]}>
                  <Text>
                    {selectedDate?.trim().length > 0
                      ? selectedDate.toString()
                      : 'Select Date And time'}
                  </Text>
                </TouchableOpacity>
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="datetime"
                  minimumDate={new Date()}
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <PickerSelection
                    items={[
                      {label: 'Private', value: 'private'},
                      {label: 'Public', value: 'public'},
                    ]}
                    placeholder={'Select Access'}
                    value={eventAccess}
                    onValueChange={value => setEventAccess(value)}
                    headerName={'Access'}
                  />
                  <PickerSelection
                    items={[
                      {label: '1 hour', value: '1'},
                      {label: '2 hour', value: '2'},
                      {label: '3 hour', value: '3'},
                      {label: '4 hour', value: '4'},
                      {label: '5 hour', value: '5'},
                      {label: '6 hour', value: '6'},
                    ]}
                    placeholder={'Select Duration'}
                    value={eventDuration}
                    onValueChange={value => setEventDuration(value)}
                    headerName={'Duration'}
                  />
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <PickerSelection
                    items={[
                      {label: 'Free', value: 'free'},
                      {label: 'Paid', value: 'paid'},
                    ]}
                    placeholder={'Select Type'}
                    value={eventType}
                    onValueChange={value => setEventType(value)}
                    headerName={'Type'}
                  />
                  <PickerSelection
                    items={[
                      {label: 'Entertainment', value: 'entertainment'},
                      {label: 'Educational', value: 'educational'},
                      {label: 'Political', value: 'political'},
                      {label: 'Sports', value: 'sports'},
                      {label: 'Social', value: 'social'},
                    ]}
                    value={eventCategory}
                    placeholder={'Select Category'}
                    onValueChange={value => setEventCategory(value)}
                    headerName={'Category'}
                  />
                </View>
                {eventType == 'paid' && (
                  <InputField
                    placeholder={'Enter amount in RS.'}
                    value={eventCost}
                    keyboardType={'number-pad'}
                    onChangeText={text => setEventCost(text)}
                    headerName={'Event Cost'}
                  />
                )}
                <InputField
                  placeholder={'Enter the no. of person'}
                  value={eventMaxPerson}
                  keyboardType={'number-pad'}
                  enablebtn={3}
                  onChangeText={text => setEventMaxPerson(text)}
                  headerName={'Person Limit'}
                />
                <InputField
                  description={true}
                  placeholder={'Enter Description'}
                  value={eventDescription}
                  onChangeText={text => setEventDescription(text)}
                  headerName={'Description'}
                />
                <View style={{flexDirection: 'row'}}>
                  <InputField
                    placeholder={'Enter Address'}
                    value={location.address}
                    headerName={'Location'}
                    onChangeText={text => ChangeLocation(text, '')}
                    styleinput={{
                      borderTopRightRadius: 0,
                      borderBottomRightRadius: 0,
                      width: constant.ScreenWidth * 0.84,
                    }}
                  />
                  <TouchableOpacity
                    onPress={() => {
                      setLocationPopUp(true);
                    }}
                    style={{
                      backgroundColor: constant.primaryColor,
                      alignSelf: 'flex-end',
                      borderTopRightRadius: 12,
                      borderBottomRightRadius: 12,
                      borderBottomEndRadius: 12,
                      height:
                        Platform.OS == 'ios'
                          ? constant.ScreenHeight * 0.05
                          : constant.ScreenHeight * 0.07,
                      width:
                        Platform.OS == 'ios'
                          ? constant.ScreenHeight * 0.05
                          : constant.ScreenHeight * 0.07,
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <FontAwesome5 name={'location-arrow'} size={20} />
                  </TouchableOpacity>
                </View>

                <TagInput
                  updateState={updateTags}
                  tags={tags}
                  label="Hash Tags"
                  labelStyle={{
                    // color: '#fff',
                    marginBottom: '2%',
                    fontFamily: constant.PoppinsBold,
                    fontSize: 14,
                  }}
                  inputContainerStyle={{
                    backgroundColor: '#fff',
                    borderRadius: 10,
                  }}
                  containerStyle={{marginVertical: 5}}
                />

                <TouchableOpacity
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => createEvent()}>
                  <Text style={styles.textStyle}>Update</Text>
                </TouchableOpacity>
              </ScrollView>
            </View>
          </KeyboardAvoidingView>
        </SafeAreaView>
      )}
      {loading && <Loader />}
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: constant.whiteGrey,
  },
  modalView: {
    flex: 1,
    paddingTop: constant.ScreenHeight * 0.05,
  },
  button: {
    borderRadius: 20,
    height: 40,
    elevation: 2,
    justifyContent: 'center',
    alignItems: 'center',
    width: 200,
    alignSelf: 'center',
  },
  buttonClose: {
    backgroundColor: constant.primaryColor,
    marginTop: constant.ScreenHeight * 0.02,
  },
  textStyle: {
    color: constant.white,
    fontSize: 15,
    fontFamily: constant.PoppinsBold,
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  imageProfile: {
    height: constant.ScreenHeight * 0.2,
    width: constant.ScreenHeight * 0.2,
    alignSelf: 'center',
  },
  FontProfile: {
    backgroundColor: constant.white,
    height: constant.ScreenHeight * 0.15,
    width: constant.ScreenWidth * 0.5,
    borderRadius: 20,
    alignSelf: 'center',
    marginVertical: 9,
    padding: constant.ScreenHeight * 0.02,
  },
  input: {
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    backgroundColor: constant.white,
    fontFamily: constant.PoppinsRegular,
    paddingHorizontal: constant.ScreenWidth * 0.05,
    fontSize: 14,
    marginTop: 10,
  },
});

const mapStateToProps = state => {
  return {
    userToken: state.authData.token,
    userData: state.authData.userData,
  };
};

const mapDispatchToProps = dispatch => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(EditEventsrc);
