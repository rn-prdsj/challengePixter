import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  StatusBar,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Header} from 'react-native-elements';

const Details = ({route, navigation}) => {
  const {
    book: {volumeInfo},
  } = route.params;
  return (
    <>
      <StatusBar backgroundColor="#ffdd0d" barStyle="dark-content" />
      <View style={styles.container}>
        <Header
          leftComponent={
            <TouchableOpacity onPress={() => navigation.pop()}>
              <Icon
                name="arrow-left"
                size={28}
                color="#101010"
                style={styles.icon}
              />
            </TouchableOpacity>
          }
          centerComponent={{
            text: 'Pixter Books',
            style: {
              color: '#101010',
              fontSize: 20,
              fontFamily: 'Open Sans',
              fontWeight: '800',
            },
          }}
          containerStyle={{
            backgroundColor: '#ffdd0d',
            borderBottomWidth: 0,
          }}
        />
        <View
          style={{
            padding: 20,
            paddingBottom: 20,
            backgroundColor: '#ffdd0d',
            flexDirection: 'row',
          }}>
          <View
            style={{
              flexDirection: 'column',
              paddingRight: 20,
              width: 100 + 20,
            }}>
            <Image
              style={styles.thumbnail}
              source={{
                uri:
                  volumeInfo.imageLinks === undefined
                    ? null
                    : `${volumeInfo.imageLinks.thumbnail}`,
              }}
            />
            <Text
              style={{
                fontFamily: 'Roboto',
                fontSize: 14,
                color: '#9f8b0c',
                marginTop: 30,
                textAlign: 'center',
              }}>
              {volumeInfo.pageCount}
              {' pages'}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text style={styles.text}>{volumeInfo.title}</Text>
              <Text
                style={{
                  fontFamily: 'Roboto',
                  fontSize: 14,
                  color: '#9f8b0c',
                  marginTop: 10 / 2,
                }}>
                {'by '}
                {volumeInfo.authors}
              </Text>
              <View
                style={{
                  marginTop: 10 * 2,
                  flexDirection: 'row',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    fontFamily: 'Roboto',
                    fontSize: 20,
                    fontWeight: 'bold',
                    color: '#101010',
                    marginRight: 10,
                  }}>
                  $9.99
                </Text>
                <View style={{justifyContent: 'center', flexDirection: 'row'}}>
                  <Icon
                    name="star"
                    size={15}
                    color="#4c4309"
                    style={styles.icon}
                  />
                  <Icon
                    name="star"
                    size={15}
                    color="#4c4309"
                    style={styles.icon}
                  />
                  <Icon
                    name="star"
                    size={15}
                    color="#4c4309"
                    style={styles.icon}
                  />
                  <Icon
                    name="star"
                    size={15}
                    color="#4c4309"
                    style={styles.icon}
                  />
                  <Icon
                    name="star"
                    size={15}
                    color="#E4C81B"
                    style={styles.icon}
                  />
                </View>
              </View>
              <View
                style={{
                  marginTop: 20 * 1.5,
                  flexDirection: 'row',
                  justifyContent: 'flex-end',
                }}>
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    backgroundColor: '#4a90e2',
                    width: 116,
                    height: 36,
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: 10,
                    shadowColor: '#101010',
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowOpacity: 0.46,
                    shadowRadius: 11.14,

                    elevation: 17,
                  }}>
                  <Text
                    style={{
                      fontFamily: 'Roboto',
                      textTransform: 'uppercase',
                      color: '#fff',
                      fontSize: 13,
                      fontWeight: 'bold',
                    }}>
                    Buy
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {}}
                  style={{
                    backgroundColor: '#dc4b5d',
                    width: 36,
                    height: 36,
                    borderRadius: 18,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 10,
                    shadowColor: '#101010',
                    shadowOffset: {
                      width: 0,
                      height: 3,
                    },
                    shadowOpacity: 0.46,
                    shadowRadius: 11.14,

                    elevation: 17,
                  }}>
                  <Icon
                    name="heart-outline"
                    size={24}
                    color="#fff"
                    style={styles.likeIcon}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
        <ScrollView style={{paddingHorizontal: 20}}>
          <Text
            style={{
              paddingTop: 20 * 1.5,
              paddingBottom: 20,
              fontFamily: 'Roboto',
              fontSize: 14,
              fontWeight: 'normal',
              color: '#4f565d',
              lineHeight: 30,
            }}>
            {volumeInfo.description}
          </Text>
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontFamily: 'Roboto',
    color: '#101010',
    fontSize: 20,
    fontWeight: 'bold',
  },
  icon: {
    marginRight: 4,
  },
  likeIcon: {
    marginTop: 3,
  },
  thumbnail: {
    height: 130,
    width: 100,
  },
});

export default Details;
