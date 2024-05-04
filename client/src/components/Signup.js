import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SignupValidation from '../SignupValidation';
import backgroundImage from '../Images/T2.jpg'; // Import your background image here

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(SignupValidation(values));
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center bg-primary vh-100"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover'
      }}
    >
      <div className="w-50"></div> {/* This will create space for the image */}
      <div className="p-5 rounded w-40 d-flex flex-column align-items-center border" style={{ backgroundColor: 'lightblue', borderColor: 'black' }}>
        <div className="bg-white p-3 rounded w-100" style={{ lineHeight: '1.5' }}>
          <h2 style={{ lineHeight: '1.2' }}>Sign-Up</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name"><strong>Name</strong></label>
              <input
                type="text"
                placeholder="Enter the name"
                name="name"
                value={values.name}
                onChange={handleInput}
                className="form-control rounded-0"
              />
              {errors.name && <span className="text-danger">{errors.name}</span>}
            </div>

            <div className="mb-3">
              <label htmlFor="email"><strong>Email</strong></label>
              <input
                type="email"
                placeholder="Enter the email"
                name="email"
                value={values.email}
                onChange={handleInput}
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

            <button type="submit" className="btn btn-success w-100 rounded-0"><strong>Signup</strong></button>
            <p style={{ lineHeight: '1.2' }}>Already have an account?</p>

            <Link to="/" className="btn btn-default w-100 bg-light rounded-0 text-decoration-none">Login</Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;