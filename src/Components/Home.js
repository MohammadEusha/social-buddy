import React, { useEffect, useState } from 'react';
import Post from './Post';
const Home = () => {

    const [posts, setPost] = useState([])



    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts`
        fetch(url)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])
    return (
        <div>
            <h1>This is about post</h1>
            <h3>Post Length : {posts.length}</h3>
            {
                posts.map(post => <Post post={post}></Post>)
            }
        </div>
    );
};
export default Home;