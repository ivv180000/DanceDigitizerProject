import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export function BottomButtons() {
  const navigation = useNavigation();

  const handleTabPress = (tabName) => {
    navigation.navigate(tabName);
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => handleTabPress('ContentStack')} style={styles.button}>
        <Text style={styles.buttonText}>Content</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabPress('Profile')} style={styles.button}>
        <Text style={styles.buttonText}>Profile</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabPress('UploadStack')} style={styles.button}>
        <Text style={styles.buttonText}>Upload</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabPress('Settings')} style={styles.button}>
        <Text style={styles.buttonText}>Settings</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handleTabPress('Favorites')} style={styles.button}>
        <Text style={styles.buttonText}>Favorites</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#ffffff',
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
  button: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: '#007BFF',
  }
});

export default BottomButtons;
