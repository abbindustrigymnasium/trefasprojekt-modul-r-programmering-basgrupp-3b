import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

import PlaylistCard from '../Components/playlistCard';

export default function Page () {
    return (
        <View style={styles.container}>
            <PlaylistCard/>
            <Text>PLAYLIST</Text>
            <Link href="/"> <Text>Return to home page</Text></Link>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
})
