import { AntDesign, MaterialIcons, Entypo } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import Colors from '../constants/Colors';
import { Text, View } from './Themed';

const DishInfo = () => {

  const handleHelpPress = () => {

  }
  return (
    <View style={styles.dishWrapper}>
      <View style={styles.dishInfoContainer}>
          <Text style={styles.dishName}>Mush Room Chilli</Text>
          <Text style={styles.dishDescription}>Spicy</Text>
          <Text style={styles.dishPrice}>Rs.150</Text>
      </View>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
        <AntDesign name="like1" size={24} color="#0e76a8" />
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
             Like
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
        <MaterialIcons name="favorite" size={24} color="#c4302b" />
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
             Love
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleHelpPress} style={styles.helpLink}>
        <Entypo name="hand" size={24} color="#008000" />
          <Text style={styles.helpLinkText} lightColor={Colors.light.tint}>
             Favourite
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default DishInfo;

const styles = StyleSheet.create({
  dishWrapper: {
    // flex: 1,
    height: '30%',
    width: '80%',
    backgroundColor: 'yellow',
    borderRadius: 25
  },

  dishInfoContainer: {
  
    marginHorizontal: 10,
  },
  dishName: {
    fontWeight: 'bold',
    fontSize: 15
  },
  dishDescription: {
    color: '#f6f6'
  },
  dishPrice: {
    fontWeight: '600'
  },
  buttonContainer: {
    // flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    // justifyContent: 'center'
  },
  helpLink: {
    paddingVertical: 15,
    paddingHorizontal: 15
  },
  helpLinkText: {
    // textAlign: 'center',
  },
  separator: {
    marginHorizontal: 15,
    height: 1,
    width: '90%',
  },
});
