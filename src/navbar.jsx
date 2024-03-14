import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Login from './components/Login';
import CloseButton from 'react-bootstrap/CloseButton';

const Navbara = () => {
  const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

  // const navigate = useNavigate();
  //  const handelNav = (e) => {
  //     e.preventDefault()
  //     navigate('/login')
  //  }
  return (
    <div>

    <Navbar expand="md" bg='primary'fixed='top'>
      <Container fluid>
        <Navbar.Brand href="#">
        <i class="bi bi-building-lock" style={{color:'rgb(155, 47, 5)',fontSize:'2rem',fontWeight:'800'}}></i>
         <span style={{color:'rgb(155, 47, 5)',fontSize:'1rem',fontWeight:'800'}}>Navbar scroll</span>
          </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="m-auto "
            navbarScroll
          >
            <Nav.Link >
              <Link to='/' className='Link'>Home</Link>
            </Nav.Link>
            <Nav.Link >
              <Link to='/about' className='Link'>About</Link>
            </Nav.Link>
            <Nav.Link >
              <Link to='/contact' className='Link'>Contact</Link>
            </Nav.Link>
          </Nav>
          <Form className="d-flex " >
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2 input"
              aria-label="Search"
              
            />
            <Button variant="success" className='me-2'>Search</Button>
            <Button variant="danger"  className='me-2' onClick={handleShow}>Login</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <div>
    <Modal show={show} onHide={handleClose} animation={false}>
        
        <Modal.Body>
            <Login />
        </Modal.Body>
       
        </Modal>
    </div>
    </div>
  )
}

export default Navbara