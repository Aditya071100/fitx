import { View, Text, TouchableOpacity, useColorScheme, StyleSheet, TextInput, ScrollView } from 'react-native'
import React, { useEffect, useState, } from 'react'
import { useSafeAreaFrame } from 'react-native-safe-area-context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { getDatabase, ref, child, get, set, update } from "firebase/database";
import { useSelector } from 'react-redux';
const UerProfile = (props) => {
  const colorScheme = useColorScheme();
  const textColor = colorScheme === 'dark' ? 'black' : 'white';
  const [isdata, setisdata] = useState();

  const [data, setdata] = useState()
  const [obj, setObj] = useState();
  const { navigation, route } = props;
  const [edit, setEdit] = useState(false);
  const [loading, setLoading] = useState(false)
  const [userfirbabsedataobject, setuserfirbasedataobject] = useState({

    height: "",
    weight: "",
    bodyCondition: "",
    age: "",
    gender: "male",
    goal: "",
    bodytype: ""

  })
  const data1 = useSelector((state) => state.data);

  useEffect(() => {
    if (data1) {
      setuseruid(data1.data.uid);
      setuserfirbasedataobject(prevState => ({
        ...prevState,
        Bmi: data1.firebasedata.Bmi,
        height: data1.firebasedata.height,
        weight: data1.firebasedata.weight,
        bodyCondition: data1.firebasedata.bodyCondition,
        age: data1.firebasedata.age,
        gender: data1.firebasedata.gender,
        goal: data1.firebasedata.goal,
        bodytype: data1.firebasedata.bodytype
      }));
    }
  }, [data1]);



  console.log(data1.data);
  console.log(data1.firebasedata);
  const [firbsedata, setfirbasesetdata] = useState();
  useEffect(() => {

  })

  const [userformstatus, setuserformstatus] = useState(false);
  const [useruid, setuseruid] = useState();
  const retrieveObject = async (key) => {
    try {
      const jsonValue = await AsyncStorage.getItem(key);
      if (jsonValue != null) {
        const value = JSON.parse(jsonValue);

        setisdata(true);
        setdata(value)
        return value;
      }
    } catch (error) {
      console.log('Error retrieving object:', error);
      setisdata(false)
    }
  };
  useEffect(() => {
    retrieveObject('fitQUser');


  }, []);

  const handlesubmit = async () => {
    setLoading(true);
    const db = getDatabase();
    await update(ref(db, `/fitQUser/`), {
      [useruid]: userfirbabsedataobject
    }).then(() => {
      console.log("done");
      setLoading(false);

    }).catch((error) => {
      console.log(error);
      setLoading(false);
    });

  }

  return (
    <ScrollView>
      <View style={styles.container}>

        <View style={{ backgroundColor: "white", borderRadius: 7, width: 75, alignItems: "center", marginLeft: "5%", marginBottom: 10, borderWidth: 1, borderColor: "green" }}>
          <TouchableOpacity onPress={() => { setEdit(true) }}><Text style={{ color: "black", fontSize: 16, padding: 5, textAlign: "center" }}>Edit</Text></TouchableOpacity>
        </View>
        {data ? <View style={{}}>
          <Text style={{ fontSize: 18, color: "black" }}>{data.email}</Text>

          <TextInput
            style={styles.textInput}
            value={userfirbabsedataobject.height}
            editable={edit}
            onChangeText={(text) =>
              setuserfirbasedataobject((prevData) => ({
                ...prevData,
                height: text,
              }))
            }

          />
          <TextInput
            style={styles.textInput}
            value={userfirbabsedataobject.weight}
            editable={edit}
            onChangeText={(text) =>
              setuserfirbasedataobject((prevData) => ({
                ...prevData,
                weight: text,
              }))
            }
          />
          <TextInput
            style={styles.textInput}
            value={userfirbabsedataobject.bodyCondition}
            editable={edit}
            onChangeText={(text) =>
              setuserfirbasedataobject((prevData) => ({
                ...prevData,
                bodyCondition: text,
              }))
            }
          />
          <TextInput
            style={styles.textInput}
            value={userfirbabsedataobject.age}
            editable={edit}
            onChangeText={(text) =>
              setuserfirbasedataobject((prevData) => ({
                ...prevData,
                age: text,
              }))
            }
          />
          <TextInput
            style={styles.textInput}
            value={userfirbabsedataobject.gender}
            onChangeText={(text) =>
              setuserfirbasedataobject((prevData) => ({
                ...prevData,
                gender: text,
              }))
            }
          />
          <TextInput
            style={styles.textInput}
            value={userfirbabsedataobject.goal}
            editable={edit}
            onChangeText={(text) =>
              setuserfirbasedataobject((prevData) => ({
                ...prevData,
                goal: text,
              }))
            }
          />
          <TextInput
            style={styles.textInput}
            value={userfirbabsedataobject.bodytype}
            editable={edit}
            onChangeText={(text) =>
              setuserfirbasedataobject((prevData) => ({
                ...prevData,
                bodytype: text,
              }))
            }
          />

          {edit && <View style={{ flexDirection: "row", justifyContent: "space-between" }}><View style={{ backgroundColor: "black", borderRadius: 10, width: 75, alignItems: "center", marginLeft: "5%", marginTop: 10 }}>
            <TouchableOpacity onPress={() => setEdit(false)}><Text style={{ color: "white", fontSize: 16, padding: 5, textAlign: "center" }}>cancel</Text></TouchableOpacity>
          </View>
            <View style={{ backgroundColor: "black", borderRadius: 10, width: 75, alignItems: "center", marginLeft: "5%", marginTop: 10 }}>
              <TouchableOpacity onPress={() => handlesubmit()}><Text style={{ color: "white", fontSize: 16, padding: 5, textAlign: "center" }}>{loading ? "loading" : "done"}</Text></TouchableOpacity>
            </View></View>}
        </View> :
          <View><TouchableOpacity onPress={() => navigation.navigate("Login")}><Text>Login</Text></TouchableOpacity></View>}

        <View style={{ backgroundColor: "white", borderRadius: 10, width: 155, alignItems: "center", marginLeft: "5%", marginTop: 50 }}>
          <TouchableOpacity onPress={() => { navigation.navigate("Joinastrainer") }}><Text style={{ color: "black", fontSize: 16, padding: 5, textAlign: "center" }}>Join As Trainer</Text></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center'
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginVertical: 10,
    paddingHorizontal: 10,
    color: "black"
  }
});

export default UerProfile