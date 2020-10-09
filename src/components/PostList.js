import React from 'react'
import {View, StyleSheet, FlatList, Text} from 'react-native'
import {Post} from "./Post";


export const PostList = ({date, onOpen}) => {

    if (!date.length) {
        return <View style={styles.wrapper}>
            <Text style={styles.noItems}>No items</Text>
        </View>
    }

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
    },
    noItems: {
        fontFamily:  'montserrat-bold',
        textAlign: 'center',
        fontSize: 18,
        marginVertical: 15
    }
})
