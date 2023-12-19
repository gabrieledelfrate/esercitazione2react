import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import booksData from '../data/scifi.json';

class AllTheBooks extends React.Component {
    render() {
      return (
        <div>
          <Row xs={1} sm={2} md={3} lg={4}>
            {booksData.map((book) => (
              <Col key={book.asin}>
                <Card style={{ width: '80%', margin: '2rem'}}>
                  <Card.Img variant="top" src={book.img} />
                  <Card.Body>
                    <Card.Title>{book.title}</Card.Title>
                    <Card.Text>Prezzo: {book.price}€</Card.Text>
                    <Button variant="primary">Acquista subito</Button>
                    <Button variant="secondary">Aggiungi al carrello</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      );
    }
  }
  
  export default AllTheBooks;