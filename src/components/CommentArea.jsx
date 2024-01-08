/*TOKEN: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZmNhYmUwZGQxZDAwMTgyZDE3NjMiLCJpYXQiOjE3MDQ3MjE1NzksImV4cCI6MTcwNTkzMTE3OX0.O7VGMqlOP9afseag91o5MIEv6fdMhCG7dUn4CQZzb0k*/

import React from 'react';
import axios from 'axios';
import { Form, FormLabel } from "react-bootstrap";

class CommentArea extends React.Component {
    state = {
        comments: [],
        newComment: '',
        newRate: '1',
    };

    componentDidMount() {
        this.fetchComments();
    }

    componentDidUpdate(prevProps) {
        if (prevProps.bookAsin !== this.props.bookAsin) {
            this.fetchComments();
        }
    }

    fetchComments = async () => {
        try {
            const response = await axios.get(
                `https://striveschool-api.herokuapp.com/api/comments/${this.props.bookAsin}`,
                {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZmNhYmUwZGQxZDAwMTgyZDE3NjMiLCJpYXQiOjE3MDQ3MjE1NzksImV4cCI6MTcwNTkzMTE3OX0.O7VGMqlOP9afseag91o5MIEv6fdMhCG7dUn4CQZzb0k',
                    },
                }
            );
            this.setState({ comments: response.data });
        } catch (error) {
            console.error('Error fetching comments:', error);
            this.setState({ comments: [] });
        }
    };

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    };

    handleSubmit = async (event) => {
        event.preventDefault();

        const { newComment, newRate } = this.state;

        try {
            await axios.post(
                'https://striveschool-api.herokuapp.com/api/comments/',
                {
                    comment: newComment,
                    rate: newRate,
                    elementId: this.props.bookAsin,
                },
                {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTliZmNhYmUwZGQxZDAwMTgyZDE3NjMiLCJpYXQiOjE3MDQ3MjE1NzksImV4cCI6MTcwNTkzMTE3OX0.O7VGMqlOP9afseag91o5MIEv6fdMhCG7dUn4CQZzb0k',
                    },
                }
            );
            this.setState({ newComment: '', newRate: '1' });
            this.fetchComments();
        } catch (error) {
            console.error('Error posting comment:', error);
        }
    };

    render() {
        return (
            <div>
                <h3>Commenti</h3>
                {this.state.comments.map((comment, index) => (
                    <div key={index}>
                        <p>{comment.comment}</p>
                        <p>Rate: {comment.rate}</p>
                    </div>
                ))}
                <Form onSubmit={this.handleSubmit}>
                    <FormLabel>
                        Nuovo Commento:
                        <textarea
                            name="newComment"
                            value={this.state.newComment}
                            onChange={this.handleInputChange}
                        />
                    </FormLabel>
                    <FormLabel>
                        Valutazione:
                        <select
                            name="newRate"
                            value={this.state.newRate}
                            onChange={this.handleInputChange}
                        >
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </FormLabel>
                    <button type="submit">Invia commento</button>
                </Form>
            </div>
        );
    }
}

export default CommentArea;
