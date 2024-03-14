import React from 'react'
import Fot from './footer/Fot'
import './random.css'
import { Col, Container, Row } from 'react-bootstrap'
import somepic from '../assets/homeone.jpg';

const Home = () => {
    
  return (
      <>
          <div style={{ backgroundImage: ` url(${somepic})`,width:'100%',height:'500px',marginBottom:'0px',marginTop:'50px',backgroundRepeat:'no-repeat',backgroundSize:'cover' }} className='img img-fluid'>
      <Container>   
        <Row>
          <Col></Col>
          <Col style={{marginTop:'80px'}} md={8}>
            <h2 style={{color:'white',fontSize:'3rem',lineHeight:'1.3',letterSpacing:'3px',fontWeight:'600',fontStyle:'italic'}}>What <span style={{color:'rgb(6, 182, 114)'}}>great marketing</span> <br /> feels like fro your business...</h2>
          </Col>
          <Col></Col>
          
        </Row>
        
      </Container>
          </div>
      <Fot/>
      </>
  )
}

export default Home