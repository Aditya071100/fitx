import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet,Alert } from 'react-native';
import firebase from 'firebase/app';
import { getDatabase, ref, child, get, set } from "firebase/database";
import app from '../firebase.config';
import { getAuth, signInWithEmailAndPassword,createUserWithEmailAndPassword } from "firebase/auth";
const SignupScreen = ({navigation}) => {
  const auth=getAuth();
  

  const handleSignup = async() => {
    await createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            const id=userCredential.user.uid;
            console.log(user);
            navigation.replace("Tabs");
     
        
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode, errorMessage,error);
            Alert.alert("failed to sign up")
        });
  };
  const [phonenumber, setphonenumber] = useState()
  const [email, setEmail] = useState('')
  const [name, setname] = useState('')
  const [username, setusername] = useState('')
  const [password, setPassword] = useState('');
  const gotologin=()=>{
    navigation.navigate('Login');
  }


  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={['#000', '#154015', '#154015', '#154015', '#154015', '#000']} style={{ flex: 1 }}>
        <View style={styles.Box}>
          <Text style={styles.LoginHeading}>
            SIGN-UP
          </Text>
          <View style={styles.TextInputBox}>
            <TextInput
              placeholder='Phone Number'
              placeholderTextColor={'#878A8B'}
              onChangeText={(text) => setphonenumber(text)}
              value={phonenumber}
              style={{ color: 'white' }}
            />
          </View>
          <View style={[styles.TextInputBox, { marginTop: 15 }]}>
            <TextInput
              placeholder='Email ID'
              placeholderTextColor={'#878A8B'}
              style={{ color: 'white' }}
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
          </View>
          <View style={[styles.TextInputBox, { marginTop: 15 }]}>
            <TextInput
              placeholder='Full Name'
              placeholderTextColor={'#878A8B'}
              style={{ color: 'white' }}
              onChangeText={(text) => setname(text)}
              value={name}
            />
          </View>
     
          <View style={[styles.TextInputBox, { marginTop: 15 }]}>
            <TextInput
              placeholder='Password'
              placeholderTextColor={'#878A8B'}
              style={{ color: 'white' }}
              onChangeText={(text) => setPassword(text)}
              value={password}
              secureTextEntry={true}
            />
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <TouchableOpacity style={styles.IconBox}>
              <Image source={require('../images/GoogleIcon.png')} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.IconBox}>
              <Image source={require('../images/FacebookIcon.png')} />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={handleSignup} style={styles.LoginButton}>
            <Text style={styles.LoginButtonText}>Sign up</Text>
          </TouchableOpacity>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.TermText}> By signing up, you agree to our </Text>
            <TouchableOpacity><Text style={[styles.TermText, { color: '#4285F4', fontWeight: 'bold' }]}>  Terms And Policy</Text></TouchableOpacity>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={styles.ForgetText}> Have An aAcount?</Text>
            <TouchableOpacity onPress={gotologin}><Text style={[styles.ForgetText, { color: '#86D957', fontWeight: 'bold' }]}>  Log In</Text></TouchableOpacity>
          </View>

        </View>
      </LinearGradient>
    </View>
  )
}

const styles = StyleSheet.create({
  Box: {
    marginLeft: 20,
    marginTop: 80,
    backgroundColor: 'black',
    borderRadius: 20,
    width: 320,
    height: 620,
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
  },
  TermText: {
    color: '#ffffff',
    textAlign: 'center',
    fontSize: 10,
    fontWeight: '300',
    marginTop: 15
  }
})

export default SignupScreen;
