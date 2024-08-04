import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text,useColorScheme } from 'react-native';
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth"
import AsyncStorage from '@react-native-async-storage/async-storage';


const LoginScreen = ({navigation}) => {
  
  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'dark' ? 'black' : 'white';
  const auth = getAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
    
      console.log(user);
      storeObject(user);
      navigation.replace('Tabs')
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
    });

};
const storeObject = async ( value) => {
  try {
    const jsonValue = JSON.stringify(value);
    await AsyncStorage.setItem('fitQUser', jsonValue);
    console.log('Object stored successfully!');
  } catch (error) {
    console.log('Error storing object:', error);
  }
};
const gotosignup=()=>{
  navigation.navigate("Signup")
}
return (
  <View style={{ flex: 1, backgroundColor: '#113513' }}>
    <LinearGradient colors={['#000', '#154015', '#154015', '#154015', '#154015', '#000']} style={{ flex: 1 }}>


      <View style={styles.Box}>
        <Text style={styles.LoginHeading}>
          LOGIN
        </Text>
        <View style={styles.TextInputBox}>
          <TextInput
            placeholder='Username or Phone Number'
            placeholderTextColor={'#878A8B'}
            style={{ color: 'white' }}
            onChangeText={(text) => setusername(text)}
            value={username}
          />
        </View>
        <View style={[styles.TextInputBox, { marginTop: 15 }]}>
       
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <TouchableOpacity style={styles.IconBox}>
            <Image source={require('../images/GoogleIcon.png')} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.IconBox}>
            <Image source={require('../images/FacebookIcon.png')} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity>

          <Text style={styles.ForgetText}> Forgotten your password?</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={handleLogin} style={styles.LoginButton}>
          <Text style={styles.LoginButtonText}>Log In</Text>
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
          <Text style={styles.ForgetText}> Don’t have an account?</Text>
          <TouchableOpacity onPress={gotosignup}><Text style={[styles.ForgetText, { color: '#86D957', fontWeight: 'bold' }]}>  Sign Up</Text></TouchableOpacity>
        </View>

      </View>
    </LinearGradient>
  </View>
)
}

const styles = StyleSheet.create({
  Box: {
    marginLeft: 20,
    marginTop: 140,
    backgroundColor: 'black',
    borderRadius: 20,
    width: 320,
    height: 460
  },
  LoginHeading: {
    color: 'white',
    marginLeft: 25,
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold'
  },
  TextInputBox: {
    backgroundColor: '#33363A',
    marginHorizontal: 20,
    borderRadius: 20,
    marginTop: 40,
    paddingHorizontal: 15,
  },
  IconBox: {
    marginTop: 15,
    marginHorizontal: 50,
    backgroundColor: "#0D1D12",
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10
  },
  ForgetText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 12,
    fontWeight: '300',
    marginTop: 15
  },
  LoginButton: {
    backgroundColor: '#436A2E',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    width: 200,
    marginLeft: 55,
    borderRadius: 20,
    marginTop: 15
  },
  LoginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  }
})


export default LoginScreen;
