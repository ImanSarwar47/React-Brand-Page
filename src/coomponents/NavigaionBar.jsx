import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
const NavigaionBar = () => {
  return (
    <>
    <Navbar bg="white" data-bs-theme="white">
    <Container>
      <Image className='logo' src='./brand_logo.png' />
      <Nav className="me-auto Navbar">
        <Nav.Link className='text-dark' href="#home">Menu</Nav.Link>
        <Nav.Link className='text-dark' href="#features">Location</Nav.Link>
        <Nav.Link className='text-dark' href="#pricing">About</Nav.Link>
        <Nav.Link className='text-dark' href="#pricing">Contact</Nav.Link>
      </Nav>
      <Button style={{background:"#D01C28",fontSize:"14px",borderRadius:"0px"}} className='nav-btn' type="submit">Login</Button>
    </Container>
  </Navbar>
  </>
  )
}

export default NavigaionBar