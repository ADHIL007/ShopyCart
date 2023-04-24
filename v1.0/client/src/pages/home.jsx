import React, { Profiler, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Cards from '../components/cards'
import Profile from "../components/profile";
import axios from "axios";

function Home() {
  const { id } = useParams();
  const [userData, setUserData] = useState({});
  
  useEffect(() => {
    const url = `http://localhost:8000/home/${id}`;
    axios.get(url).then(res => {
      const userData = res.data;
      setUserData(userData);
    }).catch(err => {
      console.log(err);
    });
  }, [id]);
  

  const [PdData, setData] = useState([]);

    
  useEffect(() => {
    const url = `http://localhost:8000/card`;
    axios.get(url).then(res => {
      const PdData = res.data;
      setData(PdData);
    }).catch(err => {
      console.log(err);
    });
  },[]);


  console.log(PdData)


  return (
    <div> 
      <Profile name={userData.username} email={userData.email} />
      <div className="card-section">
        <div className="row ">
        {PdData.map(item => {
    console.log(item.pname);
    return <Cards key ={item._id} name={item.pname} price ={item.price} disc ={item.pdisc}  id ={item._id} />;
})}

          
        </div>
      </div>
    </div>
  );
}

export default Home;
