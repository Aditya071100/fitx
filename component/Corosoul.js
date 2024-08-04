import React, { useState, useEffect, useRef } from 'react';
import { ScrollView, Image, StyleSheet, View, Dimensions } from 'react-native';

const HorizontalPhotoScrollView = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const scrollViewRef = useRef(null);

  const images = [
    { id: 1, source: require('../images/143971-new-gym-wallpaper-2560x1600-720p.jpg') },
    { id: 2, source: require('../images/17_fitness.jpg') },
    { id: 3, source: require('../images/200524.jpg') },
    { id: 4, source: require('../images/21au1.jpg') },
    { id: 5, source: require('../images/Bollywood_Actor_Tiger_Shroff_Body_HD_Wallpaper.jpg') },
    { id: 6, source: require('../images/shahrukh-khan-37.jpg') },
    { id: 7, source: require('../images/women-fitness-model-sports-monochrome-gym-1080P-wallpaper.jpg') },
    // Add more images here
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      const newIndex = (currentImageIndex + 1) % images.length;
      scrollViewRef.current.scrollTo({
        x: newIndex * Dimensions.get('window').width,
        animated: true,
      });
      setCurrentImageIndex(newIndex);
    }, 3000);

    return () => clearInterval(interval);
  }, [currentImageIndex, images.length]);

  return (
    <ScrollView
      ref={scrollViewRef}
      horizontal
      contentContainerStyle={styles.container}
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      onMomentumScrollEnd={(event) => {
        const contentOffset = event.nativeEvent.contentOffset;
        const imageIndex = Math.round(contentOffset.x / Dimensions.get('window').width);
        setCurrentImageIndex(imageIndex);
      }}
    >
      {images.map((image) => (
        <View key={image.id} style={styles.imageContainer}>
          <Image source={image.source} style={styles.image} />
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
  
    alignItems: 'center',
    paddingVertical: 16,
  },
  imageContainer: {
   
    borderRadius: 8,
    overflow: 'hidden',
  },
  image: {
    width: Dimensions.get('window').width,
    height: 200,
    resizeMode: 'cover',
  },
});

export default HorizontalPhotoScrollView;
