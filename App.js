// // In App.js in a new project

// import * as React from 'react';
// import { View, Text } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import List from './screens/List';
// import Login from './screens/Login';
// import SignupScreen from './screens/SignUp';
// import LoginScreen from './screens/Login';
// import SplashScreen from './screens/Home';
// import MainScreen from './screens/MainScreen';



// const Stack = createNativeStackNavigator();

// function App() {
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName="Home">
//         <Stack.Screen name="Welcome" component={SplashScreen} />
//         <Stack.Screen name="Signup" component={SignupScreen} />
//         <Stack.Screen name="Login" component={LoginScreen} />
//         <Stack.Screen name="Home" component={MainScreen} options={{ headerShown: false }} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;

import { Text, View,StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import List from './screens/List';
import Login from './screens/Login';
import SignupScreen from './screens/SignUp';
import LoginScreen from './screens/Login';
import SplashScreen from './screens/Home';
import MainScreen from './screens/MainScreen';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import Icon3 from 'react-native-vector-icons/Entypo';
import UerProfile from './screens/UerProfile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase, ref, child, get, set } from "firebase/database";
import { useEffect, useState } from 'react';
import { retrieveData, retrievealltrainer, retrievefireabse, retrievefireabsetrainer } from './action';
import Card from './component/trainerCard';
import Joinastrainer from './screens/Joinastrainer';
import store from './store';
import { Provider } from 'react-redux';
import Signlemealpage from './screens/Signlemealpage';
import TrainerList from './screens/TrainerList';
import SingleTrainer from './screens/SingleTrainer';
import Chatpage from './screens/Chatpage';
import Message from './screens/Message';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
let obj1={}
export default function App() {
  const [obj, setObj] = useState ()
  const [data, setData] = useState();
  const [userformstatus, setuserformstatus] = useState(false);
  const [useruid, setuseruid] = useState();
  const [userfirbabsedata,setuserfirabsedata]=useState();
  useEffect(()=>{
    store.dispatch(retrieveData());
    store.dispatch(retrievefireabse(useruid));
    store.dispatch(retrievefireabsetrainer(useruid));
    store.dispatch(retrievealltrainer(useruid));
  },[useruid]);

  useEffect (() => {
    const fetchdata = async () => {
      try {
        const obj = await retrieveObject('fitQUser');
        if (obj) {
          setObj(obj);
          obj1=obj;
          setuseruid(obj.uid);
          console.log(obj);
        }
  
        const dbRef = ref(getDatabase());
        const snapshot = await get(child(dbRef, `/fitQUser/${useruid}`));
        if (snapshot.exists()) {
          console.log("data:----", snapshot.val());
          setuserformstatus(true);
          setuserfirabsedata(snapshot.val());
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error('Error retrieving object:', error);
      }
    };
  
    fetchdata();
  }, [useruid]);
  const retrieveObject = async (key) => {
    try {
        const jsonValue = await AsyncStorage.getItem(key);
        if (jsonValue != null) {
            const value = JSON.parse(jsonValue);
           // console.log('Retrieved object:', value);
            return value;
        }
    } catch (error) {
        console.log('Error retrieving object:', error);
    }
};
  
  return (
    
  <Provider store={store}>
         <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Welcome" component={SplashScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="Signup" component={SignupScreen} />
        <Stack.Screen name="Login" component={obj?TabNavigator: LoginScreen} options={{ headerShown: false }}  />
        <Stack.Screen name="Loginastrainer" component={Card} initialParams={{obj:obj,userfirbabsedata:userfirbabsedata}}/>
        <Stack.Screen name="Joinastrainer" component={Joinastrainer} initialParams={{obj}}/>
        <Stack.Screen name="Tabs" component={()=><TabNavigator obj1={obj} userfirbabsedata={userfirbabsedata} />} options={{ headerShown: false }}  />
        <Stack.Screen name="Singlemeal" component={Signlemealpage} options={{headerShown:false}}/>
        <Stack.Screen name="Trainerdetail" component={SingleTrainer} options={{headerShown:false}}/>
        <Stack.Screen name="Message" component={Chatpage} options={{headerShown:false}}/>
        <Stack.Screen name="Chats" component={Message} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  </Provider>

 
  );
}

function TabNavigator({obj1,userfirbabsedata}) {
  return (
    <Tab.Navigator       screenOptions={{
      headerShown:false,
      tabBarShowLabel:false,
      tabBarStyle:{
          backgroundColor:'rgba(116,145,96,1)',
          borderRadius:40,
          overflow:"hidden"
      }
                  
  }}>
     <Tab.Screen
        name="Home"
        component={MainScreen}
        initialParams={{ obj1 }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon  style={focused&& styles.icons} name="home" size={30} color={focused ? "black" : "white"} />
          ),
          tabBarLabel: "",
          headerShown: false,
     
        }}
      />
      <Tab.Screen
        name="Trainer"
        component={TrainerList}
        initialParams={{ obj1 }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon2  style={focused&& styles.icons} name="run-circle" size={30} color={focused ? "black" : "white"} />
          ),
          tabBarLabel: "",
          headerShown: false,
        
        }}
      />
          <Tab.Screen
        name="Chats"
        component={Message}
        initialParams={{ obj1 }}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon3 style={focused&& styles.icons} name="message" size={30} color={focused ? "black" : "white"} />
          ),
          tabBarLabel: "",
          headerShown: false,
        
        }}
      />
     
      <Tab.Screen
        name="Settings"
        component={UerProfile}
        initialParams={{obj:obj1,userfirbabsedata:userfirbabsedata}}
        options={{
          tabBarIcon: ({ focused }) => (
            <Icon2  style={focused&& styles.icons} name="person-pin" size={30} color={focused ? "black" : "white"} />
          ),
          tabBarLabel: "",
          headerShown: false,
         
        }}
      />
    </Tab.Navigator>
  );
}

const styles= StyleSheet.create({
  icons:{
    backgroundColor:"white",borderRadius:15,padding:2
  }
})