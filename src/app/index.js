import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

export default function Page () {
    return (
        <View style={styles.container}>
            <Text>INDEX</Text>
            <Link href="/prefs"> <Text>Go to the 'Preferences' page</Text></Link>
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
