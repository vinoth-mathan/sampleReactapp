// import React, { useState } from 'react'
import Navbara from './navbar'
import Home from './components/Home';
// import Login from './components/Login';
// import Register from './components/Register';
import Contact from './components/Contact';
import About from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { BrowserRouter,Route,Routes } from 'react-router-dom';

const App = () => {
  // const [usermodel , setUsermodel] = useState()
    // function getData(data){
    //   setUsermodel(data,'userdata')
    // }
    
  return (
      <>
   <BrowserRouter>
      <Navbara />
    <Routes>
      <Route path='/' element={<Home/>} />
      {/* <Route path='/login' element={<Login /> }/>
      <Route path='/register' element={<Register />} /> */}
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>
   </BrowserRouter>
      </>
  )
}

export default App