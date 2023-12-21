import React from 'react';
import CommentList from './CommentList';
import SingleComment from './SingleComment';

class CommentArea extends React.Component {
    state = {
        comments: [],
    };

    componentDidMount() {
        if (this.props.bookId) {
            this.fetchComments(this.props.bookId);
        }
    }

    fetchComments = async (bookId) => {
        try {
            const response = await fetch(
                `https://striveschool-api.herokuapp.com/api/comments?elementId=${bookId}`,
                {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTg0NTY3YWI1MjViYjAwMThlZDA4NzUiLCJpYXQiOjE3MDMxNzIzNzQsImV4cCI6MTcwNDM4MTk3NH0.IGsYZgKJitdAcrr0D-MlfKZB2R4Bf8KDYOQB0EFftOk',
                    },
                }
            );

            if (response.ok) {
                const comments = await response.json();
                this.setState({ comments });
            } else {
                console.log('error in fetching')
            }
        } catch (error) {
            console.log('error in getting')
        }
    };

    render() {
        return (
            <div>
                <CommentList comments={this.state.comments} />
                <SingleComment bookId={this.props.bookId} />
            </div>
        );
    }
}

export default CommentArea;