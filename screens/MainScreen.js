import React, { useEffect, useState } from 'react';
import { View, ScrollView, Dimensions, Text, TextInput, StyleSheet, useColorScheme, TouchableOpacity,ActivityIndicator } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import HorizontalPhotoScrollView from '../component/Corosoul';
import HealthForm from '../component/personForm';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase, ref, child, get, set, update } from "firebase/database";
import CircularProgress from 'react-native-circular-progress-indicator';
import Meal from './Meal';


const HomePage = () => {
    const colorScheme = useColorScheme();

    const [user, setuser] = useState();
    const [name,setName]=useState();
    const [age, setAge] = useState(0);
    const [gender, setGender] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [medicalHistory, setMedicalHistory] = useState('');
    const [bodytype, setbodyType] = useState('');
    const [obj, setObj] = useState()
    const [data, setData] = useState();
    const [userformstatus, setuserformstatus] = useState(false);
    const [useruid, setuseruid] = useState();
    const [bmi, setbmi] = useState();
    const [goal, setgoal] = useState();
    const [userbodydata, setuserbodydata] = useState();
    const [loading, setLoading] = useState();
    const [goalstatus,setgoalstatus]=useState(false);
    const [usergender,setusergender]=useState();
    // Add more state variables for other fields
    
    const handleSubmit = async () => {
        // Perform validation and data handling here
        // You can use the state variables to access the entered values
        setLoading(true);
        setbmi(calculateBMI(weight, height))
        console.log("BMI:", bmi, weight, height);
        const db = getDatabase();
        await set(ref(db, `/fitQUser/${useruid}`), {
          
                name:name,
                height: height,
                age: age,
                weight: weight,
                gender: gender,
                bodytype: bodytype,
                Bmi: bmi,
                bodyCondition: data
            
        }).then(() => {
            console.log("done");
            setLoading(false);
            setuserformstatus(true)
        }).catch((error) => {
            console.log(error);
            setLoading(false);
        });


    };
    const calculateBMI = () => {
        const heightInMeters = height / 100; // Convert height from cm to meters
        const bmi = weight / (heightInMeters * heightInMeters);
        setbmi(bmi);
        getBodyCondition(bmi);
        console.log(data);
    };

    useEffect(() => {

        calculateBMI();
    }, [weight, height]);
    function getBodyCondition(bmi) {
        if (bmi < 18.5) {
            setData("Underweight");
        } else if (bmi >= 18.5 && bmi < 25) {
            setData("Normal weight");
        } else if (bmi >= 25 && bmi < 30) {
            setData("Overweight");
        } else {
            setData("Obesity");
        }
    }
    const retrieveObject = async (key) => {
        try {
            const jsonValue = await AsyncStorage.getItem(key);
            if (jsonValue != null) {
                const value = JSON.parse(jsonValue);
                console.log('Retrieved object:', value);
                return value;
            }
        } catch (error) {
            console.log('Error retrieving object:', error);
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            try {
                const obj = await retrieveObject('fitQUser');
                if (obj) {
                    setObj(obj);
                    setuseruid(obj.uid);
                    console.log(obj);
                }

                const dbRef = ref(getDatabase());
                const snapshot = await get(child(dbRef, `/fitQUser/${useruid}`));
                if (snapshot.exists()) {
                    console.log("data:----", snapshot.val());
                    setuserbodydata(snapshot.val());
                    if(snapshot.val().goal){
                        setgoalstatus(true);
                    }
                    setuserformstatus(true);
                    setusergender(snapshot.val().gender);
                    console.log(snapshot.val().gender);

                    console.log(snapshot.val().goal)
                } else {
                    console.log("No data available");
                }
            } catch (error) {
                console.error('Error retrieving object:', error);
            }
        };

        fetchData();
    }, [useruid, userformstatus]);
    const submitgoal = async () => {
        const db = getDatabase();
        await update(ref(db, `/fitQUser/`), {
            [useruid]: {
                ...userbodydata,
                goal: goal
            }
        }).then(() => {console.log("done"); setgoalstatus(true);}).catch((error) => {
            console.log(error);
        });

    }

    return (
        <View style={{ flex: 1, backgroundColor: "black" }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <HorizontalPhotoScrollView />
                <View style={{ width: 100 }}>
                    <LinearGradient
                        colors={[   'rgba(42,41,41,1)',
          'rgba(37,32,31,1)',
          'rgba(78,77,77,1)',
          'rgba(55,57,57,1)',]} // An array of gradient colors
                        start={{ x: 0, y: 0 }} // Starting position of the gradient
                        end={{ x: 1, y: 1 }} // Ending position of the gradient
                        style={{ width: Dimensions.get('window').width, alignItems: "center" }}
                    >
                        <View style={{ marginTop: 35, padding:7, opacity: 0.5, backgroundColor: "#696969", borderColor: "green", borderWidth: 1, borderRadius: 10, shadowColor: "black", shadowOffset: { width: 3, height: 20 } }}>
                            <Text style={{ fontSize: 15.5, textAlign: "justify", color: "rgba(255,255,255,1)", fontFamily: "PoltawskiNowy-VariableFont_wght" }}>"Unleash your full potential with our cutting-edge fitness programs, designed to sculpt your body and elevate your performance."
                                "Experience the power of fitness as you embark on a transformative journey, achieving strength, agility, and confidence like never before."</Text></View>
                        <Text style={{ fontSize: 20, textAlign: "justify", marginTop: 40, color: "white", marginBottom: 10, width: 250,fontFamily:"PoltawskiNowy-VariableFont_wght" }}>{goalstatus?"YOUR DIET MEALS HERE":"Enter your details to get know about our services "}</Text>
                        {goalstatus ? <Meal gender={usergender}/>:   userformstatus ? <View style={{ marginTop: 20 }}><TextInput
                            style={style.input}

                            placeholder="Your goal"

                            value={goal}
                            onChangeText={(text) => setgoal(text)}
                        />
                            <View style={{ backgroundColor: "black", borderRadius: 10, width: 75, alignItems: "center", marginLeft: "30%" }}>
                                <TouchableOpacity onPress={submitgoal}><Text style={{ color: "white", fontSize: 16, padding: 5, textAlign: "center" }}>submit</Text></TouchableOpacity>
                            </View></View>:<View style={{ flex:1}}><HealthForm
                               name={name}
                               setName={setName}
                                age={age}
                                setAge={setAge}
                                gender={gender}
                                setGender={setGender}
                                height={height}
                                setHeight={setHeight}
                                weight={weight}
                                setWeight={setWeight}
                                medicalHistory={medicalHistory}
                                setMedicalHistory={setMedicalHistory}
                                bodytype={bodytype}
                                setbodyType={setbodyType}
                                handleSubmit={handleSubmit}
                            /></View>}
                

                    </LinearGradient>

                </View>

            </ScrollView>
        </View>
    );
};

const style = StyleSheet.create({
    input: {
        width: 300,
        height: 40,
        marginBottom: 20,
        borderWidth: 1,
        backgroundColor: "white",
        opacity: .7,

        borderColor: 'gray',
        borderRadius: 8,
        paddingHorizontal: 10,
    }
})

export default HomePage;

