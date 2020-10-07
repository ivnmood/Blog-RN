import React from 'react'
import {View, Text, StyleSheet, Image, Button, ScrollView, Alert} from "react-native";
import {DATA} from "../data";
import {THEME} from "../theme";


export const PostScreen  = ({route}) => {

    const {postId} = route.params

    const post = DATA.find(p => p.id === postId)

    const removePost = () => {
        Alert.alert(
            "Delete post",
            "Do you want delete post?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                { text: "OK", style: 'destructive', onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
        );
    }

    return <ScrollView style={styles.center}>
        <Image source={{uri: post.img}} style={styles.image}/>
        <View style={styles.textWrap}>
            <Text style={styles.title}>{post.text}</Text>
        </View>
        <Button title='Delete' color={THEME.DANGER_COLOR} onPress={removePost}/>
    </ScrollView>
}

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 200
    },
    textWrap: {
        padding: 10,
    },
    title: {
        fontFamily: 'montserrat-regular'
    }
})
