
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View, ScrollView, TextInput, FlatList, Pressable, Switch, Alert } from 'react-native';
import React, { useState } from 'react';
import Popover from 'react-native-popover-view';
import { LinearGradient } from "expo-linear-gradient";
import { Image } from 'expo-image';
import { useSpotifyRequest } from '../APICommunication/api_communicator';
import { fileToBase64 } from '../FileSystem/toBase64';



export default function PlaylistCard({showPopover, setShowPopover, likedSongs}) {
  
  const [text, onChangeText] = React.useState('');
  const [selectedPlaylist, setSelectedPlaylist] = useState(null);
  const [isPrivate, setIsPrivate] = useState(false);
  const toggleSwitch = () => setIsPrivate(previousState => !previousState);

 
  const [playlists, fetchPlaylists] = useSpotifyRequest({
    endpoint: '/me/playlists',
    method: 'GET',
    fetchDirectly: true,
  })

  const [userProfile, fetchMeFromSpotify] = useSpotifyRequest({
    endpoint: '/me',
    method: 'GET',
    fetchDirectly: true,
  });

  const [createPlaylist, fetchCreatePlaylist] = useSpotifyRequest({
    endpoint: '',
    method: 'POST',
    fetchDirectly: false,
    body: {
      name: text,
      public: !isPrivate,
      description: 'New playlist created by GrooveGuru'
    }
  });

  const [playlistImage, fetchAddPlaylistImage] = useSpotifyRequest({
    endpoint: '',
    method: 'PUT',
    fetchDirectly: false,
    costum_headers: {
      'Content-Type': 'image/jpeg'
    },
  });


  const [addToPlaylist, fetchAddToPlaylist] = useSpotifyRequest({
    endpoint: '',
    method: 'POST',
    fetchDirectly: false,
    body: {
      uris: likedSongs.tracks.map(track => track.uri)
    }
  });





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
    
  const filteredPlaylists = React.useMemo(() => {
    return playlists && userProfile ? playlists.items.filter(item => item.owner.uri === userProfile["uri"]) : [];
  }, [playlists, userProfile]);
  

  const Item = ({ item, onPress }) => (
    <Pressable onPress={() => onPress(item)}>
      <Text style={styles.itemtitle}>{item.name}</Text>
    </Pressable>
  );

  const handlePress = (chosenItem) => {
    setSelectedPlaylist(chosenItem);
  };
  

  React.useEffect(() => {
    if(addToPlaylist && addToPlaylist.snapshot_id) {
      Alert.alert(
        "Songs added to playlist",
        "The songs have been added to the playlist",
        [
          {
            text: "OK",
            style: "cancel"
          }
        ]
      )
    }
  }
  , [addToPlaylist])


      return (
        <SafeAreaView>
          <Popover backgroundStyle={{backgroundColor: "rgba(0,0,0, 0.9)"}} popoverStyle={styles.popOver} isVisible={showPopover} onRequestClose={() => setShowPopover(false)}>
            <ScrollView 
              contentContainerStyle={styles.Scrollview} 
              nestedScrollEnabled={true} 
              horizontal
            >
              <LinearGradient
                colors={['#48A04C', '#2E452F', '#101010' ]}
                style={styles.linearGradient}
                locations={[0, 0.6, 0.95]}
              >
                <Pressable onPress={async () => {
                  if(text === '') {
                    Alert.alert(
                      "Please enter a name for the playlist",
                      "You need to enter a name for the playlist to be created",
                      [
                        {
                          text: "OK",
                          style: "cancel"
                        }
                      ]
                    )
                    return
                  }


                 const newPlaylist = await fetchCreatePlaylist(
                  {
                  URL: `/users/${userProfile.id}/playlists`, 
                  }
                  )
                  await fetchAddToPlaylist(
                    {
                    URL: `/playlists/${newPlaylist.id}/tracks`, 
                    }
                    )
                    await fetchAddPlaylistImage(
                      {
                      URL: `/playlists/${newPlaylist.id}/images`,
                      fetchData: await fileToBase64(likedSongs?.tracks[0]?.album?.images[0]?.url) 
                      }
                      )
                  }}>
                    <Text style={styles.tag}>Create New Playlist</Text>
                </Pressable>
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
                        thumbColor={isPrivate ? '#1ED760' : '#B3B3B3'}
                        onValueChange={toggleSwitch}
                        value={isPrivate}
                      />
                  </View>
                </View>
              </LinearGradient>
              <LinearGradient
                colors={['#48A04C', '#2E452F', '#101010' ]}
                style={styles.linearGradient}
                locations={[0, 0.6, 0.95]}
              >
                <Pressable onPress={() => {
                  selectedPlaylist ? fetchAddToPlaylist(
                    {
                    URL: `/playlists/${selectedPlaylist.id}/tracks`, 
                    }
                    ) : Alert.alert(
                      "Please select a playlist",
                      "You need to select a playlist to add the songs to",
                      [
                        {
                          text: "OK",
                          style: "cancel"
                        }
                      ]
                    )
                  
                }}>
                <Text style={styles.tag}>Add To Existing Playlist</Text>
                </Pressable>
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
    },
    view: {
      height: 600,
      width: 390,
      backgroundColor: 'transparent'
    },
    linearGradient: {
      alignItems: 'center',
      height: 385,
      width: 364,
      borderRadius: 15,
      padding: 30,
      margin: 20
    },
    popOver: {
      backgroundColor: 'transparent',

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
      contentFit: 'cover',
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
