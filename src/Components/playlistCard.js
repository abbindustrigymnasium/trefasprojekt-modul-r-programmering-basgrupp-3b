
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View, ScrollView, TextInput, FlatList, Pressable, Switch } from 'react-native';
import React, { useState } from 'react';
import Popover from 'react-native-popover-view';
import { LinearGradient } from "expo-linear-gradient";
import { Image } from 'expo-image';
import { useSpotifyRequest } from '../APICommunication/api_communicator';



export default function PlaylistCard({showPopover, setShowPopover, likedSongs}) {
  
  const [text, onChangeText] = React.useState('');
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

  const DATA = {
    "href": "https://api.spotify.com/v1/users/lovisa_bylund/playlists?offset=0&limit=10",
    "items": [
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/33xaGrkQnjOf2FMJDeObwX"
        },
        "href": "https://api.spotify.com/v1/playlists/33xaGrkQnjOf2FMJDeObwX",
        "id": "33xaGrkQnjOf2FMJDeObwX",
        "images": [
          {
            "height": null,
            "url": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebbb616181f6b848ccd51348005",
            "width": null
          }
        ],
        "name": "unhinged female rage ",
        "owner": {
          "display_name": "char",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/charlottemck888"
          },
          "href": "https://api.spotify.com/v1/users/charlottemck888",
          "id": "charlottemck888",
          "type": "user",
          "uri": "spotify:user:charlottemck888"
        },
        "primary_color": null,
        "public": false,
        "snapshot_id": "MTMwLDg0ZmY3M2E4NGI0ZGNhYmI5YWNhYjBjZjExOTA1Mzg1YjAzNjAyZDU=",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/33xaGrkQnjOf2FMJDeObwX/tracks",
          "total": 45
        },
        "type": "playlist",
        "uri": "spotify:playlist:33xaGrkQnjOf2FMJDeObwX"
      },
      {
        "collaborative": false,
        "description": "Put a spring in your step with these mood boosting tracks.",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/37i9dQZF1DXadOVCgGhS7j"
        },
        "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXadOVCgGhS7j",
        "id": "37i9dQZF1DXadOVCgGhS7j",
        "images": [
          {
            "height": null,
            "url": "https://i.scdn.co/image/ab67706f0000000338fdd2633a3310d7d1106c92",
            "width": null
          }
        ],
        "name": "Fun Run",
        "owner": {
          "display_name": "Spotify",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/spotify"
          },
          "href": "https://api.spotify.com/v1/users/spotify",
          "id": "spotify",
          "type": "user",
          "uri": "spotify:user:spotify"
        },
        "primary_color": null,
        "public": false,
        "snapshot_id": "MTY4ODEwMjMyMywwMDAwMDAwMDM0YzY2ZmIzODc5MDk3ZDZkMWFmNDQ3MWI0YjUyODQ2",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/37i9dQZF1DXadOVCgGhS7j/tracks",
          "total": 50
        },
        "type": "playlist",
        "uri": "spotify:playlist:37i9dQZF1DXadOVCgGhS7j"
      },
      {
        "collaborative": false,
        "description": "Make sure to take a look in other playlists",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/4fsIjtzX8FQ1fL8a0qQhx5"
        },
        "href": "https://api.spotify.com/v1/playlists/4fsIjtzX8FQ1fL8a0qQhx5",
        "id": "4fsIjtzX8FQ1fL8a0qQhx5",
        "images": [
          {
            "height": 640,
            "url": "https://mosaic.scdn.co/640/ab67616d0000b273271460ef9fd223069197c590ab67616d0000b27348b82da8d0b5822b0aca5958ab67616d0000b2734eb538aacd2906d9c434b451ab67616d0000b2734ef1f68a04d2be56a342d84a",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://mosaic.scdn.co/300/ab67616d0000b273271460ef9fd223069197c590ab67616d0000b27348b82da8d0b5822b0aca5958ab67616d0000b2734eb538aacd2906d9c434b451ab67616d0000b2734ef1f68a04d2be56a342d84a",
            "width": 300
          },
          {
            "height": 60,
            "url": "https://mosaic.scdn.co/60/ab67616d0000b273271460ef9fd223069197c590ab67616d0000b27348b82da8d0b5822b0aca5958ab67616d0000b2734eb538aacd2906d9c434b451ab67616d0000b2734ef1f68a04d2be56a342d84a",
            "width": 60
          }
        ],
        "name": "Isabel LaRosa Playlist",
        "owner": {
          "display_name": "Sali/Sal",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/31mblfwr72rql5vk47uelopacaa4"
          },
          "href": "https://api.spotify.com/v1/users/31mblfwr72rql5vk47uelopacaa4",
          "id": "31mblfwr72rql5vk47uelopacaa4",
          "type": "user",
          "uri": "spotify:user:31mblfwr72rql5vk47uelopacaa4"
        },
        "primary_color": null,
        "public": false,
        "snapshot_id": "MjEsNDMxZDRjMjk1NmRlMjExNTRjNDZjYmZhZGNjOTAxNDQxZjU1OWM0NA==",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/4fsIjtzX8FQ1fL8a0qQhx5/tracks",
          "total": 17
        },
        "type": "playlist",
        "uri": "spotify:playlist:4fsIjtzX8FQ1fL8a0qQhx5"
      },
      {
        "collaborative": false,
        "description": "playlist with classical instrumental music for reading your favourite novels",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/5Jh2P13Nkn3yFaeWlhwErM"
        },
        "href": "https://api.spotify.com/v1/playlists/5Jh2P13Nkn3yFaeWlhwErM",
        "id": "5Jh2P13Nkn3yFaeWlhwErM",
        "images": [
          {
            "height": null,
            "url": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb5d4bdcce760582a5020f68e2",
            "width": null
          }
        ],
        "name": "reading romance (no vocals)",
        "owner": {
          "display_name": "Aemeralds",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/31vjwquron2hqxxriajo4pmtb2qi"
          },
          "href": "https://api.spotify.com/v1/users/31vjwquron2hqxxriajo4pmtb2qi",
          "id": "31vjwquron2hqxxriajo4pmtb2qi",
          "type": "user",
          "uri": "spotify:user:31vjwquron2hqxxriajo4pmtb2qi"
        },
        "primary_color": null,
        "public": false,
        "snapshot_id": "NDMxLDY2YTc2MDU2ODA2Yjk2ODkzNWViNWI2YTRhY2YwNjcyNThhZGFkYTY=",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/5Jh2P13Nkn3yFaeWlhwErM/tracks",
          "total": 166
        },
        "type": "playlist",
        "uri": "spotify:playlist:5Jh2P13Nkn3yFaeWlhwErM"
      },
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/7k4tBESqMxHmpX2sjt601W"
        },
        "href": "https://api.spotify.com/v1/playlists/7k4tBESqMxHmpX2sjt601W",
        "id": "7k4tBESqMxHmpX2sjt601W",
        "images": [
          {
            "height": null,
            "url": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb6095c2c74ef1565a5dbc317b",
            "width": null
          }
        ],
        "name": "Spider-Man: Across the Spider-Verse (Soundtrack)",
        "owner": {
          "display_name": "Playlists",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/0rlsiwvusdd67rm4ooghjkv98"
          },
          "href": "https://api.spotify.com/v1/users/0rlsiwvusdd67rm4ooghjkv98",
          "id": "0rlsiwvusdd67rm4ooghjkv98",
          "type": "user",
          "uri": "spotify:user:0rlsiwvusdd67rm4ooghjkv98"
        },
        "primary_color": null,
        "public": false,
        "snapshot_id": "NjEyLDk4MjlmOWNiOTMyMGU3N2I5Y2ViMjA0Njk5MzljOTAyODU2ZGQ1OGM=",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/7k4tBESqMxHmpX2sjt601W/tracks",
          "total": 113
        },
        "type": "playlist",
        "uri": "spotify:playlist:7k4tBESqMxHmpX2sjt601W"
      },
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/44WQ1paV4Y7gihw6Nipqpp"
        },
        "href": "https://api.spotify.com/v1/playlists/44WQ1paV4Y7gihw6Nipqpp",
        "id": "44WQ1paV4Y7gihw6Nipqpp",
        "images": [
          {
            "height": null,
            "url": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebbfe37819f54a5d272686357c3",
            "width": null
          }
        ],
        "name": "Spanish",
        "owner": {
          "display_name": "Lovisa",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/lovisa_bylund"
          },
          "href": "https://api.spotify.com/v1/users/lovisa_bylund",
          "id": "lovisa_bylund",
          "type": "user",
          "uri": "spotify:user:lovisa_bylund"
        },
        "primary_color": null,
        "public": true,
        "snapshot_id": "MTksMDNmMWYwNjI4NWNhNTQxZTAyNGQxMzgzYzIwODJlY2M3N2ZjZmM1Mg==",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/44WQ1paV4Y7gihw6Nipqpp/tracks",
          "total": 17
        },
        "type": "playlist",
        "uri": "spotify:playlist:44WQ1paV4Y7gihw6Nipqpp"
      },
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/1KoKIkvM3ozbW4L96Mzlum"
        },
        "href": "https://api.spotify.com/v1/playlists/1KoKIkvM3ozbW4L96Mzlum",
        "id": "1KoKIkvM3ozbW4L96Mzlum",
        "images": [
          {
            "height": null,
            "url": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebbc43ae1e18ea9be16186a8950",
            "width": null
          }
        ],
        "name": "vibe",
        "owner": {
          "display_name": "Felicia.arborelius",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/fisiwitch"
          },
          "href": "https://api.spotify.com/v1/users/fisiwitch",
          "id": "fisiwitch",
          "type": "user",
          "uri": "spotify:user:fisiwitch"
        },
        "primary_color": null,
        "public": false,
        "snapshot_id": "MTYsMDFiZmIwZTFkZWE1MDY0NjlhMDMzOTYyZDk1YjZlYTg0Yjk1OGYwMw==",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/1KoKIkvM3ozbW4L96Mzlum/tracks",
          "total": 13
        },
        "type": "playlist",
        "uri": "spotify:playlist:1KoKIkvM3ozbW4L96Mzlum"
      },
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/4J7B3x4Q3JXAOVapUW1VSM"
        },
        "href": "https://api.spotify.com/v1/playlists/4J7B3x4Q3JXAOVapUW1VSM",
        "id": "4J7B3x4Q3JXAOVapUW1VSM",
        "images": [
          {
            "height": 640,
            "url": "https://mosaic.scdn.co/640/ab67616d0000b273ae373174b14e3eac81554402ab67616d0000b273b787b5b057751c4d5bb5de54ab67616d0000b273d0008ca23cd2e0b7f2dce88fab67616d0000b273e6082141bd7c86ae9f11ea26",
            "width": 640
          },
          {
            "height": 300,
            "url": "https://mosaic.scdn.co/300/ab67616d0000b273ae373174b14e3eac81554402ab67616d0000b273b787b5b057751c4d5bb5de54ab67616d0000b273d0008ca23cd2e0b7f2dce88fab67616d0000b273e6082141bd7c86ae9f11ea26",
            "width": 300
          },
          {
            "height": 60,
            "url": "https://mosaic.scdn.co/60/ab67616d0000b273ae373174b14e3eac81554402ab67616d0000b273b787b5b057751c4d5bb5de54ab67616d0000b273d0008ca23cd2e0b7f2dce88fab67616d0000b273e6082141bd7c86ae9f11ea26",
            "width": 60
          }
        ],
        "name": "Studenten",
        "owner": {
          "display_name": "Erik Tuominen",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/erik200606"
          },
          "href": "https://api.spotify.com/v1/users/erik200606",
          "id": "erik200606",
          "type": "user",
          "uri": "spotify:user:erik200606"
        },
        "primary_color": null,
        "public": false,
        "snapshot_id": "ODIsZDM5ZmQyZDZlMThhYTE1NDllYjM1N2M0NjE0NzQzYjhjMzdkNGVlMQ==",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/4J7B3x4Q3JXAOVapUW1VSM/tracks",
          "total": 59
        },
        "type": "playlist",
        "uri": "spotify:playlist:4J7B3x4Q3JXAOVapUW1VSM"
      },
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/5Nu8BqTBlspfsdctLBNOCX"
        },
        "href": "https://api.spotify.com/v1/playlists/5Nu8BqTBlspfsdctLBNOCX",
        "id": "5Nu8BqTBlspfsdctLBNOCX",
        "images": [
          {
            "height": null,
            "url": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb8688edf0f9691ff71e5396e6",
            "width": null
          }
        ],
        "name": "Ey",
        "owner": {
          "display_name": "Lovisa",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/lovisa_bylund"
          },
          "href": "https://api.spotify.com/v1/users/lovisa_bylund",
          "id": "lovisa_bylund",
          "type": "user",
          "uri": "spotify:user:lovisa_bylund"
        },
        "primary_color": null,
        "public": true,
        "snapshot_id": "MjQsYTM4N2FmMTYzN2VjNmFiNmRjZTE3ZDY4NmQwN2JmNDVmNGQ5YjIwYw==",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/5Nu8BqTBlspfsdctLBNOCX/tracks",
          "total": 21
        },
        "type": "playlist",
        "uri": "spotify:playlist:5Nu8BqTBlspfsdctLBNOCX"
      },
      {
        "collaborative": false,
        "description": "",
        "external_urls": {
          "spotify": "https://open.spotify.com/playlist/0oqN3NTC4GcnGulehjcxHp"
        },
        "href": "https://api.spotify.com/v1/playlists/0oqN3NTC4GcnGulehjcxHp",
        "id": "0oqN3NTC4GcnGulehjcxHp",
        "images": [
          {
            "height": null,
            "url": "https://image-cdn-ak.spotifycdn.com/image/ab67706c0000bebb72ae66e897d9dd84278c933c",
            "width": null
          }
        ],
        "name": "Svensk skit",
        "owner": {
          "display_name": "Lovisa",
          "external_urls": {
            "spotify": "https://open.spotify.com/user/lovisa_bylund"
          },
          "href": "https://api.spotify.com/v1/users/lovisa_bylund",
          "id": "lovisa_bylund",
          "type": "user",
          "uri": "spotify:user:lovisa_bylund"
        },
        "primary_color": null,
        "public": false,
        "snapshot_id": "MzIsYjRiZjY0ZTEyYjZkOWI5MDVhYjNmMjVhZGRjYjJiMmM2NGYzMThhYg==",
        "tracks": {
          "href": "https://api.spotify.com/v1/playlists/0oqN3NTC4GcnGulehjcxHp/tracks",
          "total": 30
        },
        "type": "playlist",
        "uri": "spotify:playlist:0oqN3NTC4GcnGulehjcxHp"
      }
    ],
    "limit": 10,
    "next": "https://api.spotify.com/v1/users/lovisa_bylund/playlists?offset=10&limit=10",
    "offset": 0,
    "previous": null,
    "total": 18
  };
  // const data = useSpotifyRequest('/me/playlist')

  const firstFourImages = [];
    likedSongs.tracks.forEach(track => {
      if (track.album && track.album.images) {
        track.album.images.forEach((image, index) => {
          if (index < 1) {
            if (firstFourImages.length < 4) {
              firstFourImages.push(image.url);
            }
          }
        });
      }
    });
    
  const filteredPlaylists = DATA.items.filter(item => item.owner.uri === 'spotify:user:lovisa_bylund');

  const Item = ({ item, onPress }) => (
    <Pressable onPress={() => onPress(item)}>
      <Text style={styles.itemtitle}>{item.name}</Text>
    </Pressable>
  );

  const handlePress = (chosenItem) => {
    setSelectedPlaylist(chosenItem);
  };
  


      return (
        <SafeAreaView>
          <Popover popoverStyle={styles.popOver} isVisible={showPopover} onRequestClose={() => setShowPopover(false)}>
            <ScrollView 
              contentContainerStyle={styles.Scrollview} 
              style={styles.view} nestedScrollEnabled={true} 
              horizontal
            >
              <LinearGradient
                colors={['#48A04C', '#2E452F', '#101010' ]}
                style={styles.linearGradient}
                locations={[0, 0.6, 0.95]}
              >
                <Text style={styles.tag}>Create New Playlist</Text>
                <View style={styles.art}>
                  {firstFourImages.map((imageUrl, index) => (
                    <View key={index} style={styles.column}>
                      <Image
                        source={{ uri: imageUrl }}
                        style={styles.img}
                      />
                    </View>
                  ))}
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <TextInput style={styles.name}
                    editable
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Name"
                    placeholderTextColor="#B3B3B3" 
                  />
                  <View style={{marginTop: 16, marginLeft: 20}}>
                    <Text style={{color: '#B3B3B3', marginBottom: -8}}>Private</Text>
                      <Switch
                        trackColor={{false: '#323632', true: '#63A47A'}}
                        thumbColor={isEnabled ? '#1ED760' : '#B3B3B3'}
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                      />
                  </View>
                </View>
              </LinearGradient>
              <LinearGradient
                colors={['#48A04C', '#2E452F', '#101010' ]}
                style={styles.linearGradient}
                locations={[0, 0.6, 0.95]}
              >
                <Text style={styles.tag}>Add To Existing Playlist</Text>
                <View style={styles.scrollContainer}>
                  <View style={styles.albumContainer}>
                    <Text style={styles.choosenAlbum}>Choosen Playlist</Text>
                    <View style={styles.albumScrollImg}>
                      <Image source={{uri: selectedPlaylist == null ? 'https://cdn.getmidnight.com/b5a0b552ae89a91aa34705031852bd16/2022/08/1_1---2022-08-24T165236.013-1.png' : selectedPlaylist.images[0].url}} 
                      style={{width: 120, height: 120, borderRadius: 5}} />
                    </View>
                    <Text style={styles.choosenName}>{selectedPlaylist ? selectedPlaylist.name : "Choose a playlist"}</Text>
                  </View>
                  <FlatList
                    data={filteredPlaylists}
                    renderItem={({ item }) => <Item item={item} onPress={handlePress} />}
                    keyExtractor={item => item.id}
                    style={styles.flatlist}
                  />
                </View>
              </LinearGradient>
            </ScrollView>

          </Popover>
        </SafeAreaView>
      );
    }

  const styles = StyleSheet.create({
    img: {
      height: 50,
      width: 50,
    },
    flatlist: {
      paddingHorizontal: 5
    },
    itemtitle: {
      fontSize: 15,
      color: 'white',
      padding: 2,
    },
    Scrollview: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 90,
    },
    view: {
      height: 600,
      width: 390,
      backgroundColor: 'rgba(0,0,0,0.5)'
    },
    linearGradient: {
      alignItems: 'center',
      height: 385,
      width: 364,
      borderRadius: 15,
      padding: 30,
      margin: 20
    },
    popOver:{
      borderRadius: 15,
    },
    tag: {
      backgroundColor: '#1ED760',
      height: 33,
      width: 309,
      borderRadius: 20,
      textAlign: 'center',
      textAlignVertical: 'center',
      color: 'black',
      fontWeight: 'bold',
      fontSize: 20,
      marginTop: 2
    },
    art: {
      backgroundColor: 'white',
      height: 210,
      width: 210,
      marginTop: 28,
      flexDirection: 'row',
      flexWrap: 'wrap',
    },
    column: {
      width: '50%'
    },
    img: {
      width: '100%',
      height: 105, // Adjust the height of the images as needed
      resizeMode: 'cover',
    },
    name: {
      backgroundColor: '#323632',
      height: 30,
      width: 141,
      color: 'white',
      marginTop: 28,
      borderRadius: 5,
      paddingHorizontal: 7.5,
      borderWidth: 1,
    },
    scrollContainer: {
      height: 264,
      width: 309,
      backgroundColor: '#101010',
      marginTop: 24,
      borderRadius: 10,
      flexDirection: 'row',
    },
    albumContainer: {
      height: 264,
      width: 154.5,
      backgroundColor: '#101010',
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      borderRightWidth: 1,
      borderColor: '#B3B3B3',
      alignItems: 'center',
      justifyContent: 'center',
    },
    albumListContainer: {
      height: 264,
      width: 154.5,
      backgroundColor: '#101010',
      borderTopRightRadius: 10,
      borderBottomRightRadius: 10,
      borderLeftWidth: 1,
      borderColor: '#B3B3B3',
    },
    albumScrollImg: {
      height: 120,
      width: 120,
      backgroundColor: 'white',
      borderRadius: 5, 
    },
    choosenAlbum: {
      backgroundColor: '#1ED760',
      height: 30,
      width: 135,
      textAlign: 'center',
      textAlignVertical: 'center',
      marginBottom: 20,
      borderRadius: 5,
      color: 'black',
      fontWeight: 'bold',
      fontSize: 15,
    },
    choosenName: {
      backgroundColor: '#323632',
      height: 30,
      width: 120,
      textAlign: 'center',
      textAlignVertical: 'center',
      color: '#B3B3B3',
      borderRadius: 5,
      marginTop: 20,
    }, 
    dataList: {
      padding: 20
    }
  });
