
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View, ScrollView, TextInput, Linking, FlatList } from 'react-native';
import React, { useState } from 'react';
import Popover from 'react-native-popover-view';
import { LinearGradient } from "expo-linear-gradient";



export default function PlaylistCard() {
  
  const [text, onChangeText] = React.useState('');
  const [showPopover, setShowPopover] = useState(false);
  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];
  const Item = ({title}) => (
    <Text style={styles.itemtitle}>{title}</Text>
  );
  
      return (
        <SafeAreaView>
          <TouchableOpacity onPress={() => setShowPopover(true)}>
            <Text>Press here to open popover!</Text>
          </TouchableOpacity>
          <Popover popoverStyle={styles.popOver} isVisible={showPopover} onRequestClose={() => setShowPopover(false)}>
            <ScrollView contentContainerStyle={styles.Scrollview} style={styles.view} nestedScrollEnabled={true} horizontal>
            <LinearGradient
              colors={['#48A04C', '#2E452F', '#101010' ]}
              style={styles.linearGradient}
              locations={[0, 0.6, 0.95]}
            >
              <Text style={styles.tag}>Create New Playlist</Text>
              <View style={styles.img}></View>
              <TextInput style={styles.name}
                    editable
                    onChangeText={onChangeText}
                    value={text}
                    placeholder="Name"
                    placeholderTextColor="#B3B3B3" 
                />
              
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
                  <View style={styles.albumScrollImg}></View>
                  <Text style={styles.choosenName}>PLaylistName</Text>
                </View>
                <FlatList
                  data={DATA}
                  renderItem={({item}) => <Item title={item.title} />}
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
    flatlist: {
      padding: 10,
    },
    itemtitle: {
      fontSize: 17,
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
    img: {
      backgroundColor: 'white',
      height: 210,
      width: 210,
      borderRadius: 20,
      marginTop: 28
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
