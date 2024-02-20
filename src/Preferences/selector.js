import React, { useState, useEffect } from 'react'
import {
    Text,
    View,
    Pressable,
    ScrollView,
    TextInput,
    StyleSheet,
    Keyboard,
    
} from 'react-native'
import { Image } from 'expo-image'
import { useSpotifyRequest } from '../APICommunication/api_communicator'

export default function Selector ({
    type,
    handlePage,
    getSelected,
    changeSelected,
}) {
    const [data, fetchfromSpotify] = useSpotifyRequest(
        {
            method: 'GET',
            fetchDirectly: false
        }
    )
    const [toDisplay, setToDisplay] = useState([])
    const [endpoint, setEndpoint] = useState(
        type == 'Genres'
            ? '/recommendations/available-genre-seeds'
            : `/me/top/${type.toLowerCase}&limit=50`
    )

    const [closeSmall, setSmallClose] = useState(require('../../assets/icons/close_small.png'))
    const [addSmall, setAddSmall] = useState(require('../../assets/icons/add_small.png'))
    console.log(closeSmall)
    useEffect(() => {
        const fetchData = async () => {
            await fetchfromSpotify({URL: endpoint})
        }

        if(type == 'Genres' || apiInput.trim() != '') {
            fetchData()
        }

    }, [endpoint, type])


    useEffect(() => {
        if (data != null) {
            const apiData = data[type.toLowerCase()]
            if (apiData) {

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
        }
    }, [data, type])

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
                        <Text style={[styles.textContainer, list.text, getSelected().includesElement(type,item)? {color: 'white'} : null]}>
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
                                 <Image 
                                 source={closeSmall}
                                 height={24}
                                    width={24}
                                 />
                            ) : (
                                <Image 
                                source={addSmall}
                                height={24}
                                   width={24}
                                />
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
                            <Image 
                            source={closeSmall}
                            height={24}
                            width={24}
                            />
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
                                onSubmitEditing={() => apiSearch(type.toLowerCase(), apiInput)}
                            />
                        
                        </View>
                    )}
                </View>

                {toDisplay.length > 0 || toDisplay[1] == 'populated' ? (
                    renderArray(type.toLowerCase(), toDisplay)
                ) : null}
            </View>

            {keyboardVisible || (
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
            )}
        </View>
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
        justifyContent: 'start',
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
        borderRadius: 4,
        backgroundColor: 'white'
    },
    searchButton: {
        marginHorizontal: 8,
        height: 24,
        width: 24,
        justifySelf: 'flex-end',
        hitSlop: 16
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
        justifyContent: 'center',
        marginVertical: 5,
        marginRight: 10,
        padding: 3,
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
    },
    text: {
        color: '#B3B3B3',
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
        justifyContent: 'center',
        marginVertical: 5,
        marginRight: 10,
        padding: 3,
        gap: 10,
        paddingHorizontal: 10,
        paddingVertical: 10,
        borderRadius: 10,
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
