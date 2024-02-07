import React, { useState } from 'react'
import {
    Text,
    View,
    StyleSheet,
    Pressable,
    ScrollView,
    TextInput,
} from 'react-native'
import { GENRES_LIST } from './TEMP/APIImitation.js'

var toDisplay = GENRES_LIST

export default function Genres ({
    onToggleGenres,
    getSelected,
    changeSelected,
}) {
    const [dummyState, setDummyState] = useState(false)
    const forceRender = () => {
        setDummyState(!dummyState)
    }

    const [input, onChangeInput] = React.useState('')

    function addGenre (item) {
        if (getSelected().length() < 5) {
            changeSelected('genres', 'push', item)
        } else {
            alert("You may only select up to 5 seeds!")
        }
        forceRender()
    }

    function removeGenre (item) {
        changeSelected('genres', 'rm', item)
        forceRender()
    }

    function executeSearch (arr) {
        return arr.filter((e) => e.startsWith(input.toLowerCase()))
    }

    function renderArray (arr) {
        arr = executeSearch(arr)

        return (
            <ScrollView
                style={styles.buttonList}
                showsVerticalScrollIndicator={false}>
                {arr.map((item, _index) => (
                    <View
                        style={[
                            styles.button,
                            getSelected().genres.includes(item)
                                ? styles.selectedButton
                                : styles.deselectedButton,
                        ]}>
                        <Pressable
                            onPress={() =>
                                getSelected().genres.includes(item) ? removeGenre(item) : addGenre(item)
                            }>
                            <Text style={styles.buttonText}>
                                {item
                                    .toLowerCase()
                                    .replace(/\b\w/g, (word_head) => word_head.toUpperCase())}
                            </Text>
                        </Pressable>
                    </View>
                ))}
            </ScrollView>
        )
    }

    return (
        <View>
            <TextInput
                placeholder="Search Genres"
                onChangeText={onChangeInput}
                style={styles.input}
            />

            <>{renderArray(toDisplay)}</>

            <Pressable onPress={onToggleGenres}>
                <Text style={{ alignSelf: 'center', marginTop: 5, fontSize: 16 }}>
                    Exit Genres
                </Text>
            </Pressable>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonList: {
        maxHeight: 240,
        width: '100%',
        alignSelf: 'center',
        alignItems: 'center',
    },
    button: {
        height: 35,
        paddingHorizontal: 5,
        marginTop: 3,
        marginBottom: 3,
    },
    deselectedButton: {
        backgroundColor: 'red',
    },
    selectedButton: {
        backgroundColor: 'blue',
    },
    buttonText: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bolder',
    },
    input: {
        marginBottom: 10,
        width: '90%',
        alignSelf: 'center',
        textAlign: 'center',
        fontSize: 24,
        padding: 3,
        borderStyle: 'solid',
        borderColor: 'black',
        borderWidth: 2,
    },
})
