import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('BottomScreen');
    }, 3000);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.txt}>OLX</Text>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0d9179',
  },
  txt: {
    color: 'white',
    fontSize: 80,
    fontFamily: 'cursive',
    fontWeight: 'bold',
  },
});
