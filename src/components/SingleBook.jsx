import React from 'react';
import { Card } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import booksData from "../data/books.json";

class SingleBook extends React.Component {
	state = { selected: false };
    state = {showModal: false };
    

    handleShowModal = () => {
        this.setState({ showModal: true });
      };
    
    handleCloseModal = () => {
        this.setState({ showModal: false });
      }; 
     
	render() {
        
		return (
            <><Card
                onClick={() => this.setState({ selected: !this.state.selected })}
                style={{
                    border: this.state.selected ? '3px solid red' : 'none',
                }}>
                <Card.Img variant="top" src={this.props.book.img} />
                <Card.Body>
                    <Card.Title style={{ color: 'black' }}>
                        {this.props.book.title}
                    </Card.Title>
                    <Card.Text>Prezzo: {this.props.book.price}€</Card.Text>
                      <Button variant="primary" onClick={this.handleShowModal}>
                        Buy Right Now! &copy;
                      </Button>
                      <Button variant="secondary">Add to the cart</Button>
                </Card.Body>
            </Card><Modal show={this.state.showModal} onHide={this.handleCloseModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Instant Book Delivery Sistem ©</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        The book was just delivered, check outside your door!
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.handleCloseModal}>
                            OK
                        </Button>
                    </Modal.Footer>
                </Modal></>
		);
	}
}

export default SingleBook;