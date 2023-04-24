import axios from "axios";
import React, { useEffect, useState } from "react";

function CardDetails(props) {
  return (
    <div className="container py-5">
      <div className="row">
        <div className="col-md-6">
          <img
            src={props.image}
            alt={props.name}
            className="img-fluid rounded"
          />
        </div>

        <div className="col-md-6">
          <h1 className="mb-3">{props.name} </h1>
          <p className="mb-4">{props.description} </p>
          <h2 className="mb-4">{props.price} </h2>
          <ul className="list-unstyled">
            <li>
              <strong>Rating:</strong>
              {props.rating}
            </li>

       
          </ul>
          <button type="button" className="btn btn-success mb-4">
            Buy now
          </button>

          

          

      
        </div>
      </div>
    </div>
  );
}

export default CardDetails;
