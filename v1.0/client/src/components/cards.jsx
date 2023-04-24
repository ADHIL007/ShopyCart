import React from "react";
import image from "../assets/tomato.jpg";

function Cards(props) {
  console.log(props.id);
  return (
    <div className="col-sm-3 mb-5">
      <div
        className="card shadow-sm"
        style={{
          width: "12rem",
        }}
      >
        <img
          src='https://picsum.photos/seed/person/200'
          className="card-img-top"
          alt="vegetable"
          style={{
            height: "8rem",
            objectFit: "cover",
          }}
        />
        <div className="card-body">
          <h5 className="card-title"> {props.name} </h5>
          <p
            className="card-text"
            style={{
              color: "green",
            }}
          >
            <b> {props.price}$ </b>
          </p>
          <p className="card-text"> { (props.disc).substring(0,20)}.....! </p>
          <div className="d-flex justify-content-between align-items-center">
            <button type="button" className="btn btn-sm btn-outline-success">
              Buy
            </button>
            <a
              href={`/product/${props.id}`}
              className="btn btn-sm btn-outline-secondary"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
