import {Dimensions, Appearance} from 'react-native';

const {width, height} = Dimensions.get('window');
const colorScheme = Appearance.getColorScheme();

export default {
  //Screen Height Width
  ScreenHeight: height,
  ScreenWidth: width,

  //google Key
  googleKey: 'AIzaSyACh6WdEQSVQcJGNYaDVvrrZyLgeAfSQJM',
  //Font Family
  interBlack: 'Inter-Black',
  interBold: 'Inter-Bold',
  interExtraBold: 'Inter-ExtraBold',
  interExtraLight: 'Inter-ExtraLight',
  interLight: 'Inter-Light',
  interMedium: 'Inter-Medium',
  interMedium: 'Inter-Regular',
  interSeiBold: 'Inter-SemiBold',
  interThin: 'Inter-Thin',

  //Colors
  primaryColor: '#FEA729',
  black:'black',
  darkBlue: '#102733',
  tabColor: '#152F3E',
  whiteGrey: '#eee',
  darkGrey: '#495057',
  mediumGrey: '#6e6969',
  white: 'rgba(255,255,255,1)',
  lightBlue:'#283F4D',

  // ALERTS
  success: '#0c4128',
  successBackground: '#d1e7dd',
  danger: '#811a21',
  dangerBackground: '#f8d7da',
  warning: '#793e02',
  warningBackground: '#fff3cd',
  successgreen:'#31db0f',
  rejectred:'#fc4747',

  //Dummy Data
   tempData : [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: '1 Item',
      descrption: 'lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      date: '10/09/22',
      time: '10:00 AM',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3adds53abb28ba',
      title: '2 Item',
      descrption: 'lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      date: '10/09/22',
      time: '10:00 AM',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad5ds3abb28ba',
      title: '3 Item',
      descrption: 'lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      date: '10/09/22',
      time: '10:00 AM',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad5dsdabb28ba',
      title: '4 Item',
      descrption: 'lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      date: '10/09/22',
      time: '10:00 AM',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbcc1aa97f63',
      title: '5 Item',
      descrption: 'lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      date: '10/09/22',
      time: '10:00 AM',
    },
    {
      id: '58694a0f-3da1-471f-bd96-v45571e29d72',
      title: '6 Item',
      descrption: 'lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      date: '10/09/12',
      time: '10:00 AM',
    },
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3sdd53abb28ba',
      title: '7 Item',
      descrption: 'lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      date: '10/09/22',
      time: '10:00 AM',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fb91aa97f63',
      title: '8 Item',
      descrption: 'lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      date: '10/09/22',
      time: '10:00 AM',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145d71e29d72',
      title: '9 Item',
      descrption: 'lorem ipsum dolor sit amet consectetur adipisicing elit.lorem ipsum dolor sit amet consectetur adipisicing elit. ',
      date: '10/09/12',
      time: '10:00 AM',
    },
  ],
};
