import React, {useState, useRef} from 'react'
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Image,
    ScrollView,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";
import {useDispatch} from 'react-redux'
import {addPost} from "../store/actions/post";
import {PhotoPicker} from "../components/PhotoPicker";


export const CreateScreen = ({navigation}) => {

    const dispatch = useDispatch()
    const [text, setText] = useState('')
    const imgRef = useRef()

    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            booked: false,
            img: imgRef.current,
            text

        }
        dispatch(addPost(post))
        navigation.navigate('MainScreen')
    }

    const photoPickHandler = uri => {
        imgRef.current = uri
    }

    return <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Create new screen</Text>
                <TextInput style={styles.textArea} placeholder='Enter text' value={text} onChangeText={setText}
                           multiline/>
                <PhotoPicker onPick={photoPickHandler}/>
                <Button title='Create post' color='black' onPress={saveHandler} disabled={!text}/>
            </View>
        </TouchableWithoutFeedback>
    </ScrollView>

}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10,
    },
    title: {
        fontSize: 20,
        textAlign: 'center',
        fontFamily: 'montserrat-regular',
        marginVertical: 10
    },
    textArea: {
        padding: 10,
        marginBottom: 10
    },
    image: {
        width: '100%',
        height: 200,
        marginBottom: 20
    }
})
