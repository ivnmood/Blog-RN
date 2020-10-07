import React from 'react'
import {View, Text, StyleSheet, FlatList} from "react-native";
import {DATA} from "../data";
import {Post} from "../components/Post";


export const BookedScreen = ({navigation}) => {

    const openPost = post => {
        navigation.push('PostScreen', {
            name: new Date(post.date).toLocaleDateString(),
            postId: post.id,
            booked: post.booked
        })
    }

    return <View style={styles.wrapper}>
        <FlatList
            data={DATA.filter(post => post.booked)}
            keyExtractor={post => post.id.toString()}
            renderItem={({item}) => <Post post={item} onOpen={openPost}/>}/>
    </View>
}

const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})
