import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export function ContentEntry({ title, description, creator, thumbnail, videoLink }){
  return (
    <View style={styles.container}>
      <Image source={{ uri: thumbnail }} style={styles.thumbnail} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
        <Text style={styles.creator}>{`By ${creator}`}</Text>
        <TouchableOpacity onPress={() => console.log(`Open video link: ${videoLink}`)}>
          <Text style={styles.videoLink}>Watch Video</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
  },
  thumbnail: {
    width: 100,
    height: 100,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  description: {
    marginBottom: 5,
  },
  creator: {
    color: '#777',
    marginBottom: 5,
  },
  videoLink: {
    color: '#007BFF',
  }
});

export default ContentEntry;
