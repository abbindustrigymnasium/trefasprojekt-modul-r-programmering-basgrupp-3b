import React, { useState } from 'react'
import { Text, View, StyleSheet, Pressable, Image } from 'react-native'
import { router } from 'expo-router'
import Selector from '../../Preferences/selector'
import { useStorageState } from '../../Storage/asyncStorageFunctions'

var selected = {
    genres: [],
    artists: [],
    tracks: [],
    length: function () {
        return this.genres.length + this.artists.length + this.tracks.length
    },
    includesElement: function (type, el) {
        if (type == 'genres') {
            return this.genres.includes(el)
        }
        for (let i = 0; i < this[type].length; i++) {
            let arr = this[type][i]
            if (arr[0] === el[0] && arr[1] === el[1]) {
                return true
            }
        }
        return false
    },
}

export default function App () {
    const [dummyState, setDummyState] = useState(false)
    const forceRender = () => {
        setDummyState(!dummyState)
    }
    const [recs_endpoint, storeStringData] = useStorageState('recs_endpoint')

    function getRecommendations (selected) {
        if (selected.length() == 0) {
            alert("Please select at least one seed Genre/Track/Artist")
            return
        }
        let query = ''
        if (selected['genres'].length !== 0) {
            query +=
                'seed_genres=' +
                selected['genres'].map(encodeURIComponent).join(',') +
                '&'
        }
        if (selected['artists'].length !== 0) {
            query +=
                'seed_artists=' +
                selected['artists'].map((arr) => encodeURIComponent(arr[1])).join(',') +
                '&'
        }

        if (selected['tracks'].length !== 0) {
            query +=
                'seed_tracks=' +
                selected['tracks'].map((arr) => encodeURIComponent(arr[1])).join(',') +
                '&'
        }
        if (query.endsWith('&')) {
            query = query.slice(0, -1)
        }

        storeStringData('/recommendations?' + query)
        router.push('/recs?q=/recommendations%3F' + query)
    }

    const [currentPage, setPage] = useState()
    // null

    const handlePage = (component) => {
        setPage(currentPage === component ? null : component)
    }

    const openPage = () => {
        if (currentPage != null) {
            return (
                <Selector
                    type={currentPage}
                    handlePage={() => handlePage(currentPage)}
                    getSelected={getSelected}
                    changeSelected={changeSelected}
                />
            )
        } else {
            return null
        }
    }

    const getSelected = () => {
        return selected
    }

    const changeSelected = (type, method, item) => {
        if (method == 'push') {
            selected[type].push(item)
        } else if (method == 'rm') {
            selected[type] = selected[type].filter(
                (i) => !(i[0] === item[0] && i[1] === item[1])
            )
        }
        if (currentPage == null) {
            forceRender()
        }
    }

    function renderSelected (selected, type) {
        return (
            <View style={containerStyles.selection}>
                {selected[type].map((item, index) => (
                    <View style={selectionStyles.sItem} key={index}>
                        <Text
                            style={[containerStyles.textContainer, selectionStyles.text]}
                            key={index}>
                            {(type == 'genres' ? item : item[0])
                                .toLowerCase()
                                .replace(/\b\w/g, (word_head) => word_head.toUpperCase())}
                        </Text>
                        <Pressable onPress={() => changeSelected(type, 'rm', item)} style={{ hitSlop: 4 }}>
                            <Text style={selectionStyles.removeButton}> &#10006; </Text>
                        </Pressable>
                    </View>
                ))}
            </View>
        )
    }

    return (
        <View style={styles.body}>
            {!currentPage && (
                <View>
                    <View style={containerStyles.topDiv}>
                        <Text style={[containerStyles.textContainer, styles.title]}>
                            ¡Choose your Groove!
                        </Text>

                        <View style={containerStyles.selectionsContainer}>
                            <View style={selectionStyles.selectionDiv}>
                                <Text
                                    style={
                                        (containerStyles.textContainer,
                                            selectionStyles.selectionText)
                                    }>
                                    Genres
                                </Text>
                                {selected.genres.length == 0 ? (
                                    <Text
                                        style={[
                                            containerStyles.textContainer,
                                            { alignSelf: 'flex-start' },
                                        ]}>
                                        None!
                                    </Text>
                                ) : (
                                    renderSelected(selected, 'genres')
                                )}
                            </View>

                            <View style={selectionStyles.selectionDiv}>
                                <Text
                                    style={
                                        (containerStyles.textContainer,
                                            selectionStyles.selectionText)
                                    }>
                                    Artists
                                </Text>
                                {selected.artists.length == 0 ? (
                                    <Text
                                        style={[
                                            containerStyles.textContainer,
                                            { alignSelf: 'flex-start' },
                                        ]}>
                                        None!
                                    </Text>
                                ) : (
                                    renderSelected(selected, 'artists')
                                )}
                            </View>

                            <View style={selectionStyles.selectionDiv}>
                                <Text
                                    style={
                                        (containerStyles.textContainer,
                                            selectionStyles.selectionText)
                                    }>
                                    Tracks
                                </Text>
                                {selected.tracks.length == 0 ? (
                                    <Text
                                        style={[
                                            containerStyles.textContainer,
                                            { alignSelf: 'flex-start' },
                                        ]}>
                                        None!
                                    </Text>
                                ) : (
                                    renderSelected(selected, 'tracks')
                                )}
                            </View>
                        </View>
                    </View>

                    <View style={containerStyles.bottomDiv}>
                        <View style={containerStyles.selectorContainer}>
                            <Pressable
                                style={[
                                    selectorStyles.button,
                                    { borderTopLeftRadius: 0, borderBottomLeftRadius: 0 },
                                ]}
                                onPress={() => handlePage('Genres')}>
                                <Text
                                    style={[
                                        containerStyles.textContainer,
                                        selectorStyles.buttonText,
                                    ]}>
                                    Genres
                                </Text>
                            </Pressable>
                            <Pressable
                                style={selectorStyles.button}
                                onPress={() => handlePage('Artists')}>
                                <Text
                                    style={[
                                        containerStyles.textContainer,
                                        selectorStyles.buttonText,
                                    ]}>
                                    Artists
                                </Text>
                            </Pressable>
                            <Pressable
                                style={[
                                    selectorStyles.button,
                                    { borderTopRightRadius: 0, borderBottomRightRadius: 0 },
                                ]}
                                onPress={() => handlePage('Tracks')}>
                                <Text
                                    style={[
                                        containerStyles.textContainer,
                                        selectorStyles.buttonText,
                                    ]}>
                                    Tracks
                                </Text>
                            </Pressable>
                        </View>

                        <View style={containerStyles.toRecs}>
                            <Pressable onPress={() => getRecommendations(selected)}>
                                <View style={selectorStyles.playButton}>
                                    <Image
                                        style={{ height: '85%', width: '85%' }}
                                        source={require('../../../assets/icons/play_button.png')}
                                    />
                                </View>
                            </Pressable>
                        </View>
                    </View>
                </View>
            )}
            {currentPage && openPage()}
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#101010',
        height: '100%',
        width: '100%',
    },
    title: {
        fontSize: 28,
        marginTop: 24,
        marginBottom: 12,
        marginLeft: 12,
        alignSelf: 'flex-start',
    },
})

