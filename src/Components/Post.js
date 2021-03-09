import React from 'react';
import { useHistory } from 'react-router';

const Post = (props) => {
    const { id, title, body } = props.post

    const history = useHistory();

    const showDetails = id => {
        const url = `post/${id}`
        history.push(url)
    }
    return (
        <div>
            <h1>Id : {id}</h1>
            <h2>Title : {title}</h2>
            <p><strong>Body</strong> : {body}</p>
            <button onClick={() => showDetails(id)}>Show Details</button>
        </div>
    );
};

export default Post;