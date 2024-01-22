import * as React from "react";
import {
  FlatList,
  ScrollView,
  View,
  StyleSheet,
  Image as ReactImage,
  Text,
} from "react-native";
import { Image } from "expo-image";

export default function Card(props) {
  return (
    <View className="justify-center bg-less-black flex w-5/6 max-w-[340px] flex-col px-5  py-5" style={{gap: "20px"}}>
      <Image
        loading="lazy"
        source={require("../../assets/lemonade.png")}
        className="aspect-square object-contain object-center w-full overflow-hidden"
      />
      <View className="justify-between flex items-start">
        <View className="flex flex-col items-stretch" style={{rowGap: "10px"}}>
            <Text className=" text-walter-white text-2xl font-semibold whitespace-nowrap">Hold Up</Text>
            <Text className=" text-groove-grey text-sm font-semibold whitespace-nowrap">Beyoncé</Text>
        </View>
      </View>
      <View className="flex flex-row items-center justify-between gap-5">
        <Image
          loading="lazy"
          source={require("../../assets/icons/open_in_new.svg")}
          className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full"
        />
          <Image
            loading="lazy"
            source={require("../../assets/icons/playbutton.svg")}
            className="aspect-square object-contain object-center w-14 overflow-hidden"
          />
        <Image
          loading="lazy"
          source={require("../../assets/icons/info.svg")}
          className="aspect-square object-contain object-center w-8 overflow-hidden self-center shrink-0 max-w-full"
        />
      </View>
    </View>
  );
}



