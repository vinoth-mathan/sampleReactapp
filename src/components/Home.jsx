import React from 'react'
import Fot from './footer/Fot'
import './random.css'
import { Col, Container, Row } from 'react-bootstrap'
import somepic from '../assets/homeone.jpg';
import { useState } from 'react';
import Child from './footer/Child';
import { useRef } from 'react';
import {Button }from 'react-bootstrap';

const Home = () => {
   const inputRef = useRef();
    const [user,setUser] = useState('')
    const [user2,setUser2] = useState([])
    
    function handelSubmit(e){
      e.preventDefault()
      inputRef.current.focus() 

      // if(user===""){
      //     console.log('empty');
      // }
      //  else{
      //     setUser2((previous)=>[...previous,user])
      //     setUser(' ')
      //  }  
      if(user !== ''){
        setUser2((previous)=>[...previous,user])
            setUser(' ')
      }
      
  }
  return (
      <>
          <div style={{ backgroundImage: ` url(${somepic})`,width:'100%',marginBottom:'0px',marginTop:'50px',backgroundRepeat:'no-repeat',backgroundSize:'cover' }} className='img img-fluid'>
      <Container>   
        <Row>
          <Col></Col>
          <Col style={{marginTop:'80px'}} md={8}>
            <h2 style={{color:'white',fontSize:'2rem',lineHeight:'1.3',letterSpacing:'3px',fontWeight:'600',fontStyle:'italic'}}>What <span style={{color:'rgb(6, 182, 114)'}}>great marketing</span> <br /> feels like fro your business...</h2>
          </Col>
          <Col></Col>
          
        </Row>
              <Row>
                <Col></Col>
                <Col md={4}>
                <input style={{width:'100%',padding:'8px',marginTop:'20px'}} type="text" placeholder='enter name' ref={inputRef} value={user} onChange={(e)=>{setUser(e.currentTarget.value)}}/>
                <Button style={{marginTop:'5px',marginBottom:'10px',width:'100%'}} onClick={handelSubmit}>submit</Button>
                </Col>
                <Col md={6}>
                <Child user2={user2}/>
                </Col>
              </Row>
      </Container>
          </div>
      <Fot/>
      </>
  )
}

export default Home