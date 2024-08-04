import React, { useState } from 'react';
import { View, TextInput, StyleSheet, TouchableOpacity, Text,useColorScheme } from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { getDatabase, ref, child, get, set } from "firebase/database";
const HealthForm = ({ age, gender, height, weight, medicalHistory, bodyType, setAge, setGender, setHeight, setWeight, setbodyType, handleSubmit,name,setName }) => {
  // Example usage
  const colorScheme = useColorScheme();

  
  const handleNameChange = (value) => {
    setName(value);
    console.log('Age:', value);
  };
  const handleAgeChange = (value) => {
    setAge(value);
    console.log('Age:', value);
  };

  const handleGenderChange = (value) => {
    setGender(value);
    console.log('Gender:', value);
  };

  const handleHeightChange = (value) => {
    setHeight(value);
    console.log('Height:', value);
  };

  const handleWeightChange = (value) => {
    setWeight(value);
    console.log('Weight:', value);
  };

  const handleBodyTypeChange = (value) => {
    setbodyType(value);
    console.log('Body Type:', value);
  };

  return (
    <View style={styles.container}>
       <TextInput
        style={styles.input}
        placeholderTextColor={'black'}
        placeholder="Gender"
        value={name}
        onChangeText={handleNameChange}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'black'}
        placeholder="Age"
        keyboardType="numeric"
        value={age}
        onChangeText={handleAgeChange}
      />
      
 

      <TextInput
        style={styles.input}
        placeholderTextColor={'black'}
        placeholder="Height (in cm)"
        keyboardType="numeric"
        value={height}
        onChangeText={handleHeightChange}
      />

      <TextInput
        style={styles.input}
        placeholderTextColor={'black'}
        placeholder="Weight (in kg)"
        keyboardType="numeric"
        value={weight}
        onChangeText={handleWeightChange}
      />

      <TextInput
        style={styles.input}
        placeholderTextColor={'black'}
        placeholder="Your body type"
        value={bodyType}
        onChangeText={handleBodyTypeChange}
      />

      <TouchableOpacity style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Submit</Text>
      </TouchableOpacity>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:50
  },
  input: {
    width: 300,
    height: 40,
    marginBottom: 20,
    borderWidth: 1,
    backgroundColor:"white",
   opacity:.7,
   
     color:"black",
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  button: {
    backgroundColor: 'black',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default HealthForm;
