import React from 'react';
import { Card, Button, Modal } from 'react-bootstrap';

class SingleBook extends React.Component {
    state = {
        showModal: false,
    };

    handleShowModal = () => {
        this.setState({ showModal: true });
    };

    handleCloseModal = () => {
        this.setState({ showModal: false });
    };

    render() {
        const { book, isSelected, onSelect } = this.props;

        return (
            <><Card
                    onClick={() => onSelect(book.asin)}
                    style={{
                        border: isSelected ? '3px solid red' : 'none',
                    }}
                >
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
            </Card>                      
            <Modal show={this.state.showModal} onHide={this.handleCloseModal}>
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