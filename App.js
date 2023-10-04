import React, { useEffect } from 'react';
import {SafeAreaView} from 'react-native'
import Signup from './src/screens/auth/Signup';
import { GoogleSignin } from '@react-native-google-signin/google-signin';

const WEB_CLIENT_ID = '800197101566-hgbq480nifu7c6qukeqlt6n66rs9pl59.apps.googleusercontent.com'
const IOS_CLIENT_ID = '800197101566-lf9thpvebd77fau6rcnjdskmu1d3v1so.apps.googleusercontent.com '
const REVERSED_CLIENT_ID = 'com.googleusercontent.apps.800197101566-lf9thpvebd77fau6rcnjdskmu1d3v1so'

const App = () => {
  useEffect(() => {
    GoogleSignin.configure({
      scopes: ['https://www.googleapis.com/auth/drive.readonly'],
      webClientId: WEB_CLIENT_ID,
      offlineAccess: true,
      iosClientId: IOS_CLIENT_ID,
    })
  }, [])
  return (
    <SafeAreaView>
      <Signup />
    </SafeAreaView>
  );
};

export default App