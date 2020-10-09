import React from 'react'
import {useSelector} from "react-redux";
import {PostList} from "../components/PostList";


export const BookedScreen = ({navigation}) => {





    const bookedPosts = useSelector(state => state.post.bookedPosts)

    const openPost = post => {
        navigation.push('PostScreen', {
            name: new Date(post.date).toLocaleDateString(),
            postId: post.id,
            booked: post.booked
        })
    }

    return <PostList onOpen={openPost} date={bookedPosts}/>
}