const containerStyles = StyleSheet.create({
    topDiv: {
        height: '70%',
    },
    bottomDiv: {
        height: '30%',
        justifyContent: 'flex-end',
    },
    selectionsContainer: {
        flex: 1,
    },
    selectorContainer: {
        height: '40%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    toRecs: {
        height: '35%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    selection: {
        flexDirection: 'row',
        height: 'auto',
        flexWrap: 'wrap',
    },
    textContainer: {
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 12,
        padding: 2,
    },
})

const selectorStyles = StyleSheet.create({
    button: {
        backgroundColor: '#1e1e1e',
        height: '100%',
        width: '30%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8,
    },
    buttonText: {
        fontWeight: 'bold',
        fontSize: 24,
        textAlign: 'center',
    },
    playButton: {
        backgroundColor: '#1ed760',
        width: 60,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 32,
        marginBottom: 8,
    },
})

const selectionStyles = StyleSheet.create({
    selectionDiv: {
        marginVertical: 4,
        paddingLeft: 12,
    },
    selectionText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#838384',
    },
    sItem: {
        backgroundColor: '#1e1e1e',
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 4,
        marginRight: 8,
        padding: 3,
        paddingHorizontal: 6,
        borderRadius: 8,
    },
    text: {
        color: '#B4b3b3',
        fontWeight: 700,
        fontSize: 16,
    },
    removeButton: {
        color: '#595959',
        paddingTop: 3,
        paddingRight: 2.5,
        paddingLeft: 5,
    },
})