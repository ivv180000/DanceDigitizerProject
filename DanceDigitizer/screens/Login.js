import { StyleSheet, View} from 'react-native';
import {PageHeader} from './components/PageHeader';
import {InputText} from './components/InputText';
import {ButtonPrimary} from './components/ButtonPrimary.js';
import {TextButton} from './components/TextButton';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import React, {useState} from 'react';

export function Login() {
  const insets = useSafeAreaInsets();
  const navigation = useNavigation();

  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');

const handleContentPress = () => {

    if (email && password) {
      navigation.navigate('AppTabs');
      console.log('User data saved to the database');
    } else {
      //Alert.alert('Error', 'Please fill in all the fields');
    }
  }

const handleForgotPasswordPress = () => {
    navigation.navigate('ForgotPassword');
  }

  return (
    <View style={[styles.root, { paddingTop: insets.top }]}>
      <PageHeader headerText="Log In" />
      <InputText prompt="Email" onSave={(inputValue) => {
        // Add logic to save inputValue to the database
        setEmail(inputValue)
        console.log(`Saved ${inputValue} to the database`);
        }}/>
      <InputText prompt="Password" onSave={(inputValue) => {
        // Add logic to save inputValue to the database
        setPassword(inputValue)
        console.log(`Saved ${inputValue} to the database`);
        }}/>
      <ButtonPrimary buttonPrompt="Login" onPress={handleContentPress}/>
      <TextButton buttonPrompt="Forgot your password?" onPress={handleForgotPasswordPress} />

    </View>
  );
}

const styles = StyleSheet.create({
  root: {
    width: 375,
    height: 812,
    flexShrink: 0,
    flex: 1, 
  },
});

export default Login;
