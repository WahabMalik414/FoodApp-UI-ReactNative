import React from 'react';
import {View, StyleSheet} from 'react-native';
import CoffeeCup from '../../assets/coffeeAppAssets/CoffeeCup';

export default function Home() {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.coffeeContainer}>
        <CoffeeCup />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  coffeeContainer: {
    height: '100%',
    width: '100%',
    backgroundColor: 'red',
  },
});
