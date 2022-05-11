import { View, SafeAreaView, ScrollView } from 'react-native';

import {
  Avatar,
  Title,
  Caption,
  Text,
  TouchableRipple
} from 'react-native-paper'

import {
  MaterialCommunityIcons
} from '@expo/vector-icons'
import { MainStyles } from '../../styles/core';
import GalleryContainer from '../../components/GalleryContainer';
import PanelButton from '../../components/PanelButton';
import useFetchProfilePhotos from '../../hooks/affair/useFetchProfilePhotos';

const ProfileScreen = ({ navigation }) => {
  const { profilePhotos } = useFetchProfilePhotos();

  return (
    <ScrollView>
      <SafeAreaView style={MainStyles.fx1}>
        <View style={{
          paddingHorizontal: 30,
          marginBottom: 25
        }}>
          <View style={{
            flexDirection: 'row',
            marginTop: 15
          }}>
            <Avatar.Image
              source={{
                uri: 'https://avatars.githubusercontent.com/u/52676055?s=400&u=18d95ed91216e90edacde8a5b0c7ecb8399657b5&v=4'
              }}
              size={80}
            />
            <View style={{ marginLeft: 20 }}>
              <Title style={{
                fontSize: 24,
                fontWeight: 'bold',
                marginTop: 15,
                marginBottom: 5
              }}>
                John Doe
              </Title>
              <Caption style={{
                fontSize: 14,
                lineHeight: 14,
                fontWeight: '500'
              }}>john.doe@uanl.edu.mx</Caption>
            </View>
          </View>
        </View>

        <View style={{
          paddingHorizontal: 30,
          // marginBottom: 25,
        }}>
          <View style={[MainStyles.row, {
            marginBottom: 10,
          }]}>
            <MaterialCommunityIcons
              name="map-marker-radius"
              size={20}
              color="#777777"
            />
            <Text
              style={{
                color: '#777777',
                marginLeft: 8
              }}
            >
              FACULTAD DE INGENIERÍA MECÁNICA Y ELÉCTRICA
            </Text>
          </View>

          <View style={[
            MainStyles.row,
            {
              // marginBottom: 10,
            }
          ]}>
            <MaterialCommunityIcons
              name="school"
              size={20}
              color="#777777"
            />
            <Text
              style={{
                color: '#777777',
                marginLeft: 10
              }}
            >
              ALUMNO SUPERIOR
            </Text>
          </View>
        </View>

        <PanelButton
          text={'Editar perfil'}
          onPress={() => navigation.navigate('EditProfile')}
          style={{
            marginVertical: 15,
            marginHorizontal: 25,
            paddingVertical: 8
          }}
        />

        <View style={{
          borderBottomColor: '#dddddd',
          borderBottomWidth: 1,
          borderTopColor: '#dddddd',
          borderTopWidth: 1,
          flexDirection: 'row',
          height: 80
        }}>
          <View
            style={[
              MainStyles.alignCenter,
              MainStyles.justifyCenter, ,
              {
                width: '50%',
                borderRightColor: '#dddddd',
                borderRightWidth: 1,
              },
            ]}
          >
            <Title>10</Title>
            <Caption>MATCHES</Caption>
          </View>

          <View style={[
            MainStyles.alignCenter,
            MainStyles.justifyCenter,
            {
              width: '50%',
            },
          ]}>
            <Title>12</Title>
            <Caption>LIKES RECIBIDOS</Caption>
          </View>
        </View>

        <GalleryContainer
          images={profilePhotos.map(photoObj => {
            return {
              uri: photoObj.photo_url,
            }
          })}
          style={{
            marginTop: 10,
          }}
        />
      </SafeAreaView>
    </ScrollView>
  );
};

export default ProfileScreen;
