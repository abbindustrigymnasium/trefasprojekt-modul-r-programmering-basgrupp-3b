import * as FileSystem from 'expo-file-system'


function stringToUint8Array(str) {
    const length = str.length
    const array = new Uint8Array(new ArrayBuffer(length))
    for(let i = 0; i < length; i++) array[i] = str.charCodeAt(i)
    return array
}
 
export async function fileToBase64(url) {
    try {
        const {uri} = await FileSystem.downloadAsync(url, FileSystem.cacheDirectory + 'temp')
        const content = await FileSystem.readAsStringAsync(uri, {encoding: FileSystem.EncodingType.Base64})
        return content
    } catch(e) {
        console.warn('fileToBase64()', e.message)
        return ''
    }
}

/* Accepts 'rawFile' file object or the data 'uri' */
function fileToBase64Helper(rawFile, uri) {
    return fileToBase64(rawFile ? rawFile : uri)
}