import React, { useEffect } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import AnimatedSplash from "react-native-animated-splash-screen";

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    // Simulate a loading process
    setTimeout(() => {
      // Navigate to the main screen or any other screen
      navigation.replace('Login'); // Replace with your desired screen
    }, 3000); // Adjust the duration as per your needs
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../images/143971-new-gym-wallpaper-2560x1600-720p.jpg')}
        style={styles.image}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:"black"
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
    borderRadius:140
  },
});

export default SplashScreen;
