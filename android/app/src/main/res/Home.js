import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/dist/Ionicons';

const Home = () => {
  const navigation = useNavigation();
  const gotocreateteam = () => {
    navigation.navigate('Room');
  };
  return (
    <View style={{flex: 1, backgroundColor: 'black'}}>
      <View
        style={{
          flexDirection: 'row',
          height: 70,
          backgroundColor: 'black',
          color: 'black',
          width: '100%',
        }}>
        <Text style={{fontSize: 25, color: 'white', margin: 5}}>LOGO</Text>
        <Ionicons
          name="ios-notifications-outline"
          size={30}
          color="white"
          style={{marginLeft: '57%', margin: 7}}
        />
        <Image
          style={{marginLeft: 'auto', marginRight: 15, marginTop: 10}}
          source={require('../Assets/Vector.png')}
        />
      </View>
      <ScrollView>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginRight: 10,
            }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                objectFit: 'containe',
              }}
              source={require('../Assets/download1.png')}
            />
            <View style={{marginLeft: 30, marginRight: 20}}>
              <Text style={{color: 'white', fontSize: 18, marginRight: 30}}>
                Priti Mondal has played with Parth and 3 others.
              </Text>
              <Text style={{color: 'green', fontSize: 12}}>june 2 2023</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 20,
              backgroundColor: '#16191E',
              marginTop: 30,
              padding: 10,
              marginRight: 20,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'green',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                }}
                source={require('../Assets/download1.png')}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                  marginLeft: 5,
                }}
                source={require('../Assets/download1.png')}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                marginLeft: 40,
                flexDirection: 'row',
                width: 100,
              }}>
              <Text style={{color: 'white'}}>10</Text>
              <Text style={{color: 'white'}}>vs</Text>
              <Text style={{color: 'white'}}>5</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 40}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                }}
                source={require('../Assets/download1.png')}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                  marginLeft: 5,
                }}
                source={require('../Assets/download1.png')}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 20,
              backgroundColor: '#16191E',
              marginTop: 2,
              padding: 10,
              marginRight: 20,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'green',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                }}
                source={require('../Assets/download1.png')}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                  marginLeft: 5,
                }}
                source={require('../Assets/download1.png')}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                marginLeft: 40,
                flexDirection: 'row',
                width: 100,
              }}>
              <Text style={{color: 'white'}}>10</Text>
              <Text style={{color: 'white'}}>vs</Text>
              <Text style={{color: 'white'}}>5</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 40}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                }}
                source={require('../Assets/download1.png')}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                  marginLeft: 5,
                }}
                source={require('../Assets/download1.png')}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 20,
              backgroundColor: '#16191E',
              marginTop: 2,
              padding: 10,
              marginRight: 20,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'green',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                }}
                source={require('../Assets/download1.png')}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                  marginLeft: 5,
                }}
                source={require('../Assets/download1.png')}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                marginLeft: 40,
                flexDirection: 'row',
                width: 100,
              }}>
              <Text style={{color: 'white'}}>10</Text>
              <Text style={{color: 'white'}}>vs</Text>
              <Text style={{color: 'white'}}>5</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 40}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                }}
                source={require('../Assets/download1.png')}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                  marginLeft: 5,
                }}
                source={require('../Assets/download1.png')}
              />
            </View>
          </View>
          <Image
            style={{width: '100%', borderRadius: 10, margin: 5}}
            source={require('../Assets/download.jpg')}
          />
          <Text style={{color: 'white', fontSize: 14, margin: 5}}>
            The lorem ipsum text is usually a section of a Latin text by Cicero
            with words altered, added and removed to make it nonsensical. Lorem
            ipsum text is used in mock-ups of visual design projects before the
            actual words are ........
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            borderTopWidth: 1,
            borderColor: 'white',
            paddingTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginRight: 10,
            }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                objectFit: 'containe',
              }}
              source={require('../Assets/download1.png')}
            />
            <View style={{marginLeft: 30, marginRight: 20}}>
              <Text style={{color: 'white', fontSize: 18, marginRight: 30}}>
                Priti Mondal has played with Parth and 3 others.
              </Text>
              <Text style={{color: 'green', fontSize: 12}}>june 2 2023</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 20,
              backgroundColor: '#16191E',
              marginTop: 30,
              padding: 10,
              marginRight: 20,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'green',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                }}
                source={require('../Assets/download1.png')}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                  marginLeft: 5,
                }}
                source={require('../Assets/download1.png')}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                marginLeft: 40,
                flexDirection: 'row',
                width: 100,
              }}>
              <Text style={{color: 'white'}}>10</Text>
              <Text style={{color: 'white'}}>vs</Text>
              <Text style={{color: 'white'}}>5</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 40}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                }}
                source={require('../Assets/download1.png')}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                  marginLeft: 5,
                }}
                source={require('../Assets/download1.png')}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 20,
              backgroundColor: '#16191E',
              marginTop: 2,
              padding: 10,
              marginRight: 20,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'green',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                }}
                source={require('../Assets/download1.png')}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                  marginLeft: 5,
                }}
                source={require('../Assets/download1.png')}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                marginLeft: 40,
                flexDirection: 'row',
                width: 100,
              }}>
              <Text style={{color: 'white'}}>10</Text>
              <Text style={{color: 'white'}}>vs</Text>
              <Text style={{color: 'white'}}>5</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 40}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                }}
                source={require('../Assets/download1.png')}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                  marginLeft: 5,
                }}
                source={require('../Assets/download1.png')}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 20,
              backgroundColor: '#16191E',
              marginTop: 2,
              padding: 10,
              marginRight: 20,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'green',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                }}
                source={require('../Assets/download1.png')}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                  marginLeft: 5,
                }}
                source={require('../Assets/download1.png')}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                marginLeft: 40,
                flexDirection: 'row',
                width: 100,
              }}>
              <Text style={{color: 'white'}}>10</Text>
              <Text style={{color: 'white'}}>vs</Text>
              <Text style={{color: 'white'}}>5</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 40}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                }}
                source={require('../Assets/download1.png')}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                  marginLeft: 5,
                }}
                source={require('../Assets/download1.png')}
              />
            </View>
          </View>
          <Image
            style={{width: '100%', borderRadius: 10, margin: 5}}
            source={require('../Assets/download.jpg')}
          />
          <Text style={{color: 'white', fontSize: 14, margin: 5}}>
            The lorem ipsum text is usually a section of a Latin text by Cicero
            with words altered, added and removed to make it nonsensical. Lorem
            ipsum text is used in mock-ups of visual design projects before the
            actual words are ........
          </Text>
        </View>
        <View
          style={{
            marginTop: 20,
            borderTopWidth: 1,
            borderColor: 'white',
            paddingTop: 20,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginRight: 10,
            }}>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                objectFit: 'containe',
              }}
              source={require('../Assets/download1.png')}
            />
            <View style={{marginLeft: 30, marginRight: 20}}>
              <Text style={{color: 'white', fontSize: 18, marginRight: 30}}>
                Priti Mondal has played with Parth and 3 others.
              </Text>
              <Text style={{color: 'green', fontSize: 12}}>june 2 2023</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 20,
              backgroundColor: '#16191E',
              marginTop: 30,
              padding: 10,
              marginRight: 20,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'green',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                }}
                source={require('../Assets/download1.png')}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                  marginLeft: 5,
                }}
                source={require('../Assets/download1.png')}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                marginLeft: 40,
                flexDirection: 'row',
                width: 100,
              }}>
              <Text style={{color: 'white'}}>10</Text>
              <Text style={{color: 'white'}}>vs</Text>
              <Text style={{color: 'white'}}>5</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 40}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                }}
                source={require('../Assets/download1.png')}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                  marginLeft: 5,
                }}
                source={require('../Assets/download1.png')}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 20,
              backgroundColor: '#16191E',
              marginTop: 2,
              padding: 10,
              marginRight: 20,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'green',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                }}
                source={require('../Assets/download1.png')}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                  marginLeft: 5,
                }}
                source={require('../Assets/download1.png')}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                marginLeft: 40,
                flexDirection: 'row',
                width: 100,
              }}>
              <Text style={{color: 'white'}}>10</Text>
              <Text style={{color: 'white'}}>vs</Text>
              <Text style={{color: 'white'}}>5</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 40}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                }}
                source={require('../Assets/download1.png')}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                  marginLeft: 5,
                }}
                source={require('../Assets/download1.png')}
              />
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginLeft: 20,
              backgroundColor: '#16191E',
              marginTop: 2,
              padding: 10,
              marginRight: 20,
              borderRadius: 5,
              borderWidth: 1,
              borderColor: 'green',
            }}>
            <View style={{flexDirection: 'row'}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                }}
                source={require('../Assets/download1.png')}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                  marginLeft: 5,
                }}
                source={require('../Assets/download1.png')}
              />
            </View>
            <View
              style={{
                justifyContent: 'space-between',
                marginLeft: 40,
                flexDirection: 'row',
                width: 100,
              }}>
              <Text style={{color: 'white'}}>10</Text>
              <Text style={{color: 'white'}}>vs</Text>
              <Text style={{color: 'white'}}>5</Text>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 40}}>
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                }}
                source={require('../Assets/download1.png')}
              />
              <Image
                style={{
                  width: 20,
                  height: 20,
                  borderRadius: 10,
                  objectFit: 'containe',
                  marginLeft: 5,
                }}
                source={require('../Assets/download1.png')}
              />
            </View>
          </View>
          <Image
            style={{width: '100%', borderRadius: 10, margin: 5}}
            source={require('../Assets/download.jpg')}
          />
          <Text style={{color: 'white', fontSize: 14, margin: 5}}>
            The lorem ipsum text is usually a section of a Latin text by Cicero
            with words altered, added and removed to make it nonsensical. Lorem
            ipsum text is used in mock-ups of visual design projects before the
            actual words are ........
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  NavbarIcon: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  LoginButton: {
    backgroundColor: '#436A2E',
    paddingHorizontal: 20,
    paddingVertical: 10,
    alignItems: 'center',
    width: 200,
    marginLeft: 55,
    borderRadius: 20,
    marginTop: 15,
  },
  LoginButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
