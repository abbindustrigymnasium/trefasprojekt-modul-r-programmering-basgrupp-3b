import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { Card } from 'react-native-paper'

import ApiCommunicator from '../Components/api_communicator'

export default function Page () {
    return (
        <View style={styles.container}>
            <Text>PREFERENCES</Text>
            <Link href="/"> <Text>Return to home page</Text></Link>
            <Card>
                <ApiCommunicator />
            </Card>
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
