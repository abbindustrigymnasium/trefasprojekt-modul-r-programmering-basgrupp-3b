import { Pressable, View, Text, ViewBase } from 'react-native';
import { Stack ,Link, router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { Image } from 'expo-image';


import PercentageShower from '../Components/PercentageShower';
import {useSpotifyRequest} from '../APICommunication/api_communicator'

function millisToMinutesAndSeconds(millis) {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return (
    seconds == 60 ?
    (minutes+1) + ":00" :
    minutes + ":" + (seconds < 10 ? "0" : "") + seconds
  );

}

const pitchClassAndTones = ["C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A","A#", "B"]


export default function Info() {


  const local = useLocalSearchParams();


  const data = useSpotifyRequest(`/audio-features/${local['id']}`)

  

  
  // If the page was reloaded or navigated to directly, then the modal should be presented as
  // a full screen page. You may need to change the UI to account for this.
  const isPresented = router.canGoBack();

  
  return (
   
    <View className="flex-1 bg-all-black items-start justify-start px-5 py-5">
       <Stack.Screen
        options={{
          title: ''
       
          }}
      />
      {/* Use `../` as a simple way to navigate to the root. This is not analogous to "goBack". */}
      {!isPresented && <Pressable onPress={() => {router.back()}} ><Text>Dismiss</Text></Pressable>}
      {/* Native modals have dark backgrounds on iOS, set the status bar to light content. */}
      <StatusBar style="light" />
      <Text className="text-2xl font-bold text-white mb-5">Song features</Text>

        { !data ? <Text className="text-white text-lg font-bold">We can't show any info for this song at the moment</Text>:
        <View className="w-full h-full flex" style={{gap: "20px"}}>
        <View className="w-full flex flex-col" style={{gap: "10px"}}>
          <View className="w-full flex flex-row jusitfy-between">
          <View className="flex flex-row items-center w-1/2" style={{gap: "5px"}}>
        <Image
            loading="lazy"
            source={require("../../assets/icons/speaker.svg")}
            className="aspect-square object-contain object-center w-10 overflow-hidden"
          />
      
          <Text className="text-white text-lg font-bold">{data?.loudness} dB</Text>
        </View>
        <View className="flex flex-row items-center w-1/2" style={{gap: "5px"}}>
        <Image
            loading="lazy"
            source={require("../../assets/icons/duration.svg")}
            className="aspect-square object-contain object-center w-10 overflow-hidden"
          />
      
          <Text className="text-white text-lg font-bold">{millisToMinutesAndSeconds(data?.duration_ms)} minutes </Text>
        </View>
          </View>

          <View className="w-full flex flex-row justify-between">
          {data?.key!=-1 && <View className="flex flex-row items-center w-1/2 " style={{gap: "5px"}}>
        <Image
            loading="lazy"
            source={require("../../assets/icons/music_note.svg")}
            className="aspect-square object-contain object-center w-10 overflow-hidden"
          />
      
          <Text className="text-white text-lg font-bold">{pitchClassAndTones[data?.key]}</Text>
        </View>}
        <View className="flex flex-row items-center  w-1/2" style={{gap: "5px"}}>
        <Image
            loading="lazy"
            source={require("../../assets/icons/speed.svg")}
            className="aspect-square object-contain object-center w-10 overflow-hidden"
          />
      
          <Text className="text-white text-lg font-bold">{data?.tempo} BPM </Text>
        </View>
          </View>
        
        
        
        </View>
     
   
      <PercentageShower title="Acousticness" percentage={data?.acousticness}/>
      <PercentageShower title="Danceability" percentage={data?.danceability}/>
      <PercentageShower title="Energy" percentage={data?.energy}/>
      <PercentageShower title="Instrumentalness" percentage={data?.instrumentalness}/>
      <PercentageShower title="Liveness" percentage={data?.liveness}/>
      <PercentageShower title="Speechiness" percentage={data?.speechiness}/>
      <PercentageShower title="Valence" percentage={data?.valence}/>
   
        </View>
     
        
      }
      
   
    </View>
  );
}