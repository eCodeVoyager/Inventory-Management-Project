import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import backgroundImage from "../Images/T2.jpg"; 
import axios from "axios";

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues(prev => ({ ...prev, [event.target.name]: event.target.value }));
  };

  const validateForm = () => {
    let tempErrors = {};
    tempErrors.email = values.email ? "" : "Email is required.";
    tempErrors.password = values.password ? "" : "Password is required.";
    setErrors(tempErrors);
    return Object.values(tempErrors).every(x => x === "");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateForm()) {
      axios.post("http://localhost:4000/login", values)
        .then(response => {
          console.log(response);
          if (response.data === "Invalid credentials") {
            alert("Invalid credentials");
          } else {
            navigate("/home");
          }
        })
        .catch(error => {
          console.log(error);
        });
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-primary vh-100"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover" }}
    >
      <div className="w-50"></div> 
      <div className="p-5 rounded w-40 d-flex flex-column align-items-center border " style={{ backgroundColor: "lightblue", borderColor: "black" }}> {/* Position login form to the right */}
        <h2>Sign-In</h2>
        <form action="" onSubmit={handleSubmit} className="w-100">
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="email"
              placeholder="Enter the email"
              name="email"
              onChange={handleInput}
              value={values.email}
              className="form-control rounded-0"
            />
            {errors.email && <span className="text-danger">{errors.email}</span>}
          </div>

          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input
              type="password"
              placeholder="Enter the password"
              name="password"
              value={values.password}
              onChange={handleInput}
              className="form-control rounded-0"
            />
            {errors.password && <span className="text-danger">{errors.password}</span>}
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0"><strong>Login</strong></button>
          <p>Don’t have an account?</p>
          <Link to="/signup" className="btn btn-default w-100 bg-light rounded-0 text-decoration-none">Signup</Link>
        </form>
      </div>
    </div>
  );
}

export default Login;