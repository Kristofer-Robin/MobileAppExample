import React, { useEffect } from 'react';
import {SafeAreaView} from 'react-native'
import Signup from './src/screens/auth/Signup';

const WEB_CLIENT_ID = '250697628934-dnjmktrtdn07j7bv5514flj3dr0k8k04.apps.googleusercontent.com'
const IOS_CLIENT_ID = ''
const REVERSED_CLIENT_ID = ''

const App = () => {
  return (
    <SafeAreaView>
      <Signup />

    </SafeAreaView>
  );
};

export default App