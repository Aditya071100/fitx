import { View, Text, TouchableOpacity, TextInput, Modal } from 'react-native'
import React, { useEffect, useState } from 'react'
import database from '@react-native-firebase/database';
import { firebase } from '@react-native-firebase/database';

const List = () => {
  const [ data,setData]=useState("");
  const [message,setMessage]=useState("");
  const [updatemessage,setupdatemessage]=useState("");
  const [updateid,setupdateid]=useState("");
  const [visible,setVisible]=useState(false)
  let id =9;
  useEffect(()=>{
    const reference = database().ref('/name');
    reference.on('value',snapshot=>{
      console.log("userdata:",snapshot.val());
      setData(snapshot.val())
    })
  },[data]);
  const updatedataofarray=()=>{
    const newarray= {...data};
    newarray.array[updateid-1]={...newarray.array[updateid],message:updatemessage}
    setData(newarray);
    database().ref('/name').set(newarray);
    setVisible(false);

  }
  const updateData = () => {
    const newData = {
      ...data,
    
      array: [
        ...(data.array || []),
        { id: id, name: "Unkown",message:message }
      ]
    };

    database().ref('/name').set(newData);
  };

  return (
    <View>
      <Text></Text>
      {data && data.array.map((obj,index)=>(
     <View style={{display:"flex",justifyContent:"center",alignItems:"center",borderColor:"black",borderWidth:2,borderRadius:3}} key={index}><TouchableOpacity onPress={()=>{
      setupdateid(obj.id); setupdatemessage(obj.message); setVisible(true);
     }}><Text style={{fontSize:15}}>{obj.id}..{obj.message}</Text></TouchableOpacity></View>
      ))}
      <TextInput 
      placeholder='write message' placeholderTextColor="white"  value={message} onChangeText={(text)=>setMessage(text)}   style={{backgroundColor:"black",color:"white",margin:20,borderRadius:20}}></TextInput>
      <View style={{display:"flex",justifyContent:"center",alignItems:"center",
      marginLeft:"40%",
      marginTop:20,padding:5,backgroundColor:"black",borderColor:"green",
      width:70,
      borderRadius:5,
      borderWidth:1}}><TouchableOpacity onPress={()=>{
        console.log("done");
        updateData();
        setMessage("");
      }}><Text style={{color:"white"}}>ADD</Text></TouchableOpacity></View>
      <View><Modal visible={visible}><View  style={{height:500,alignItems:"center",justifyContent:"center"}}><TextInput value={updatemessage} onChangeText={(text)=>setupdatemessage(text)} style={{fontSize:20}}/>
      <View style={{borderColor:"blue",borderWidth:2}}><TouchableOpacity onPress={()=>updatedataofarray()}><Text>update</Text></TouchableOpacity></View></View></Modal></View>
    </View>
  )
}

export default List