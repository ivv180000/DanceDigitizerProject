import {StyleSheet, View, Text, ScrollView, Button, TouchableOpacity, Image} from 'react-native';
import {PageHeader} from './components/PageHeader';
import {BottomButtons} from './components/BottomButtons';
import {ButtonPrimary} from './components/ButtonPrimary';

export function Profile(){

  return(
    <View>
      <View style={styles.top}>
        <View style={styles.TopButtons}>
          <TouchableOpacity>
            <Text style={styles.TopButtonText}> Settings </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text style={styles.TopButtonText}> Logout </Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.HeaderText}> Profile </Text>
      </View>
      <View style={styles.middle}>
        <View>
          <View style={styles.ProfileImage}>
            <Image style={styles.image} source={require('../assets/Profile_Button.png')}/>
          </View>

          <View>
            <Text style={styles.NameText}> NAME </Text>
            <Text style={styles.DescriptionText}> description </Text>
          </View>

        </View>
        <ScrollView style={styles.content}>
          <Text> CONTENT GOES HERE </Text>
        </ScrollView>
      </View>
      <View style={styles.bottom}>
        <BottomButtons/>
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  top: {
    height: '15%',
    justifyContent: 'center',
    backgroundColor: '#5DB075'
  },
  TopButtons: {
    flexDirection: 'row',
    marginTop: 40,
    justifyContent: 'space-between'
  },
  TopButtonText: {
    color: '#FFFFFF'
  },
  HeaderText: {
    color: '#FFFFFF',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  bottom: {
    height: '15%',
    backgroundColor: '#e8e8e8'
  },
  image:{
    width: 60,
	  height: 60,
    borderRadius: 70,
    overflow: "hidden",
    borderColor: '#F5F5F5',
  },
  middle: {
    height: '70%',
    padding: 20,
    justifyContent: 'space-evenly',
    borderColor: '#FFFFFF'
  },
  NameText:{
    textAlign: 'center',
    fontSize: 30
  },
  DescriptionText: {
    textAlign: 'center',
    fontSize: 20
  },
  content: {
    backgroundColor: '#F5F5F5',
    height: '50%'
  },
  ProfileImage: {
    alignItems: 'center'
  }
});

export default Profile;
