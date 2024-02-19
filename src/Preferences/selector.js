import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Pressable,
    ScrollView,
    TextInput,
    StyleSheet,
    Keyboard,
    Image,
} from 'react-native'
import { spotifyRequest } from '../APICommunication/api_communicator'

export default function Selector ({
    type,
    handlePage,
    getSelected,
    changeSelected,
}) {
    const [apiData, setApiData] = useState([])
    const [toDisplay, setToDisplay] = useState([])
    const [endpoint, setEndpoint] = useState(
        type == 'Genres'
            ? '/recommendations/available-genre-seeds'
            : '/search?q=ole&type=artist,track&limit=50'
    )

    useEffect(() => {
        const fetchData = async () => {
            const data = await spotifyRequest(endpoint)
            if (data) {
                setApiData(data[type.toLowerCase()])
            }
        }

        fetchData()
    }, [endpoint, type])

    useEffect(() => {
        if (apiData.length > 0 || apiData.items != undefined) {
            const populateDisplay = () => {
                if (type == 'Genres') {
                    setToDisplay(apiData)
                } else if (type == 'Artists') {
                    var obj = {}
                    for (i in apiData.items) {
                        obj[apiData.items[i].id] = apiData.items[i].name
                    }
                    setToDisplay([obj, 'populated'])
                } else if (type == 'Tracks') {
                    obj = {}
                    for (i in apiData.items) {
                        obj[apiData.items[i].id] = `${apiData.items[i].name
                            } - ${apiData.items[i].artists
                                .map((item, _i) => item.name)
                                .join(', ')}`
                    }
                    setToDisplay([obj, 'populated'])
                }
            }

            populateDisplay()
        }
    }, [apiData, type])

    const [dummyState, setDummyState] = useState(false)
    const forceRender = () => {
        setDummyState(!dummyState)
    }

    const [apiInput, onChangeApiInput] = React.useState('')
    const [input, onChangeInput] = React.useState('')

    const apiSearch = (type, search) => {
        setEndpoint(`/search?q=${search}&type=${type.slice(0, -1)}&limit=50`)
    }

    const [keyboardVisible, setKeyboardVisible] = useState(false)

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            'keyboardDidShow',
            () => {
                setKeyboardVisible(true)
            }
        )

        const keyboardDidHideListener = Keyboard.addListener(
            'keyboardDidHide',
            () => {
                setKeyboardVisible(false)
            }
        )

        return () => {
            keyboardDidShowListener.remove()
            keyboardDidHideListener.remove()
        }
    }, [])

    function executeSearch (arr) {
        return arr.filter((e) => e.startsWith(input.toLowerCase()))
    }

    function selectItem (type, method, item) {
        if (getSelected().length() < 5 || method == 'rm') {
            changeSelected(type, method, item)
        } else {
            alert('You may only select up to 5 seeds!')
        }
        forceRender()
    }

    function renderArray (type, data) {
        var arr = []
        if (type == 'genres') {
            arr = data
        } else if (['artists', 'tracks'].includes(type)) {
            for (id in data[0]) {
                arr.push([data[0][id], id])
            }
        }

        arr = type == 'genres' ? executeSearch(arr) : arr
        return (
            <ScrollView
                style={list.body}
                contentContainerStyle={{
                    flexDirection: 'row',
                    flexWrap: 'wrap',
                    paddingBottom: 8,
                }}
                showsVerticalScrollIndicator={false}>
                {arr.map((item, index) => (
                    <View key={index} style={list.item}>
                        <Text style={[styles.textContainer, list.text]}>
                            {(type == 'genres' ? item : item[0])
                                .toLowerCase()
                                .replace(/\b\w/g, (word_head) => word_head.toUpperCase())}
                        </Text>
                        <Pressable
                            onPress={() =>
                                getSelected().includesElement(type, item)
                                    ? selectItem(type, 'rm', item)
                                    : selectItem(type, 'push', item)
                            }
                            style={{ hitSlop: 4 }}>
                            {getSelected().includesElement(type, item) ? (
                                <Text style={list.button}> &#10006; </Text>
                            ) : (
                                <Text style={[list.button, { color: '#176d36' }]}> &#10010; </Text>
                            )}
                        </Pressable>
                    </View>
                ))}
            </ScrollView>
        )
    }

    function renderSelected (arr, type) {
        return (
            <ScrollView
                style={selected.body}
                contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                {arr[type].map((item, index) => (
                    <View style={selected.item} key={index}>
                        <Text style={[styles.textContainer, selected.text]} key={index}>
                            {(type == 'genres' ? item : item[0])
                                .toLowerCase()
                                .replace(/\b\w/g, (word_head) => word_head.toUpperCase())}
                        </Text>
                        <Pressable onPress={() => selectItem(type, 'rm', item)} style={{ hitSlop: 4 }}>
                            <Text style={selected.removeButton}> &#10006; </Text>
                        </Pressable>
                    </View>
                ))}
            </ScrollView>
        )
    }

    return (
        <View style={styles.body}>
            <View style={top.body}>
                <Text style={[styles.textContainer, styles.title]}>Search {type}</Text>
                <View style={top.searchContainer}>
                    {type == 'Genres' ? (
                        <TextInput
                            placeholder={`¿What's today's groove?`}
                            onChangeText={onChangeInput}
                            style={top.input}
                        />
                    ) : (
                        <View style={top.input}>
                            <TextInput
                                placeholder={`¿What's today's groove?`}
                                onChangeText={onChangeApiInput}
                                style={{ width: '85%', height: '90%', fontSize: 18 }}
                            />
                            <Pressable
                                style={top.searchButton}
                                onPress={() => apiSearch(type.toLowerCase(), apiInput)}>
                                <Image style={{ height: 28, width: 28 }}
                                    source={require('../../assets/icons/search_button.png')}
                                />
                            </Pressable>
                        </View>
                    )}
                </View>

                {toDisplay.length > 0 || toDisplay[1] == 'populated' ? (
                    renderArray(type.toLowerCase(), toDisplay)
                ) : (
                    <Text style={{ textAlign: 'center', fontSize: 24 }}>
                        Loading {type}...
                    </Text>
                )}
            </View>

            {
                keyboardVisible || (
                    <View style={bottom.body}>
                        <View>
                            <Text style={bottom.title}>Selection:</Text>
                        </View>

                        {getSelected()[type.toLowerCase()].length == 0 ? (
                            <Text
                                style={[
                                    styles.textContainer,
                                    { textAlign: 'left', marginLeft: 12 },
                                ]}>
                                None!
                            </Text>
                        ) : (
                            renderSelected(getSelected(), type.toLowerCase())
                        )}

                        <View style={bottom.saveButton}>
                            <Pressable onPress={() => handlePage()}>
                                <Text style={[styles.textContainer, bottom.saveText]}>Save</Text>
                            </Pressable>
                        </View>
                    </View>
                )
            }
        </View >
    )
}

