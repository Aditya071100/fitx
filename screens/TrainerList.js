import { View, Text,ScrollView } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import Card from '../component/trainerCard';



const TrainerList = () => {
 const data1 = useSelector((state)=>state.data);
 console.log(data1)

  return (
    <ScrollView style={{backgroundColor:"black"}}>
      <Text>TrainerList</Text>
      <Card trainer={data1}/>
    </ScrollView>
  )
}

export default TrainerList