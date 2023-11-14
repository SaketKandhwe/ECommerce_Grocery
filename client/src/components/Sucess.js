import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from './logo.jpeg';
import Headers from './Headers';
// import Home from './components/Home';
//import Map from "./map/Map"
import { NavLink } from 'react-router-dom';

const Sucess = () => {
  return (
    <>
    < Headers />
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <Container>
    
      <Row>
        <Col>
          {/* <img className="logo" src={logo} alt="Company Logo" /> */}
          <h1 className="text-center">Thank you for your order!</h1>
          <p className="text-center">Your order is now being processed and will be shipped to you as soon as possible.</p>
          <p className="text-center">In the meantime, you can check the status of your order by clicking the button below.</p>
          <Button variant="primary" href="/order-status">Check Order Status</Button>
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Sucess