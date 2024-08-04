import { View, Text, StyleSheet, ScrollView, ImageBackground } from 'react-native'
import React,{useState} from 'react'

const Signlemealpage = ({route}) => {
    const {meal}=route.params;
    console.log(meal);
    const [data,setData]=useState (meal);
  return (
   <ScrollView>
     <ImageBackground resizeMode="cover" source={require('../images/texture.png')} style={styles.container}>
    {data.map((meal, index) => (
      <View key={index} style={styles.mealContainer}>
        <Text style={styles.mealTitle}>{meal.name}</Text>
        <View style={styles.mealContent}>
          {meal.content.map((item, i) => (
            <Text key={i} style={styles.mealItem}>{item}</Text>
          ))}
        </View>
      </View>
    ))}
  </ImageBackground>
   </ScrollView>
);
};

const styles = StyleSheet.create({
container: {
  flex: 1,
  padding: 16,
  
},
mealContainer: {
  marginBottom: 28,
},
mealTitle: {
color:"white",
  fontSize: 18,
  fontWeight: 'bold',
  marginBottom: 10,
  textDecorationLine: 'underline',
},
mealContent: {
 
  borderRadius: 10,
  padding: 10,

},
mealItem: {
  fontSize: 17,
  marginBottom: 5,
  color:"white",
  fontFamily:"Slabo27px-Regular" 
},
});

export default Signlemealpage