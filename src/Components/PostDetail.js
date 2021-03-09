import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import AboutPost from './AboutPost';
import Comment from './Comment';

const PostDetail = () => {

    const { id } = useParams()
    const [post, setPost] = useState({})
    const [comment, setComment] = useState([])

    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [id])


    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setComment(data))
    }, [id])
    return (
        <div>
            <h1>Comment : {comment.length}</h1>

            <AboutPost post={post}></AboutPost>

            {
                comment.map(comment => <Comment comment={comment}></Comment>)
            }

        </div>
    );
};

export default PostDetail;