import React from 'react';
import {View, Text, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/AntDesign';
import {StyleSheet} from 'react-native';
import WholePizza2 from '../assets/WholePizza2';
import { useNavigation } from '@react-navigation/native';
export default function ItemPage() {
  const navigation = useNavigation();
  const handleBack=()=>{
    navigation.goBack();
  }

  return (
    <View style={styles.mainContainer}>
      <View style={styles.topMenuContainer}>
        <Pressable onPress={handleBack}>
          <Icon name="back" size={30} color="black" />
        </Pressable>
        <Icon name="hearto" size={30} color="black" />
      </View>
      <Text style={styles.foodTitle}>Melting Cheese</Text>
      <Text style={styles.foodTitle}>
        <Text style={{color: 'red', fontSize: 18}}>$</Text> 9.47
      </Text>
      <View style={styles.wholePizzaContainer}>
        <WholePizza2 />
      </View>
      <View style={styles.plusMinusContainer}>
        <Pressable
          style={({pressed}) => [
            {backgroundColor: pressed ? '#ffb5b5' : '#FA6E6E'},
            styles.plusContainer,
          ]}>
          <Icon name="minus" size={30} color="white" />
        </Pressable>
        <Text style={styles.count}>2</Text>
        <Pressable
          style={({pressed}) => [
            {backgroundColor: pressed ? '#ffb5b5' : '#FA6E6E'},
            styles.plusContainer,
          ]}>
          <Icon name="plus" size={30} color="white" />
        </Pressable>
      </View>
      <Text style={styles.total}>$ 19.34</Text>
      <Pressable
        style={({pressed}) => [
          {
            backgroundColor: pressed ? '#ffb5b5' : '#FA6E6E',
          },
          styles.getStartedButton,
        ]}>
        <Text style={styles.getStartedText}>ADD TO CART</Text>
      </Pressable>
    </View>
  );
}

styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignItems: 'center',
  },
  topMenuContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 10,
    paddingRight: 20,
    paddingTop:20
  },
  foodTitle: {
    color: 'black',
    marginTop: 10,
    fontSize: 21,
    fontWeight: '600',
  },
  wholePizzaContainer: {
    padding: 40,
    elevation: 10,
    width: '100%', // Ensure the wholePizza container takes the full width
    aspectRatio: 1, // Ensure the aspect ratio remains 1:1
    overflow: 'hidden', // Hide any content that overflows the container
  },
  plusContainer: {
    padding: 5,
    elevation: 10,
    borderRadius: 10,
  },
  plusMinusContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '30%',
    alignItems: 'center',
  },
  count: {
    alignItems: 'center',
    fontSize: 20,
    color: 'black',
  },
  total: {
    marginTop: 7,
    fontSize: 20,
    justifyContent: 'center',
  },
  getStartedText: {
    alignSelf: 'center',
    fontWeight: '700',
    fontSize: 20,
    color: 'white',
  },
  getStartedButton: {
    marginTop: 100,
    borderRadius: 10,
    elevation: 10,
    alignSelf: 'center',
    padding: 15,
    width: '75%',
  },
});
