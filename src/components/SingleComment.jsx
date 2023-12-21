import React from 'react';

const SingleComment = ({ comment }) => {
    return (
        <div>
            <p>Comment: {comment.comment}</p>
            <p>Rate: {comment.rate}</p>
        </div>
    );
};

export default SingleComment;