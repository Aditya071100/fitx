import { View, Text, StyleSheet,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { child, get, getDatabase, ref } from 'firebase/database'
import { useSelector } from 'react-redux'
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import store from '../store';
import { retrievefireabsetrainer } from '../action';
import { useNavigation } from '@react-navigation/native';

const Message = () => {
  const navigattion = useNavigation();
      const data1 = useSelector((state)=>state.data);
      const uid = data1.data.uid;
   
      
      const [data,setData]=useState (data1);
const [chatuser,setchatuser]=useState({});

      

    const fetchData=async()=>{
        const db = ref(getDatabase());
       const snapshot= await get(child(db,`fitQUserChat/${uid}`));
       if ( snapshot.val()){
          console.log("data===", snapshot.val());
          setchatuser(snapshot.val())
       }
       else{
        console.log("error");
       }
    }
    useEffect(()=>{
        fetchData();
        
    },[]);
    const gotochat=async(key)=>{
      const dbRef = ref(getDatabase());
      const snapshot = await get(child(dbRef, `fitQTrainer/${key}`));
      if (snapshot.exists()) {
        console.log(snapshot.val());
        navigattion.navigate('Message',{data:snapshot.val()})

      }

    }
  return (
    <View>
      <Text style={styles.haeding}>Messages</Text>
      {chatuser && Object.keys(chatuser).map((key,index)=>{
        const item= chatuser[key];
        return (
            <TouchableOpacity onPress={()=>gotochat(key)} style={{color:"black",height:50,backgroundColor:"white",margin:10,padding:5,borderRadius:10,borderWidth:.5,borderColor:"black"}} key={index}><Text style={{fontSize:16,color:"black"}}>{item[0].name}</Text>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}><Text style={{fontSize:13,color:"black"}}>{item[item.length-1].message}</Text>
            <Icon1 name="alert-circle" size={23} color={"black"}/></View></TouchableOpacity>
        )
      })}
    </View>
  )
}
const styles=StyleSheet.create({
  haeding:{
    color:"black",
    fontSize:18,
    marginLeft:10,
    
  }
})

export default Message