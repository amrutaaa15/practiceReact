import React, { Component } from 'react';
import { Nav, Navbar,Container, Row, Col} from 'react-bootstrap';

export class Nave extends Component {
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark" expand="lg">
    <Container>
      <Navbar.Brand href="#home">Home</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">About</Nav.Link>
          <Nav.Link href="#link">Salary</Nav.Link>
          <Nav.Link href="#link">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  {/* <Container>
    <Row>
      <Col><a href="#">Home</a></Col>
      <Col><a href="#">About</a></Col>
      <Col><a href="#">Salary</a></Col>
      <Col><a href="#">Contact</a></Col>
    </Row>
  </Container> */}


        <Row className="p-3"
         style={{border:"2px solid black", backgroundColor:"black", color:"white"}}>
          <Col xs={4} >
            <Row className="my-3">
              Category
            </Row>
            <Row className="my-3">
              Products
            </Row>
            <Row className="my-3">
              Order
            </Row>
            <Row className="my-3">
              Feedback
            </Row>
          </Col>
          <Col xs={8} >
            <h3>Load Data</h3>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur quis soluta dolor quidem quibusdam iste inventore placeat, eius aliquam? Commodi recusandae eaque quia perferendis rerum, officia rem dignissimos dolorum ducimus!
          </Col>
        </Row>
     
            </div>
        )
    }
}

export default Nave
