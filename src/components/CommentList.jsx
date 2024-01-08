import React from 'react';
import SingleComment from './SingleComment'

class CommentsList extends React.Component {
    render() {
        const { comments } = this.props;

        return (
            <div>
                <h2>Comments</h2>
                {comments.map((comment) => (
                    <SingleComment comment={comment}  key={comment._id} />
                ))}
            </div>
        );
    }
}

export default CommentsList;