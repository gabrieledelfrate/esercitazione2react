import React from 'react';
import SingleComment from './SingleComment'

class CommentsList extends React.Component {
    render() {
        const { comments } = this.props;

        return (
            <div>
                <h2>Comments</h2>
                {comments.map((comment, index) => (
                    <SingleComment key={index} comment={comment} />
                ))}
            </div>
        );
    }
}

export default CommentsList;