/*
This file is the default screen of the project -  the root file
that loads upon running "npx expo start" 
*/
import React from 'react';
import{SafeAreaProvider} from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import SignUp from './screens/SignUp';
import ForgotPassword from './screens/ForgotPassword';
import Login from './screens/Login';
import Content from './screens/Content';
import Profile from './screens/Profile';
import Upload from './screens/Upload';
import VideoComponent from './screens/VideoComponent';
import VideoUploadComponent from './screens/VideoUploadComponent';
import NotesBox from './screens/NotesBox';
import StartingTimeStampSelection from './screens/StartingTimeStampSelection';
import Settings from './screens/Settings';
import Favorites from './screens/Favorites';
import Viewing from './screens/Viewing';
import Record from './screens/Record';
import VideoBreakdown from './screens/VideoBreakdown';
import Loading from './screens/Loading';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ContentStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Content" component={Content} />
      <Stack.Screen name="VideoStack" component={VideoStack} />
    </Stack.Navigator>
  );
};

const UploadStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Upload" component={VideoUploadComponent} />
      //<Stack.Screen name = "Record" component={Record} />
    </Stack.Navigator>
  )
}

const VideoStack = () => {
  return (
    <Stack.Navigator>
      //<Stack.Screen name="Viewing" component={Viewing} />
      //<Stack.Screen name="Loading" component={Loading} />
      //<Stack.Screen name = "VideoBreakdown" component={VideoBreakdown} />
      <Stack.Screen name = "VideoBreakdown" component= {VideoComponent} />
    </Stack.Navigator>
  )
}

const AppTabs = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="ContentStack" component={ContentStack} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="UploadStack" component={UploadStack} />
      <Tab.Screen name="Settings" component={Settings} />
      <Tab.Screen name="Favorites" component={Favorites} />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <SafeAreaProvider> 
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="SignUp" component={SignUp} />
          <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="ContentStack" component={ContentStack} />
          <Stack.Screen name="AppTabs" component={AppTabs} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
