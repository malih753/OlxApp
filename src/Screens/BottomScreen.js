import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import Home from './Home';
import Chat from './Chat';
import Sell from './Sell';
import Ads from './Ads';
import Account from './Account';

const BottomScreen = () => {
  const [selectedTab, setSelectedTab] = useState(0);

  return (
    <View style={styles.container}>
      {selectedTab == 0 ? (
        <Home />
      ) : selectedTab == 1 ? (
        <Chat />
      ) : selectedTab == 2 ? (
        <Sell />
      ) : selectedTab == 3 ? (
        <Ads />
      ) : (
        <Account />
      )}

      <View style={styles.bottom}>
        <TouchableOpacity
          style={styles.bottombar}
          onPress={() => setSelectedTab(0)}>
          <Image
            source={
              selectedTab == 0
                ? require('../Images/home_fill.png')
                : require('../Images/home.png')
            }
            style={styles.bottomIcon}
          />
          <Text>HOME</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottombar}
          onPress={() => setSelectedTab(1)}>
          <Image
            source={require('../Images/chat.png')}
            style={styles.bottomIcon}
          />
          <Text>CHATS</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.bottombar}
          onPress={() => setSelectedTab(2)}>
          <View style={styles.circle}>
            <Image
              source={require('../Images/plus.png')}
              style={styles.bottomIcon1}
            />
          </View>
          <Text style={styles.sell}>SELL</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.bottombar]}
          onPress={() => setSelectedTab(3)}>
          <Image
            source={require('../Images/banner.png')}
            style={[styles.bottomIcon]}
          />
          <Text>MY ADS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.bottombar}
          onPress={() => setSelectedTab(4)}>
          <Image
            source={require('../Images/user.png')}
            style={styles.bottomIcon}
          />
          <Text>ACCOUNT</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bottom: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 70,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 4,
  },
  bottombar: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomIcon: {
    width: 20,
    height: 20,
    marginBottom: 7,
  },
  bottomIcon1: {
    width: 17,
    height: 17,
    marginHorizontal: 17,
    marginVertical: 18,
  },
  sell: {
    marginBottom: 10,
  },
  circle: {
    borderRadius: 50,
    borderWidth: 6,
    width: 27,
    height: 27,
    marginTop: -20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#1ee8e5',
    borderLeftColor: '#1ee8e5',
    borderTopColor: '#0b7821',
    borderBottomColor: '#f0f01d',
    paddingHorizontal: 21,
    paddingVertical: 21,
    marginVertical: 10,
  },
});
