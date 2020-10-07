import React from 'react'
import {DATA} from "../data";
import {PostList} from "../components/PostList";


export const BookedScreen = ({navigation}) => {
    const openPost = post => {
        navigation.push('PostScreen', {
            name: new Date(post.date).toLocaleDateString(),
            postId: post.id,
            booked: post.booked
        })
    }
   const data = DATA.filter(post => post.booked)

    return <PostList onOpen={openPost} date={data}/>
}

