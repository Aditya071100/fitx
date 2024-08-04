import React ,{useEffect,useState}from 'react';
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Image,
  TouchableOpacity,
  Modal,
  TextInput,
  TouchableWithoutFeedback
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import storage from '@react-native-firebase/storage';
import {useNavigation} from '@react-navigation/native';

import Ionicons from 'react-native-vector-icons/dist/Ionicons';
import Materialicon from 'react-native-vector-icons/MaterialIcons';
import Entypo from 'react-native-vector-icons/dist/Entypo';
import { useSelector } from 'react-redux';
import {getDatabase, ref, child, get, update} from 'firebase/database';

const Card = ({trainer}) => {
  const navigation = useNavigation();
  console.log(trainer.firebasettrainerlist);
  const gotodetail = data => {
    navigation.navigate('Trainerdetail', {data: data});
  };
  const gotochat = data => {
    navigation.navigate('Message', {data: data});
  };
  const [search, setseacrh] = useState(false);
  const [searchvalue, setsearchvalue] = useState('');
  const [block,setblock]=useState(false);
  const [blockid,setblockid]=useState();
  const [blockidarray,setblockarray]=useState([]);
  const data1 = useSelector((state) => state.data);
  const userdata= data1.firebasedata;
  const useruid = data1.data.uid;
  const previousblockids = userdata.blockid;

  const blockfunction = async () => {
    const blockarray = [...previousblockids,blockid]
    const dbRef = getDatabase();
    const updateData = {
      ...userdata,
      blockid: blockarray
    };
  
    await update(ref(dbRef, `fitQUser/${useruid}`), updateData);
  };
  

  return (
    <View>
      <View style={{flexDirection: 'row'}}>
        <TextInput
          placeholder="Search"
          placeholderTextColor={'black'}
          style={{color: 'black',width:"85%",backgroundColor:"rgba(255,255,255,.8)",borderRadius:15,marginRight:3,padding:5,marginLeft:3}}
         
          onChangeText={text => setsearchvalue(text)}
          value={searchvalue}
        />
   
          {search ? (
       <TouchableOpacity onPress={()=>setseacrh(false)}>
       <Materialicon
              style={{backgroundColor: 'black', borderRadius: 12.5, padding: 2}}
              name="cancel"
              size={25}
              color="white"
            />
       </TouchableOpacity>
          ) : (
    <TouchableOpacity style={{backgroundColor:"white",height:30,width:30,borderRadius:15,justifyContent:"center",alignItems:"center"}} onPress={()=>setseacrh(true)} disabled={!searchvalue}>
    <Ionicons
              style={{}}
              name="search"
              size={22}
              color="black"
            />
    </TouchableOpacity>
          )}
        
      </View>

      {trainer &&
        trainer.firebasettrainerlist &&
        Object.keys(trainer.firebasettrainerlist).map((key, index) => {
          const item = trainer.firebasettrainerlist[key];

          return (
            <LinearGradient
              key={index}
              colors={['grey', 'white', 'white']}
              style={styles.container}
              start={{x: 0, y: 0}} // Start from the left side of the container
              end={{x: 1, y: 0}}>
              <View style={styles.leftContainer}>
                <View style={styles.circleIcon}>
                  <Image
                    style={{width: 80, height: 80, borderRadius: 40}}
                    source={{uri: item.imagename}}
                  />
                </View>
              </View>
              <View style={styles.rightContainer}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.name}>{item.name}</Text>
                  <View
                    style={{
                      borderRadius: 12.5,
                      height: 25,
                      width: 25,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'white',
                      marginLeft: 5,
                    }}>
                    <TouchableOpacity onPress={() => gotochat(item)}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 14,
                          fontWeight: 'bold',
                        }}>
                        <Icon1
                          name="android-messages"
                          size={23}
                          color="black"
                        />
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.gymname}>Gym name:-{item.gymname}</Text>

                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.description}>
                    {item.description.substring(0, 15)}..
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 6,
                      height: 20,
                      width: 45,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 2,
                    }}>
                    <TouchableOpacity
                      onPress={() => gotodetail(item.description)}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 14,
                          fontWeight: 'bold',
                        }}>
                        more
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
             <TouchableOpacity onPress={()=>{setblock(true); setblockid(item.traineruid); console.log(item.traineruid)}}>
             <Entypo style={{margin:10}} name="dots-three-vertical" size={20} color="black"/>
             </TouchableOpacity>
              <Modal
              transparent={true}
              visible={search}
              animationType='slide'
              onRequestClose={()=>setseacrh(false)}>
              <View style={{flex:1,backgroundColor:"black"}}>
                <TouchableOpacity onPress={()=>setseacrh(false)}><Text style={{color:"white",fontSize:25,marginLeft:"auto",marginRight:10,marginTop:10}}>X</Text></TouchableOpacity>
                {trainer &&
  trainer.firebasettrainerlist &&
  Object.keys(trainer.firebasettrainerlist)
    .filter((key) => {
      const item = trainer.firebasettrainerlist[key];
      return item.name.toLowerCase().includes(searchvalue.toLowerCase());
    })
    .map((key, index) => {
      const item = trainer.firebasettrainerlist[key];

      return (
        <LinearGradient
          key={index}
          colors={['grey', 'white', 'white']}
          style={styles.container}
          start={{ x: 0, y: 0 }} // Start from the left side of the container
          end={{ x: 1, y: 0 }}
        >
        <View style={styles.leftContainer}>
                <View style={styles.circleIcon}>
                  <Image
                    style={{width: 80, height: 80, borderRadius: 40}}
                    source={{uri: item.imagename}}
                  />
                </View>
              </View>
              <View style={styles.rightContainer}>
                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.name}>{item.name}</Text>
                  <View
                    style={{
                      borderRadius: 12.5,
                      height: 25,
                      width: 25,
                      justifyContent: 'center',
                      alignItems: 'center',
                      backgroundColor: 'white',
                      marginLeft: 5,
                    }}>
                    <TouchableOpacity onPress={() => gotochat(item)}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 14,
                          fontWeight: 'bold',
                        }}>
                        <Icon1
                          name="android-messages"
                          size={23}
                          color="black"
                        />
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <Text style={styles.gymname}>Gym name:-{item.gymname}</Text>

                <View style={{flexDirection: 'row'}}>
                  <Text style={styles.description}>
                    {item.description.substring(0, 15)}..
                  </Text>
                  <View
                    style={{
                      backgroundColor: 'white',
                      borderRadius: 6,
                      height: 20,
                      width: 45,
                      justifyContent: 'center',
                      alignItems: 'center',
                      marginLeft: 2,
                    }}>
                    <TouchableOpacity
                      onPress={() => gotodetail(item.description)}>
                      <Text
                        style={{
                          color: 'black',
                          fontSize: 14,
                          fontWeight: 'bold',
                        }}>
                        more
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              
          {/* Rest of the code */}
        </LinearGradient>
      );
    })}
              </View>
   
              </Modal>
              <Modal 
              
              transparent={true}
              visible={block}
              animationType='slide'
              onRequestClose={()=>setseacrh(false)}>
                <TouchableWithoutFeedback onPress={()=>setblock(false)}>
                <View style={{flex:1,backgroundColor:"rgba(255,255,255,.3)"}}>
                  
                  </View>
                </TouchableWithoutFeedback>
                <View style={{width:"100%",height:250,justifyContent:"center",}}>
                  <TouchableOpacity onPress={blockfunction}><Text style={{color:"white",fontSize:17,borderRadius:5,padding:5,margin:5,width:100}}>Block</Text></TouchableOpacity>
                  <TouchableOpacity ><Text style={{color:"white",fontSize:17,borderRadius:5,padding:5,margin:5,width:100}}>Share</Text></TouchableOpacity>
                  <TouchableOpacity ><Text style={{color:"white",fontSize:17,borderRadius:5,padding:5,margin:5,width:100}}>Favourite</Text></TouchableOpacity>
                </View>
              </Modal>
            </LinearGradient>
          );
        })}
    </View>
  );
};

const {width, height} = Dimensions.get('window');
const cardWidth = width * 0.9;
const cardHeight = 100;

const styles = StyleSheet.create({
  container: {
    opacity: 0.75,
    width: cardWidth,
    height: cardHeight,
    flexDirection: 'row',
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    marginVertical: 10,
    alignSelf: 'center',
    margin: 10,
  },
  leftContainer: {
    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  rightContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingLeft: 10,
  },
  circleIcon: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#f0f8ff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 19,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 2,
    fontFamily: 'PoltawskiNowy-VariableFont_wght',
  },
  description: {
    fontSize: 16,
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Slabo27px-Regular',
    marginBottom: 2,
  },
  gymname: {
    fontSize: 16.8,
    textAlign: 'left',
    color: 'black',
    fontFamily: 'Slabo27px-Regular',
    marginBottom: 2,
  },
});

export default Card;
