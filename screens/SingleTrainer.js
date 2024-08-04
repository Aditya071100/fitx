import React from 'react';
import { View, Text, ScrollView, StyleSheet } from 'react-native';

const SingleTrainer = ({ route }) => {
  const { data } = route.params;

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        <Text style={styles.text}>{data}</Text>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    opacity:.5
  },
  scrollViewContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 20,
  },
  text: {
    color: 'black',
    fontSize: 16,
  },
});

export default SingleTrainer;
