// import React, { useState } from 'react'
// import { StyleSheet, Text, SafeAreaView, Pressable } from 'react-native'
// import { Card } from 'react-native-paper'
// import * as Api from './TEMP/for-prefs'

// const [genres, setGenres] = useState([])

// function renderArr (arr) {
//     if (arr != []) {
//         return arr.map((item, index) => <Text key={index}>{item}</Text>)
//     }
// }

// function resetGenres () {
//     setGenres([])
// }

// function fillGenres () {
//     const newGenres = Api.getGenres()
//     setGenres(newGenres)
// }

// export default function Page () {
//     return (
//         <SafeAreaView style={styles.container}>
//             <Text>PREFERENCES</Text>
//             <Pressable style={styles.button} onPress={fillGenres}>
//                 <Text>Get all available genres</Text>
//             </Pressable>

//             <Card style={styles.list}>{renderArr(genres)}</Card>

//             <Pressable style={styles.button} onPress={resetGenres}>
//                 <Text>Reset genres</Text>
//             </Pressable>
//         </SafeAreaView>
//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         marginTop: 120,
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
//     list: {
//         flex: 1,
//         padding: 2,
//         maxHeight: 120,
//     },
//     button: {
//         flex: 1,
//         padding: 2,
//         backgroundColor: "red",
//         maxHeight: 25
//     }
// })
