import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import CardDetails from "../pages/card";

function Pcards() {
    const [ProductData, setData] = useState({});
    const { id } = useParams();
    
  useEffect(() => {
    const url = `http://localhost:8000/product/${id}`;
    axios.get(url).then(res => {
        console.log("received" + res.data)
      const Data = res.data;
      setData(Data);
    }).catch(err => {
      console.log(err);
    });
  },[]);


  console.log(ProductData)
  return (
    <div>
      { [ProductData].map((item) => 
       { console.log(item) 
        return <CardDetails
          key={item._id}
          name={item.pname}
          rating={item.rating}
          image="https://picsum.photos/400"
          price={item.price}
          description={item.pdisc}
          id={item._id}
        /> }
      )}
    </div>
  );
}

export default Pcards;
