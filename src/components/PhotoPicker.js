import React, {useState} from 'react'
import * as ImagePicker from 'expo-image-picker';
import {View, StyleSheet, Image, Button, Alert} from "react-native";
import * as Permissions from 'expo-permissions';

export const PhotoPicker = ({onPick}) => {

    async function askPermissions() {
        const {status} = await Permissions.askAsync(
            Permissions.CAMERA,
            Permissions.CAMERA_ROLL
        )
        if (status !== 'granted') {
            Alert.alert('You have not given permission to create a photo, change it in the settings')
            return false
        }
        return true
    }

    const [image, setImage] = useState(null)

    const takePhoto = async () => {
        const hasPermissions = await askPermissions()

        if (!hasPermissions) {
            return
        }

        const image = await ImagePicker.launchCameraAsync({
            quality: 0.7,
            allowsEditing: false,
            aspect: [16, 9]
        })

        setImage(image.uri)
        onPick(image.uri)
    }
    return <View style={styles.wrapper}>
        <Button title='Take a photo' onPress={takePhoto}/>
        {image && <Image style={styles.image} source={{uri: image}}/>}
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 300,
        marginTop: 10
    }
})
