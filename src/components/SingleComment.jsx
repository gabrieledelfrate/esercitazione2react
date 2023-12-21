import React from 'react';

const SingleComment = ({ comment }) => {
    if (!comment || !comment.comment || !comment.rate || !comment.elementId) {
        return null;

    }
    return (
        <div>
        <h2>Comments</h2>
        {comment.map((comment, index) => (
            <SingleComment key={index} comment={comment} />
        ))}
    </div>
    );
};

export default SingleComment;