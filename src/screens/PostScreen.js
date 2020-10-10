import React, {useCallback, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import {View, Text, StyleSheet, Image, Button, ScrollView, Alert} from "react-native";
import {THEME} from "../theme";
import {removePost, toggleBooked} from "../store/actions/post";


export const PostScreen = ({route, navigation}) => {
    const dispatch = useDispatch()
    const {postId} = route.params

    const post = useSelector(state => state.post.allPosts.find(p => p.id === postId))

    const booked = useSelector(state => state.post.bookedPosts.some(post => post.id === postId))

    useEffect(() => {
        navigation.setParams({booked})
    }, [booked])

    const toggleHandler = useCallback(() => {
        dispatch(toggleBooked(post))
    }, [dispatch, post])

    useEffect(() => {
        navigation.setParams({toggleHandler})
    }, [toggleHandler])

    const removeHandler = () => {
        Alert.alert(
            "Delete post",
            "Do you want delete post?",
            [
                {
                    text: "Cancel",
                    style: "cancel"
                },
                {
                    text: "OK", style: 'destructive', onPress: () => {
                        navigation.navigate('MainScreen')
                        dispatch(removePost(postId))
                    }
                }
            ],
            {cancelable: false}
        );
    }

    if (!post) {
        return null
    }

    return <ScrollView style={styles.center}>
        <Image source={{uri: post.img}} style={styles.image}/>
        <View style={styles.textWrap}>
            <Text style={styles.title}>{post.text}</Text>
        </View>
        <Button title='Delete' color={THEME.DANGER_COLOR} onPress={removeHandler}/>
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
