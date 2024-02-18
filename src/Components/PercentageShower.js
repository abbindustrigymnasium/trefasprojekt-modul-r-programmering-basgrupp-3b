import React from 'react';
import { View, Text } from 'react-native';
import Animated, {FlipInEasyX, Easing} from 'react-native-reanimated';

/**
 * PecentageShower Component
 * 
 * Visually displays a percentage as a bar
 * 
 * @param {number} percentage - The percantage to be displayed in decimal form. 
 * @param {string} title - The title of the bar. 
 * @returns {JSX.Element} - The rendered InfoText component.
 */
const PercentageShower = ({ 
    percentage, 
    title, 

}) => {
    return (
    <View className="w-full flex-col items-start jusitfy-start " style={{gap: 10}}>
        <Text className="text-white text-xl font-bold">{title}</Text>
        <View className="w-full h-2 bg-less-black rounded-full overflow-hidden flex ">
      <View className={`h-full bg-spott-green`} style={{width: `${percentage*100}%`}}></View>
        </View>
    
    </View>
    );
};

export default PercentageShower;
