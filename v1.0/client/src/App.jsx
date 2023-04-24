import React from 'react';
import {Routes,Route, RouterProvider} from 'react-router-dom';
import NavBar from './components/NavBar';
import Signup from './pages/signup';
import Signin from './pages/signin';
import Cards from './components/cards'
import IsLogin from './components/isLogin';
import { Card } from '@mui/material';
import Home from './pages/home';
import Pcards from './components/pcards';
function App() {
  return (
      <>
        <NavBar  />
    
    
      
      <Routes >
        <Route path='/' element={<IsLogin />} />
         <Route path='/login' element={<><IsLogin /><Signin /></>} />
         <Route path='/signup' element={<><IsLogin /><Signup /></>}/>
         <Route path='/home/:id' element={<Home />} />
         <Route path='/product/:id'  element = {<Pcards />} />
         </Routes>
      

   
      </>
  )
}

export default App;