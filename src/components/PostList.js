import React from 'react'
import {View, StyleSheet, FlatList} from 'react-native'
import {Post} from "./Post";


export const PostList = ({date, onOpen}) => {
    return <View style={styles.wrapper}>
        <FlatList
            data={date}
            keyExtractor={post => post.id.toString()}
            renderItem={({item}) => <Post post={item} onOpen={onOpen}/>}/>
    </View>
}


const styles = StyleSheet.create({
    wrapper: {
        padding: 10
    }
})
