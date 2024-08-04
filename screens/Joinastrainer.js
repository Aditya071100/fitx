import React, { useState } from 'react';
import { View, TouchableOpacity, Text, StyleSheet, SafeAreaView, Image, TextInput } from 'react-native';
import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';
import storage from '@react-native-firebase/storage';
import CircularProgress from 'react-native-circular-progress-indicator';
import { getDatabase, ref , child, get, set, update } from "firebase/database";
import { useSelector } from 'react-redux';

const Joinastrainer = (props) => {
  const [experience, setexperience] = useState();
  const [image, setImage] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [transferred, setTransferred] = useState(0);
  const [gymname, setgymname] = useState();
  const [description, setDescription] = useState();
  const [loading, setLoading] = useState();
  const [imagename,setimagename]=useState();
  const [edit,setEdit]=useState(false);
  const [name,setName]=useState();

  const data1 =useSelector ((state) => state.data);
  console.log(data1.firebasedata);
  const fitquserdata=data1.firebasedata;
  const uid = data1.data.uid;
  const trainerdata= data1.firebasetrainer;
  const openImagePicker = () => {
    const options = {
      mediaType: 'photo',
    };

    ImagePicker.launchImageLibrary(options, (response) => {
      if (response.uri) {
        uploadPhoto(response.uri);
      }
    });
  };
  const selectImage = () => {
    const options = {
      maxWidth: 2000,
      maxHeight: 2000,
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    };
    ImagePicker.launchImageLibrary(options, response => {
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {
        const source = { uri: response.assets[0].uri };
        console.log(response.uri);
        setimagename(response.assets[0].fileName);
        console.log(source);
        setImage(source);
      }
    });
  };
  const uploadImage = async () => {
    try {
      setLoading(true);
      const currentDateTime = new Date().toISOString();
      const reference = storage().ref(imagename);
      const response = await reference.putFile(image.uri);
      console.log('Upload successful', response);
      const imageUrl = await reference.getDownloadURL();
      const db = getDatabase();
      const newobj= {
        ...fitquserdata,
        type:"trainer"
      }
      await update(ref(db,`fitQUser`),
      {[uid]:newobj}
      ).then(()=>console.log("done")).catch((error)=>console.log(error))
      await set(ref(db, `/fitQTrainer/`), {
        [data1.data.uid]: {
          imagename:imageUrl,
          name:name,
         experience:experience,
         gymname:gymname,
         description:description,
         traineruid:uid
        
        }
    }).then(() => {
        console.log("done");
        setLoading(false);
      
    }).catch((error) => {
        console.log(error);
        setLoading(false);
    });
    } catch (error) {
      console.log('Upload error', error);
    }
  };
  
  const handlesubmit = () => {
    setLoading(true);
  }
  const uploadPhoto = async (uri) => {
    const storage = getStorage();
    const fileName = 'photo.jpg'; // Change the filename as per your requirement

    const storageRef = ref(storage, fileName);
    await uploadBytes(storageRef, uri);

    console.log('Photo uploaded successfully!');
  };

  return (
    <SafeAreaView style={styles.container}>
{trainerdata && <View>
  <TextInput
        style={styles.input}
        placeholderTextColor={'black'}
        placeholder="Your Name"
      
        value={name}
        onChangeText={(e) => setName(e)}
      />
<TextInput
        style={styles.input}
        placeholderTextColor={'black'}
        placeholder="experience in years"
        keyboardType="numeric"
        value={experience}
        onChangeText={(e) => setexperience(e)}
      />

      <TextInput
        style={styles.input}
        placeholderTextColor={'black'}
        placeholder="gym name "

        value={gymname}
        onChangeText={(e) => setgymname(e)}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor={'black'}
        placeholder="write about your self ... "

        value={description}
        onChangeText={(e) => setDescription(e)}
      />
      <TouchableOpacity style={styles.selectButton} onPress={selectImage}>
        <Text style={styles.buttonText}>Pick an image</Text>
      </TouchableOpacity>
      <View style={styles.imageContainer}>
        {image !== null ? (
          <Image source={{ uri: image.uri }} style={styles.imageBox} />
        ) : null}
        {uploading ? (
      <Text>Loading...</Text>
        ) : (
          <TouchableOpacity style={styles.uploadButton} onPress={uploadImage} disabled={loading}>
            <Text style={styles.buttonText}>{loading? "Loading..":"Upload"}</Text>
          </TouchableOpacity>
        )}
      </View></View>}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#bbded6'
  },
  selectButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#8ac6d1',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  input: {
    width: 300,
    height: 40,
    marginBottom: 10,
    marginTop: 10, borderWidth: 1,
    backgroundColor: "white",
    opacity: .7,

    color: "black",
    borderColor: 'gray',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  uploadButton: {
    borderRadius: 5,
    width: 150,
    height: 50,
    backgroundColor: '#ffb6b9',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  imageContainer: {
    marginTop: 30,
    marginBottom: 50,
    alignItems: 'center'
  },
  progressBarContainer: {
    marginTop: 20
  },
  imageBox: {
    width: 300,
    height: 300
  }
});

export default Joinastrainer;
