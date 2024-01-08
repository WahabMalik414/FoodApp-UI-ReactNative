import React from 'react';
import {StyleSheet, Text, View, Pressable} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PlusIcon from 'react-native-vector-icons/AntDesign';
import Burger from '../assets/Burger';
import Sushi from '../assets/Sushi';
import SeaFood from '../assets/SeaFood';
import Pizza from '../assets/Pizza';
import Fire from '../assets/Fire';
import WholePizza from '../assets/WholePizza';
import WholePizza2 from '../assets/WholePizza2';
export default function Home() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topView}>
        <Icon name="menu" size={45} color="black" />
        <Pressable
          style={({pressed}) => [
            {backgroundColor: pressed ? '#ffb5b5' : '#fb6464'},
            styles.searchContainer,
          ]}>
          <Icon name="search-outline" size={40} color="white" />
        </Pressable>
      </View>
      <View style={styles.helloTextContainer}>
        <Text style={styles.userNameStyle}>Hi Alex</Text>
        <Text style={styles.userGreeting}>Find your Delicious Food</Text>
      </View>
      <View style={styles.menu}>
        <View style={styles.itemHolder}>
          <Burger />
        </View>
        <View style={styles.itemHolder}>
          <Pizza />
        </View>
        <View style={styles.itemHolder}>
          <Sushi />
        </View>
        <View style={styles.itemHolder}>
          <SeaFood />
        </View>
      </View>
      <View style={styles.popularTextContainer}>
        <Text style={styles.popularText}>Popular</Text>
      </View>
      <View style={styles.popularContainer}>
        <View style={styles.popular}>
          <Text style={styles.itemName}>Melting Cheese</Text>
          <View style={styles.calorieRow}>
            <Fire />
            <Text style={{color: 'red'}}>44 calories</Text>
          </View>
          <View style={styles.wholePizzaContainer}>
            <WholePizza />
          </View>
          <View>
            <Text style={styles.itemPrice}>
              <Text style={{color: 'red'}}>$ </Text>9.47
            </Text>
          </View>
          <Pressable
            style={({pressed}) => [
              {backgroundColor: pressed ? '#ffb5b5' : '#FA6E6E'},
              styles.plusContainer,
            ]}>
            <PlusIcon name="plus" size={30} color="white" />
          </Pressable>
        </View>
        <View style={styles.popular}>
          <Text style={styles.itemName}>Pizza Capricc</Text>
          <View style={styles.calorieRow}>
            <Fire />
            <Text style={{color: 'red'}}>55 calories</Text>
          </View>
          <View style={styles.wholePizzaContainer}>
            <WholePizza2 />
          </View>
          <View>
            <Text style={styles.itemPrice}>
              <Text style={{color: 'red'}}>$ </Text>12.55
            </Text>
          </View>
          <Pressable
            style={({pressed}) => [
              {backgroundColor: pressed ? '#ffb5b5' : '#FA6E6E'},
              styles.plusContainer,
            ]}>
            <PlusIcon name="plus" size={30} color="white" />
          </Pressable>
        </View>
      </View>
      <View style={styles.menuButtomContainer}>
        <Pressable
          style={({pressed}) => [
            {
              backgroundColor: pressed ? '#ffb5b5' : '#FA6E6E',
            },
            styles.menuBottom,
          ]}>
          <Text style={styles.menuText}>Menu</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  topView: {
    flexDirection: 'row',
    height: '15%',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  searchContainer: {
    elevation: 30,
    borderRadius: 999,
    padding: 10,
  },
  helloTextContainer: {
    height: '15%',
    paddingLeft: 20,
    justifyContent: 'center',
  },
  userNameStyle: {
    color: '#fc605f',
    fontSize: 20,
    fontWeight: '400',
  },
  userGreeting: {
    fontSize: 22,
    color: '#4F4F4F',
    fontWeight: '600',
  },
  itemHolder: {
    backgroundColor: 'white',
    padding: 10,
    elevation: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  menu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: '10%',
    paddingLeft: 20,
  },
  popularText: {
    paddingLeft: 20,
    color: '#4F4F4F',
    fontSize: 22,
    fontWeight: '700',
  },
  popularTextContainer: {
    marginTop: 50,
  },

  itemName: {
    fontSize: 18,
    color: 'black',
    fontWeight: '500',
  },
  itemPrice: {
    fontSize: 18,
    fontWeight: '600',
    color: 'black',
  },
  calorieRow: {
    flexDirection: 'row',
    gap: 10,
  },
  popularContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  popular: {
    width: '40%',
    padding: 15,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 10,
    borderRadius: 20,
  },
  wholePizzaContainer: {
    marginTop: 10,
    width: '100%', // Ensure the wholePizza container takes the full width
    aspectRatio: 1, // Ensure the aspect ratio remains 1:1
    overflow: 'hidden', // Hide any content that overflows the container
  },
  plusContainer: {
    borderRadius: 999,
    padding: 5,
    marginTop: 10,
  },
  menuBottom: {
    justifyContent: 'center',
    width: '20%',
    alignItems: 'center',
    height: '70%',
    elevation: 10,
    borderRadius: 999,
  },
  menuButtomContainer: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  menuText: {
    fontSize: 22,
    color: 'white',
  },
});
