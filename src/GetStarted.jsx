import React from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import DeliveryManSvg from '../assets/delivery-man';
const GetStarted = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <DeliveryManSvg />
      </View>
      <View style={styles.bottomContainer}>
        <Text style={styles.mainText}>Quick Deliver at your Doorstep</Text>
        <Text style={styles.detail}>
          Home delivery and online reservation system for restaurants and cafe
        </Text>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#ffb5b5' : '#FA6E6E',
            },
            styles.getStartedButton,
          ]}>
          <Text style={styles.getStartedText}>Get Started</Text>
        </Pressable>
      </View>
    </View>
  );
};
export default GetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f88',
    alignItems: 'center',
  },
  imageContainer: {
    alignSelf: 'flex-end',
  },
  bottomContainer: {
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: 'white',
    width: '75%',
    height: '30%',
    borderRadius: 25,
    elevation: 10,
  },
  mainText: {
    paddingLeft: 20,
    paddingRight: 20,
    textAlign: 'center',
    fontSize: 31,
    fontWeight: '600',
  },
  detail: {
    color: '#BDBDBD',
    textAlign: 'center',
    paddingLeft: 20,
    paddingRight: 20,
  },
  getStartedButton: {
    marginTop: 15,
    borderRadius: 40,
    elevation: 10,
    alignSelf: 'center',
    padding: 15,
    width: '50%',
  },
  getStartedText: {
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
  },
});
