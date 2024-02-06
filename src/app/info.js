import { Pressable, View, Text, ViewBase } from 'react-native';
import { Stack ,Link, router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { Image } from 'expo-image';


import PercentageShower from '../Components/PercentageShower';
import TextTicker from '../Components/TextTicker';

const sampleData = {
  "acousticness": 0.00242,
  "analysis_url": "https://api.spotify.com/v1/audio-analysis/2takcwOaAZWiXQijPHIx7B",
  "danceability": 0.585,
  "duration_ms": 237040,
  "energy": 0.842,
  "id": "2takcwOaAZWiXQijPHIx7B",
  "instrumentalness": 0.00686,
  "key": 9,
  "liveness": 0.0866,
  "loudness": -5.883,
  "mode": 0,
  "speechiness": 0.0556,
  "tempo": 118.211,
  "time_signature": 4,
  "track_href": "https://api.spotify.com/v1/tracks/2takcwOaAZWiXQijPHIx7B",
  "type": "audio_features",
  "uri": "spotify:track:2takcwOaAZWiXQijPHIx7B",
  "valence": 0.428
}

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
      <View className="w-full h-full flex" style={{gap: "20px"}}>
        <View className="w-full flex flex-col" style={{gap: "10px"}}>
          <View className="w-full flex flex-row jusitfy-between">
          <View className="flex flex-row items-center w-1/2" style={{gap: "5px"}}>
        <Image
            loading="lazy"
            source={require("../../assets/icons/speaker.svg")}
            className="aspect-square object-contain object-center w-10 overflow-hidden"
          />
      
          <Text className="text-white text-lg font-bold">{sampleData.loudness} dB</Text>
        </View>
        <View className="flex flex-row items-center w-1/2" style={{gap: "5px"}}>
        <Image
            loading="lazy"
            source={require("../../assets/icons/duration.svg")}
            className="aspect-square object-contain object-center w-10 overflow-hidden"
          />
      
          <Text className="text-white text-lg font-bold">{millisToMinutesAndSeconds(sampleData.duration_ms)} minutes </Text>
        </View>
          </View>

          <View className="w-full flex flex-row justify-between">
          {sampleData.key!=-1 && <View className="flex flex-row items-center w-1/2 " style={{gap: "5px"}}>
        <Image
            loading="lazy"
            source={require("../../assets/icons/music_note.svg")}
            className="aspect-square object-contain object-center w-10 overflow-hidden"
          />
      
          <Text className="text-white text-lg font-bold">{pitchClassAndTones[sampleData.key]}</Text>
        </View>}
        <View className="flex flex-row items-center  w-1/2" style={{gap: "5px"}}>
        <Image
            loading="lazy"
            source={require("../../assets/icons/speed.svg")}
            className="aspect-square object-contain object-center w-10 overflow-hidden"
          />
      
          <Text className="text-white text-lg font-bold">{sampleData.tempo} BPM </Text>
        </View>
          </View>
        
        
        
        </View>
     
   
      <PercentageShower title="Acousticness" percentage={sampleData.acousticness}/>
      <PercentageShower title="Danceability" percentage={sampleData.danceability}/>
      <PercentageShower title="Energy" percentage={sampleData.energy}/>
      <PercentageShower title="Instrumentalness" percentage={sampleData.instrumentalness}/>
      <PercentageShower title="Liveness" percentage={sampleData.liveness}/>
      <PercentageShower title="Speechiness" percentage={sampleData.speechiness}/>
      <PercentageShower title="Valence" percentage={sampleData.valence}/>
   
        </View>
     
   
    </View>
  );
}