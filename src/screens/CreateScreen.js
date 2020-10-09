import React, {useState} from 'react'
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


export const CreateScreen = ({navigation}) => {

    const dispatch = useDispatch()

    const [text, setText] = useState('')

    const img = 'https://static.coindesk.com/wp-content/uploads/2019/01/shutterstock_1012724596-860x430.jpg'

    const saveHandler = () => {
        const post = {
            date: new Date().toJSON(),
            booked: false,
            text,
            img
        }
        dispatch(addPost(post))
        navigation.navigate('MainScreen')
    }

    return <ScrollView>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.wrapper}>
                <Text style={styles.title}>Create new screen</Text>
                <TextInput style={styles.textArea} placeholder='Enter text' value={text} onChangeText={setText}
                           multiline/>
                <Image style={styles.image}
                       source={{uri: img}}/>
                <Button title='Create post' color='black' onPress={saveHandler}/>
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
