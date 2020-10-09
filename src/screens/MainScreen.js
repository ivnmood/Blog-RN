import React, { useEffect} from 'react'
import {PostList} from "../components/PostList";
import {useDispatch, useSelector} from "react-redux";
import {loadPosts} from "../store/actions/post";


export const MainScreen = ({navigation}) => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadPosts())
    }, [dispatch])

    const allPosts = useSelector(state => state.post.allPosts)

    const openPost = post => {
        navigation.push('PostScreen', {
            name: new Date(post.date).toLocaleDateString(),
            postId: post.id,
            booked: post.booked
        })
    }

    return <PostList onOpen={openPost} date={allPosts}/>
}

