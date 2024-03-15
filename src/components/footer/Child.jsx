import React from 'react'
import {  Card, CardBody, CardHeader, Col, Container, Row } from 'react-bootstrap'

const Child = ({user2}) => {

  return (
      <>
        <Container>
            <Row>            
                <Col>
                <Card style={{width:"100%",marginTop:'10px'}}>  
                        <CardHeader style={{fontSize:'1.5rem',fontWeight:'700'}}>Users</CardHeader>
                        <CardBody>
                             <ol>
                                { user2<=0 ? <p style={{fontSize:'1.3rem',fontWeight:'500'}}>Empty</p> : (user2.map((user)=>(<li key={user.index} style={{fontSize:'1.2rem',fontWeight:'600'}}>{`WellCome ${user}`}</li>)))  }
                             </ol>
                        </CardBody>
                    </Card></Col>
                <Col></Col>
            </Row>
        </Container>
      
      </>
  )
}

export default Child