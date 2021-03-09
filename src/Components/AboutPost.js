import React from 'react';

const AboutPost = (props) => {
    const { id, title, body } = props.post
    return (
        <div>
            <h1>This is about post</h1>
            <h1>Hi {id}</h1>
            <h2> Title : {title}</h2>
            <p>Body : {body}</p>
        </div>
    );
};

export default AboutPost;