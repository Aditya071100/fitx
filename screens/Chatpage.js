import { get, getDatabase, set, ref } from 'firebase/database';
import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet,ActivityIndicator, Image,ScrollView } from 'react-native';
import { useSelector } from 'react-redux';
import { launchImageLibrary } from 'react-native-image-picker';
import * as ImagePicker from 'react-native-image-picker';
import Icon2 from 'react-native-vector-icons/MaterialIcons'
import storage from '@react-native-firebase/storage';
import CircularProgress from 'react-native-circular-progress-indicator';


const Chatpage = ({ route }) => {
    const { data } = route.params;
    const traineruid = data.traineruid;
    console.log(traineruid);

    const [message, setMessage] = useState('');
    const data1 = useSelector((state) => state.data);
    const useruid = data1.data.uid;
    const username= data1.firebasedata.name;
    console.log(username); 
    const [chats, setchat] = useState([]);
    const [loading,setloading]=useState(false);
    const [response,setresponse]=useState();
    const [ image,setImage]=useState();
    const [ imagename,setimagename]=useState();

    useEffect(() => {
        const fetchData = async () => {
            try {
                const db = getDatabase();
                const chatsData = get(ref(db, `fitQUserChat/${useruid}/${traineruid}`));

                chatsData.then((snapshot) => {
                    if (snapshot.exists()) {
                        const data = snapshot.val();
                        setchat(snapshot.val());
                        console.log('Chats Data:', data);
                        // Process the retrieved data as needed
                    } else {
                        console.log('Chats data not found');
                    }
                });
            } catch (error) {
                console.error('Error fetching chats data:', error);
            }
        };

        fetchData();
    },[loading]);
    
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

      const uploadphoto= async()=>{
        const reference = storage().ref(imagename);
        const response = await reference.putFile(image.uri);
        const imageurl = await reference.getDownloadURL();
        return imageurl;
      }
    const handleSend = async () => {
        setloading(true);
        let imageurl = null; // Initialize imageUrl with null

    if (image) {
      imageurl = await uploadphoto(); // Store the image URL
    }

        const chat = [
            ...chats,

            {
                senderid: traineruid,
                message: message,
                time: new Date().getHours().toString()+`:${new Date().getMinutes() <10?"0":""}`+ new Date().getMinutes().toString() ,
                type: "sender",
                name:data.name,
                image :image ? imageurl :"null"
               
            }
        ]
        const chat1 = [
            ...chats,

            {
                recieverid: useruid,
                message: message,
                time: new Date().getHours().toString(),
                type: "reciever",
                status:false,
                name:username,
                image :image ? imageurl :"null"
                
            }
        ]
        const db = getDatabase();
        await set(ref(db, `fitQUserChat/${useruid}/`), {
            [traineruid]: chat
        })
        await set(ref(db,`fitQUserChat/trainerid/`), {
            [useruid]: chat1
        }).then(()=>{setresponse(true); setloading(false)}).catch((error)=>console.log(error));
        console.log('Message sent:', message);
        
        setMessage('');
        setloading(false)
    };
      const handleSendtrainer = async () => {
        setloading(true)
        const chat = [
            ...chats,

            {
                senderid: traineruid,
                message: message,
                time: new Date().getHours().toString()+":"+ new Date().getMinutes().toString() ,
                type: "reciever",
                status:false,
                name:data.name,
                image :image ? image :"null"

            }
        ]
        const chat1 = [
            ...chats,

            {
                recieverid: useruid,
                message: message,
                time: new Date().getHours().toString(),
                type: "sender",
                name:username,
                image :image ? image :"null"
            }
        ]
        const db = getDatabase();
        await set(ref(db, `fitQUserChat/${useruid}/`), {
            [traineruid]: chat
        })
        await set(ref(db,`fitQUserChat/trainerid`), {
            [useruid]: chat1
        }).then(()=>{setresponse(true); setloading(false)}).catch((error)=>console.log(error));
        console.log('Message sent:', message);
        setloading(false);
        setMessage('');
    };
    const setimagenull=()=>{
        setImage("");
    }

    return (
        <View style={styles.container}>
            <View style={{ width: "99.5%", height: 30, borderWidth: .5, borderColor: "black", marginLeft: 1, alignItems: "center", justifyContent: "center", borderRadius: 2 }}><Text style={{ fontSize: 18, color: "black" }}>{data.name}</Text></View>
            <ScrollView style={styles.chatContainer}>
                {/* Display chat messages here */}
                {chats && chats.map((item)=>(
                  
                    <View style={{alignItems:item.type==="sender"?"flex-end":"flex-start"}}>
                    <Text style={styles.text} >{item.message}</Text>
                    {item.image && <Image source={{uri:item.image}} style={{width:100,height:100}}/>}
                    <Text>{item.time}</Text><Text></Text>
                    
                      </View>
               
                    
                ))}
            </ScrollView>
            <Image source={image} style={{width:80,height:80,borderRadius:10,margin:5}}/>{image && <TouchableOpacity onPress={setimagenull} style={{marginLeft:82,marginBottom:20}}><Icon2 name= "cancel" size={15} color={"black"}/></TouchableOpacity>}
            <View style={styles.inputContainer}>
            <TouchableOpacity onPress={selectImage} ><Icon2 name="image" color={"black"} size ={27} /></TouchableOpacity> 
                <TextInput
                    style={styles.input}
                    placeholder="Type your message..."
                    value={message}
                    onChangeText={setMessage}
                />
                <TouchableOpacity style={styles.sendButton} onPress={handleSend} disabled={!message}>
                    <Text style={styles.sendButtonText}>{loading? <ActivityIndicator size="small" color="white" />:"send"}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    chatContainer: {
        flex: 1,
        padding: 10,
        // Additional styles for chat container
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderTopWidth: 1,
        borderTopColor: '#E0E0E0',
        backgroundColor: 'white',
    },
    input: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: '#E0E0E0',
        borderRadius: 5,
        paddingHorizontal: 10,
        marginRight: 10,
        backgroundColor: 'white',
    },
    text:{
        color:"black",
        fontFamily:"Slabo27px-Regular",
        fontSize:16

    },
    sendButton: {
        padding: 10,
        borderRadius: 5,
        backgroundColor: '#2196F3',
    },
    sendButtonText: {
        color: 'white',
        fontWeight: 'bold',
    },
});

export default Chatpage;
