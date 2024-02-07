import React, { useState } from 'react'
import { Text, View, StyleSheet, Pressable } from 'react-native'
import Genres from './components/genres'

var selected = {
    genres: ['ååbe'],
    artists: [],
    tracks: ['hi'],
    length: function () {
        return this.genres.length + this.artists.length + this.tracks.length
    },
}

export default function App () {
    const [includeGenres, setIncludeGenres] = useState(false)

    const toggleGenres = () => {
        setIncludeGenres(!includeGenres)
    }

    const getSelected = () => {
        return selected
    }

    const changeSelected = (type, method, item) => {
        if (method == 'push') {
            selected[type].push(item)
        } else if (method == 'rm') {
            selected[type] = selected[type].filter((i) => i !== item)
        }
    }

    function renderSelected (selected) {
        return (
            <View style={(styles.container, { flexDirection: 'row' })}>
                {Object.keys(selected).map(
                    (key) => (
                        selected[key].length !== 0 && (
                            <View style={styles.selectedList} key={key}>
                                <Text style={[styles.paragraph, { fontSize: 14 }]}>
                                    {key.charAt(0).toUpperCase() + key.slice(1)}
                                </Text>
                                {selected[key].map((item, index) => (
                                    <Text
                                        style={[styles.paragraph, { fontSize: 12 }]}
                                        key={index}>
                                        {item.toLowerCase()
                                            .replace(/\b\w/g, (word_head) => word_head.toUpperCase())}
                                    </Text>
                                ))}
                            </View>
                        )
                    )
                )}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {!includeGenres && (
                <View>
                    <Text style={styles.paragraph}>
                        Get recommendations based on seeds:
                    </Text>
                    <Pressable style={styles.button} onPress={toggleGenres}>
                        <Text style={styles.buttonText}> Genres </Text>
                    </Pressable>

                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}> Artists </Text>
                    </Pressable>
                    <Pressable style={styles.button}>
                        <Text style={styles.buttonText}> Tracks </Text>
                    </Pressable>
                    {selected.length() != 0 && (
                        <View>
                            <Text style={styles.paragraph}> Current selection: </Text>
                            <>{renderSelected(selected)}</>
                        </View>
                    )}
                </View>
            )}
            {includeGenres && (
                <Genres
                    onToggleGenres={toggleGenres}
                    getSelected={getSelected}
                    changeSelected={changeSelected}
                />
            )}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        alignSelf: 'center',
        padding: 8,
        height: '90%',
        width: '80%',
    },
    paragraph: {
        justifyContent: 'center',
        textAlign: 'center',
        padding: 2,
        fontSize: 18,
    },
    selectedList: {
        marginTop: 4,
        marginHorizontal: 2,
    },
    button: {
        margin: 6,
        alignSelf: 'center',
        backgroundColor: '#45f542',
        width: 100,
        height: 35,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
    },
})
