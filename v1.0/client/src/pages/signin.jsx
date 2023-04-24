import React, { useState } from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

function signup() {
  const history = useNavigate();

  const [Data, Savedata] = useState({
    email: "",
    password: "",
  });
  const [url, seturl] = useState("");

  function handlechange(e) {
    const { value, name } = e.target;
    Savedata((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    seturl();
    try {
      const url = "http://localhost:8000/login";
      axios
        .post(url, {
          Data,
        })
        .then((res) => {
          const data = res.data;
          console.log(data);
          if (data.connection == "success") {
            
            history(`/home/${data.userdata._id}`);
          } else {
            alert(data.message);
          }
        });
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <div>
      {" "}
      <main className="form-signin w-100  mt-5 ">
        <form onSubmit={handleSubmit} action="POST">
          <h1 className="h3 mb-3 fw-normal"> Please sign in </h1>
          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
              onChange={handlechange}
              name="email"
              required
            />
            <label htmlFor="floatingInput"> Email address </label>{" "}
          </div>{" "}
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
              name="password"
              onChange={handlechange}
              required
            />
            <label htmlFor="floatingPassword"> Password </label>{" "}
          </div>
          <div className="checkbox mb-3">
            <label>
              <input type="checkbox" value="remember-me" /> Remember me{" "}
            </label>
          </div>{" "}
          <button className="w-100 btn btn-lg btn-success" type="submit">
            {" "}
            Sign in{" "}
          </button>
        </form>{" "}
      </main>
    </div>
  );
}

export default signup;