import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import logo from './logo.jpeg';
import Headers from './Headers';
// import Home from './components/Home';
import Map from "./map/Map"
import { NavLink } from 'react-router-dom';


const Sucess = () => {
  return (
    <>
    <div>Sucess</div>
    <NavLink to='/yourorder'>Order</NavLink>
    </>
  )
}

export default Sucess