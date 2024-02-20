import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

import PlaylistCard from '../../Components/playlistCard'

/**
 * Renders the Playlist page. This page is not used in the final version of the app, because the playlist functionality was added to the recs page through the PlaylistCard component.
 * @returns {JSX.Element} The rendered Playlist page.
 */
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
