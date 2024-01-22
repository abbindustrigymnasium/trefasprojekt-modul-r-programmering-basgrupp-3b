
import { StyleSheet, Text, TouchableOpacity, SafeAreaView, View, ScrollView, TextInput, Linking } from 'react-native';
import React, { useState } from 'react';
import Popover from 'react-native-popover-view';
import { LinearGradient } from "expo-linear-gradient";



export default function PlaylistCard() {
  
  const [text, onChangeText] = React.useState('');
  const [showPopover, setShowPopover] = useState(false);
  
      return (
        <SafeAreaView>
          <TouchableOpacity onPress={() => setShowPopover(true)}>
            <Text>Press here to open popover!</Text>
          </TouchableOpacity>
          <Popover popoverStyle={styles.popOver} isVisible={showPopover} onRequestClose={() => setShowPopover(false)}>
            <ScrollView contentContainerStyle={styles.Scrollview} style={styles.view}>
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
            </LinearGradient>
            </ScrollView>
          </Popover>
        </SafeAreaView>
      );
    }

  const styles = StyleSheet.create({
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
      color: 'white',
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
  });
