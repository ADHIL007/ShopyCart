import React,{useEffect,useState} from 'react'
import axios from 'axios';
import {Link,Routes,Route, useNavigate} from 'react-router-dom';
function signup() {

  const [Data ,Savedata ] = useState({
    username :"",
        email :"" ,
        password :""
  })
  const [url ,seturl] = useState("");
  const history = useNavigate();

 function handlechange(e){
  const {value, name} = e.target;
  Savedata((prev) => {
    return {
      ...prev,
      [name]: value
    };
  });

  }


 function handleSubmit(e){
  e.preventDefault();
seturl()
  try{

  const url = 'http://localhost:8000/signup'
    axios.post(url,{Data}).then(res =>{
    const data = res.data;
   if(data.connection == "success"){
    console.log(data.name + data.email);
     history(`/login`);
   }
   else {
   
alert(data.message);


   } 
   
    })
  }
   catch(e){
     console.log(e);

   }

 }

  return (
    <div><main className="form-signin w-100  mt-5 ">
    <form onSubmit={handleSubmit} action='POST'>
     
      <h1 className="h3 mb-3 fw-normal">Please Signup</h1>
        
      <div className="form-floating mb-2">
        <input type="text" className="form-control" id="floatingInput"
         placeholder="Enter your name"   
        onChange={handlechange}
         name= "username" required/>

        <label htmlFor="floatingInput">User name</label>
      </div>



      <div className="form-floating mb-2">
        <input type="email" className="form-control" id="floatingInput1"
        onChange={handlechange}
        name='email' placeholder="name@example.com"  required/>
        <label htmlFor="floatingInput">Email address</label>
      </div>
      <div className="form-floating mb-2">
        <input type="password" name='password' 
        onChange={handlechange}
        className="form-control" id="floatingPassword" placeholder="Password"  required/>
        <label htmlFor="floatingPassword">Password</label>
      </div>
  
      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
     
      </div>
      <button className="w-100 btn btn-lg btn-success" type="submit">Sign in</button>
      
    </form>
  </main></div>
  )
}

export default signup