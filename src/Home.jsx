import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Burger from '../assets/Burger';
import Sushi from '../assets/Sushi';
import SeaFood from '../assets/SeaFood';
import Pizza from '../assets/Pizza';
export default function Home() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.topView}>
        <Icon name="menu" size={45} color="black" />
        <View style={styles.searchContainer}>
          <Icon name="search-outline" size={40} color="white" />
        </View>
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
      <View style={styles.popular}>
        <View>
          <Text>Melting Cheese</Text>
          <View>
            <Text>calories</Text>
          </View>
          <View></View>
          <View>
            <Text>9.47</Text>
          </View>
          <View></View>
        </View>
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
    marginTop: '5%',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 20,
    alignItems: 'center',
  },
  searchContainer: {
    backgroundColor: '#fb6464',
    elevation: 30,
    borderRadius: 999,
    padding: 10,
  },
  helloTextContainer: {
    marginTop: 20,
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
});
