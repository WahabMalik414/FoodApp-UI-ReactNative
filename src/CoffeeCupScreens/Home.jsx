import React from 'react';
import {View, StyleSheet, Text, Image, Dimensions} from 'react-native';
import CoffeeCup from '../../assets/coffeeAppAssets/CoffeeCup';
import WholePizza from '../../assets/WholePizza';
import GoogleLogo from '../../assets/coffeeAppAssets/GoogleLogo';

export default function Home() {
  const height = Dimensions.get('screen').height;
  return (
    <View style={styles.mainContainer}>
      <Image
        source={require('../../assets/coffeeAppAssets/CoffeeCup.png')}
        style={{width: '100%', height: height * 0.6}}
      />
      <View style={styles.headingContainer}>
        <Text style={styles.headingText}>
          Coffee so good, your taste buds will love it.
        </Text>
      </View>
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionText}>
          The best grain, the finest roast, the powerful flavor.
        </Text>
      </View>
      <View style={styles.signInContainer}>
        <GoogleLogo/>
        <Text style={styles.googleText}>Continue with Google</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'black',
  },
  headingContainer: {
    top: -50,
    paddingLeft: 24,
    paddingRight: 15,
  },
  headingText: {
    fontSize: 44,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 0.34,
    textAlign: 'center',
  },
  descriptionContainer: {
    top: -30,
    paddingLeft: 50,
    paddingRight: 50,
  },
  descriptionText:{
    fontSize: 20,
    color:'#A9A9A9',
    textAlign:'center',
    letterSpacing:0.4
  },
  signInContainer:{
    top: -13,
    marginLeft:28,
    marginRight:28,
    padding:15,
    flexDirection:'row',
    backgroundColor:'white',
    justifyContent:'center',
    alignItems:'center',
    gap:10,
    borderRadius:10,
  },
  googleText:{
    color:'#0000008a',
    fontSize:24,
    fontWeight:'500'
  }
});
