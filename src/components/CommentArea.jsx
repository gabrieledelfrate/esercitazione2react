/*TOKEN: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlkNTI5ZGU2Mjg4NjAwMTg4M2Y0MmUiLCJpYXQiOjE3MDQ4MDkxMTcsImV4cCI6MTcwNjAxODcxN30.obDBsC0hsBTOGi23Vw1wU8kqvoGJY4DesWcfWoMd5ps*/

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Form, Button, InputGroup } from 'react-bootstrap';

const CommentArea = ({ bookAsin }) => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [newRate, setNewRate] = useState('1');

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const response = await axios.get(
                    `https://striveschool-api.herokuapp.com/api/comments/${bookAsin}`,
                    {
                        headers: {
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlkNTI5ZGU2Mjg4NjAwMTg4M2Y0MmUiLCJpYXQiOjE3MDQ4MDkxMTcsImV4cCI6MTcwNjAxODcxN30.obDBsC0hsBTOGi23Vw1wU8kqvoGJY4DesWcfWoMd5ps',
                        },
                    }
                );
                setComments(response.data);
            } catch (error) {
                console.error('Error fetching comments:', error);
                setComments([]);
            }
        };

        fetchComments();
    }, [bookAsin]);

    const handleInputChange = (event) => {
        if (event.target.name === 'newComment') {
            setNewComment(event.target.value);
        } else if (event.target.name === 'newRate') {
            setNewRate(event.target.value);
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            await axios.post(
                'https://striveschool-api.herokuapp.com/api/comments/',
                {
                    comment: newComment,
                    rate: newRate,
                    elementId: bookAsin,
                },
                {
                    headers: {
                        Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlkNTI5ZGU2Mjg4NjAwMTg4M2Y0MmUiLCJpYXQiOjE3MDQ4MDkxMTcsImV4cCI6MTcwNjAxODcxN30.obDBsC0hsBTOGi23Vw1wU8kqvoGJY4DesWcfWoMd5ps',
                    },
                }
            );
            setNewComment('');
            setNewRate('1');
        } catch (error) {
            console.error('Error posting comment:', error);
        }

        const fetchComments = async () => {
            try {
                const response = await axios.get(
                    `https://striveschool-api.herokuapp.com/api/comments/${bookAsin}`,
                    {
                        headers: {
                            Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTlkNTI5ZGU2Mjg4NjAwMTg4M2Y0MmUiLCJpYXQiOjE3MDQ4MDkxMTcsImV4cCI6MTcwNjAxODcxN30.obDBsC0hsBTOGi23Vw1wU8kqvoGJY4DesWcfWoMd5ps',
                        },
                    }
                );
                setComments(response.data);
            } catch (error) {
                console.error('Error fetching comments:', error);
                setComments([]);
            }
        };

        fetchComments();
    };

    return (
        <div>
            <h3>Commenti</h3>
            {comments.map((comment, index) => (
                <div key={index}>
                    <p>{comment.comment}</p>
                    <p>Rate: {comment.rate}</p>
                </div>
            ))}
            <Form onSubmit={handleSubmit}>
                <InputGroup>
                    <InputGroup.Text>Nuovo Commento:</InputGroup.Text>
                    <Form.Control
                        as="textarea"
                        aria-label="Nuovo Commento:"
                        name="newComment"
                        value={newComment}
                        onChange={handleInputChange}
                    />
                </InputGroup>

                <Form.Select
                    aria-label="Valutazione"
                    name="newRate"
                    value={newRate}
                    onChange={handleInputChange}
                >
                    <option value="" disabled>Valutazione</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </Form.Select>
                <Button type="submit">Invia commento</Button>
            </Form>
        </div>
    );
};

export default CommentArea;
