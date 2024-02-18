import React from 'react';
import { View, Text } from 'react-native';
import Animated, {FlipInEasyX, Easing} from 'react-native-reanimated';

/**
 * InfoText Component
 * 
 * Renders an informational text.
 * 
 * @param {string} text - The text to be displayed.
 * @returns {JSX.Element} - The rendered InfoText component.
 */
const InfoText = ({ 
    text, 
    closeCardFunction

}) => {
    return (
        <Animated.View entering={FlipInEasyX.duration(200).easing(Easing.ease)}>
            <Text>Hej</Text>
        
        </Animated.View>
    );
};

export default InfoText;
