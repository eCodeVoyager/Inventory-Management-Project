import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import TShirt1 from "../Images/T3.jpg";
import TShirt2 from "../Images/T4.jpg";
import TShirt3 from "../Images/T5.jpg";
import TShirt4 from "../Images/T6.jpg";
import TShirt5 from "../Images/T7.jpg";
import TShirt6 from "../Images/T8.jpg";
// import TShirt7 from "../Images/T9.jpg";

const tshirts = [
  { id: 1, name: 'TShirt1', image: TShirt1, price: 'Rs.1800' },
  { id: 2, name: 'TShirt2', image: TShirt2, price: 'Rs.1800' },
  { id: 3, name: 'TShirt3', image: TShirt3, price: 'Rs.1800'},
  { id: 4, name: 'TShirt4', image: TShirt4, price: 'Rs.1800' },
  { id: 5, name: 'TShirt5', image: TShirt5, price: 'Rs.1800' },
  { id: 6, name: 'TShirt6', image: TShirt6, price: 'Rs.1800'},
  // { id: 7, name: 'TShirt7', image: TShirt7, price: 'Rs.1800' },
  // Add more t-shirts as needed
];

function HomePage() {
  return (
    <>
      <NavBar />
      <div className="HomePage" style={{ marginTop: '60px' }}>
        <header className="HomePage-header">
          <h1 style={{ marginTop: '-50px' }}>Welcome to Tharu Fashion</h1>
        </header>
        <Container>
          <Row>
            {tshirts.map((tshirt) => (
              <Col md={4} key={tshirt.id} className="mb-4"> {/* Add margin-bottom class here */}
                <Card className="h-100"> {/* Add h-100 class here */}
                  <Card.Img variant="top" src={tshirt.image} style={{ height: '400px', objectFit: 'cover' }} /> {/* Add height and objectFit styles here */}
                  <Card.Body>
                    <Card.Title>{tshirt.name}</Card.Title>
                    <Card.Text>
                      {tshirt.price}
                    </Card.Text>
                    <Link to={`/product/${tshirt.id}`} className="btn btn-primary">View</Link>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
        <Footer />
      </div>
    </>
  );
}

export default HomePage;