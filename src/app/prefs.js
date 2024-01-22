import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'

import ApiCommunicator from '../APICommuncations/api_communicator'

export default function Page () {
    return (
        <View style={styles.container}>
            <Text>PREFERENCES</Text>
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