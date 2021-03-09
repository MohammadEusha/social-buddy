import React from 'react';

const Comment = (props) => {
    const { id, name, email, body } = props.comment;
    return (
        <div>
            <h1>Id : {id}</h1>
            <h3>Title : {name}</h3>
            <h3>Email : {email}</h3>
            <p>Body : {body}</p>
        </div>
    );
};

export default Comment;