const styles = StyleSheet.create({
    body: {
        height: '100%',
        width: '100%',
    },
    textContainer: {
        color: 'white',
        justifyContent: 'center',
        textAlign: 'center',
        textAlignVertical: 'center',
        fontSize: 12,
        padding: 2,
    },
    title: {
        fontSize: 28,
        marginTop: 24,
        marginBottom: 12,
        marginLeft: 12,
        alignSelf: 'flex-start',
    },
})

const top = StyleSheet.create({
    body: {
        height: '65%',
    },
    searchContainer: {
        flex: 0,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
        padding: 12,
    },
    input: {
        height: 48,
        width: '90%',
        alignSelf: 'center',
        textAlign: 'left',
        flexDirection: 'row',
        alignItems: 'center',
        fontSize: 16,
        paddingLeft: 10,
        paddingRight: 6,
        borderRadius: 4,
        backgroundColor: 'white'
    },
    searchButton: {
        marginHorizontal: 8,
        height: 32,
        width: 32,
        justifySelf: 'flex-end',
        hitSlop: 16,
        alignItems: 'center',
        justifyContent: 'center',
    },
})

const bottom = StyleSheet.create({
    body: {
        height: '35%',
        justifyContent: 'flex-end',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#838384',
        marginLeft: '3.75%',
        textAlign: 'left',
    },
    saveButton: {
        backgroundColor: '#1ed760',
        height: 69,
        width: '92.5%',
        borderRadius: 12,
        marginBottom: 16,
        marginTop: '10%',
        alignSelf: 'center',
    },
    saveText: {
        color: 'black',
        fontSize: 32,
        fontWeight: 'bold',
        paddingTop: '4%',
    },
})

const list = StyleSheet.create({
    body: {
        maxHeight: 207.5,
        width: '100%',
        paddingHorizontal: 8,
    },
    item: {
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
        maxWidth: "95%",
        fontWeight: 700,
        fontSize: 16,
    },
    button: {
        color: '#595959',
        marginLeft: 2.5,
        fontSize: 16,
        paddingBottom: 1,
    },
})

const selected = StyleSheet.create({
    body: {
        paddingHorizontal: '3.75%',
    },
    item: {
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
