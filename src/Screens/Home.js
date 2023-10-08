import {StyleSheet, Text, View, Image, TextInput} from 'react-native';
import React from 'react';

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <Text style={styles.olx}>olx</Text>
        <View style={styles.motor}>
          <View style={styles.car}>
            <Image source={require('../Images/car.png')} style={styles.icon} />
          </View>
          <Text style={styles.topTxt}>MOTORS</Text>
        </View>
        <View style={styles.building}>
          <View style={styles.car}>
            <Image
              source={require('../Images/build.png')}
              style={styles.icon}
            />
          </View>
          <Text style={styles.topTxt}>PROPERTY</Text>
        </View>
      </View>
      <View style={styles.top1}>
        <View style={styles.arrow}>
          <Image
            source={require('../Images/location.png')}
            style={styles.icon3}
          />
          <Text>Others, Astore</Text>
          <Image
            source={require('../Images/arrowdown.png')}
            style={styles.icon2}
          />
        </View>
        <Image source={require('../Images/bell.png')} style={styles.icon1} />
      </View>
      <View style={styles.search}>
        <Image source={require('../Images/search.png')} style={styles.icon4} />
        <TextInput
          placeholder="What are you looking for ?"
          style={styles.input}
        />
      </View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  icon: {
    width: 22,
    height: 22,
  },
  top: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 10,
  },
  motor: {
    flexDirection: 'row',
  },
  building: {
    flexDirection: 'row',
  },
  car: {
    backgroundColor: '#adb3b2',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  olx: {
    fontSize: 29,
    fontFamily: 'fantasy',
    color: 'blue',
    fontWeight: 'bold',
  },
  topTxt: {
    marginTop: 7,
    marginLeft: 7,
  },
  icon1: {
    width: 22,
    height: 22,
  },
  top1: {
    flexDirection: 'row',
    marginHorizontal: 10,
    marginTop: 20,
    justifyContent: 'space-between',
  },
  arrow: {
    flexDirection: 'row',
    marginHorizontal: 5,
  },
  icon2: {
    width: 18,
    height: 18,
    marginLeft: 7,
  },
  icon3: {
    marginRight: 9,
    width: 20,
    height: 20,
  },
  search: {
    width: '90%',
    flexDirection: 'row',
    marginLeft: 20,
    marginTop: 10,
    borderWidth: 1,
    borderColor: '#c0ccc3',
  },
  icon4: {
    width: 17,
    height: 17,
    marginTop: 16,
    marginLeft: 15,
    tintColor: 'black',
  },
  input: {
    fontSize: 17,
    marginLeft: 10,
    width: 210,
    color: 'black',
    fontWeight: 'bold',
  },
});
