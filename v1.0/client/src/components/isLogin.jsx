import React,{useState} from 'react'
import {Link} from 'react-router-dom';

function isLogin() {
   const [isLogin, SetStatus] = useState(true)
   function handleclick(){
    SetStatus(!isLogin);

   }
  return (
    <div onClick={handleclick}>
       {
       isLogin ?
 <Link to ='/login' >Login</Link>
  :
 <Link to ='/signup' >Signup</Link>}

    </div>
  )
}

export default isLogin