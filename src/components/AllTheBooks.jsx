import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import booksData from "../data/books.json";

class AllTheBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      selectedGenre: "all",
    };
  }

  handleShowModal = () => {
    this.setState({ showModal: true });
  };

  handleCloseModal = () => {
    this.setState({ showModal: false });
  };

  handleGenreChange = (event) => {
    this.setState({ selectedGenre: event.target.value });
  };

  render() {
    const genres = ["all", ...Object.keys(booksData)];

    return (
      <div>
        <div className="d-flex justify-content-center">
          <Form.Control
            as="select"
            onChange={this.handleGenreChange}
            className="w-25"
          >
            <option value="" disabled selected>
              Select your genre
            </option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </Form.Control>
        </div>

        <Row xs={1} sm={2} md={3} lg={4}>
          {Object.keys(booksData).map(
            (category) =>
              (this.state.selectedGenre === "all" ||
                this.state.selectedGenre === category) &&
              booksData[category].map((book, index) => (
                <Col key={index}>
                  <Card style={{ width: "80%", margin: "2rem" }}>
                    <Card.Img variant="top" src={book.img} />
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <Card.Text>Prezzo: {book.price}€</Card.Text>
                      <Button variant="primary" onClick={this.handleShowModal}>
                        Buy Right Now! &copy;
                      </Button>
                      <Button variant="secondary">Add to the cart</Button>
                    </Card.Body>
                  </Card>
                </Col>
              ))
          )}
        </Row>

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
        </Modal>
      </div>
    );
  }
}

export default AllTheBooks;
