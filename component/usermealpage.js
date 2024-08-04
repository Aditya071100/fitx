import React,{useState,useRef,useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Image,
  Animated
} from 'react-native';

import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Fontisto';
import {NavigationContainer, useNavigation} from '@react-navigation/native';
const UserGoalBox = ({gender, age, goal, meal}) => {
  const [currentText, setCurrentText] = useState('');
  const animationValue = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();
  
  useEffect(() => {
    let animationTimeout;
    const textLength = goal.length;

    const animateText = (index) => {
      if (index <= textLength) {
        setCurrentText(goal.substring(0, index));
        animationTimeout = setTimeout(() => {
          animateText(index + 1);
        }, 100); // Adjust the delay between each letter (in milliseconds)
      } else {
        animationTimeout = setTimeout(() => {
          eraseText(textLength);
        }, 1000); // Delay before erasing the text (in milliseconds)
      }
    };

    const eraseText = (index) => {
      if (index >= 0) {
        setCurrentText(goal.substring(0, index));
        animationTimeout = setTimeout(() => {
          eraseText(index - 1);
        }, 100); // Adjust the delay between erasing each letter (in milliseconds)
      } else {
        animationTimeout = setTimeout(() => {
          animateText(1);
        }, 2000); // Delay before showing the text again (in milliseconds)
      }
    };

    animateText(1);

    return () => {
      clearTimeout(animationTimeout);
    };
  }, [goal]);
  return (
    <TouchableOpacity
    onPress={() => navigation.navigate('Singlemeal', {meal: meal})}
     style={styles.container}>
      <LinearGradient
        colors={[
          'rgba(50,69,69,1)',
          'rgba(116,145,96,1)',
          'rgba(50,69,69,1)',
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.gradient}>
 
        { gender==="male"? <Image style={{height:60,width:70}} source={require("../images/male.png")}/>:
        <Image style={{height:65,width:77}} source={require("../images/female.png")}/>}
 
        <View style={{flexDirection: 'column', marginRight: 30}}>
          <Text style={styles.text}>{gender}</Text>
          <Text style={styles.text}>{age} years old</Text>
          <Animated.Text style={styles.text}>{currentText}</Animated.Text>

     
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 135,
  },
  gradient: {
    borderRadius: 10,
    marginBottom: 7,
    width: Dimensions.get('window').width - 20,
    marginTop: 7,
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  circleIcon: {
    height: 100,
    width: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
    backgroundColor: 'white',
    marginRight: 10,
  },
  text: {
    color: 'white',
    fontSize: 16.5,
    textAlign: 'center',
    marginBottom: 4,
    fontFamily: 'PoltawskiNowy-VariableFont_wght',
  },
});

export default UserGoalBox;
